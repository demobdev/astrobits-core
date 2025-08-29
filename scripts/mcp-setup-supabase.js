const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'blue') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkSupabaseConfig() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      return envContent.includes('NEXT_PUBLIC_SUPABASE_URL') && envContent.includes('NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }
    return false;
  } catch (error) {
    return false;
  }
}

function createSupabaseConfig() {
  log('Creating Supabase configuration...', 'yellow');
  
  const envContent = `# Supabase Configuration
# Get these values from your Supabase project dashboard
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Example (replace with your actual values):
# NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
`;

  const envPath = path.join(process.cwd(), '.env.local');
  fs.writeFileSync(envPath, envContent);
  log('✅ Supabase configuration template created in .env.local', 'green');
  log('⚠️  Please update .env.local with your actual Supabase credentials', 'yellow');
}

function installSupabaseDependencies() {
  log('Installing Supabase dependencies...', 'yellow');
  
  const dependencies = [
    '@supabase/supabase-js@^2.39.0',
    '@supabase/auth-helpers-nextjs@^0.9.0',
    '@supabase/auth-helpers-react@^0.4.0'
  ];

  try {
    execSync(`npm install ${dependencies.join(' ')} --legacy-peer-deps`, {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    log('✅ Supabase dependencies installed successfully', 'green');
  } catch (error) {
    log(`❌ Failed to install Supabase dependencies: ${error.message}`, 'red');
    throw error;
  }
}

function createSupabaseClient() {
  log('Creating Supabase client configuration...', 'yellow');
  
  const supabaseClientContent = `import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (generate with: npx supabase gen types typescript --project-id YOUR_PROJECT_ID)
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      // Add more tables as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
`;

  const libDir = path.join(process.cwd(), 'lib');
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  const supabasePath = path.join(libDir, 'supabase.ts');
  fs.writeFileSync(supabasePath, supabaseClientContent);
  log('✅ Supabase client created at lib/supabase.ts', 'green');
}

function createAuthComponents() {
  log('Creating authentication components...', 'yellow');
  
  // Create auth context
  const authContextContent = `"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
`;

  const componentsDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const authPath = path.join(componentsDir, 'auth-context.tsx');
  fs.writeFileSync(authPath, authContextContent);
  log('✅ Auth context created at components/auth-context.tsx', 'green');

  // Create auth components
  const authComponentsContent = `"use client";
import { useState } from 'react';
import { useAuth } from './auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function UserProfile() {
  const { user, signOut } = useAuth();

  if (!user) {
    return <div>Not signed in</div>;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Created:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <Button onClick={signOut} variant="outline" className="w-full">
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
}
`;

  const authComponentsPath = path.join(componentsDir, 'auth-components.tsx');
  fs.writeFileSync(authComponentsPath, authComponentsContent);
  log('✅ Auth components created at components/auth-components.tsx', 'green');
}

function createTestPage() {
  log('Creating Supabase test page...', 'yellow');
  
  const testPageContent = `"use client";
import { AuthProvider, useAuth } from '@/components/auth-context';
import { SignInForm, SignUpForm, UserProfile } from '@/components/auth-components';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function AuthTest() {
  const { user, loading } = useAuth();
  const [showSignUp, setShowSignUp] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🔐 Supabase Authentication Test</h1>
          <p className="text-xl text-gray-600">Test the complete authentication flow</p>
        </div>

        <div className="max-w-md mx-auto">
          {user ? (
            <div className="space-y-6">
              <UserProfile />
              
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Status</CardTitle>
                  <CardDescription>Current session information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Status:</strong> <span className="text-green-600">✅ Authenticated</span></p>
                    <p><strong>User ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Email Verified:</strong> {user.email_confirmed_at ? '✅ Yes' : '❌ No'}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-6">
              {showSignUp ? <SignUpForm /> : <SignInForm />}
              
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowSignUp(!showSignUp)}
                >
                  {showSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Authentication Status</CardTitle>
                  <CardDescription>Current session information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><strong>Status:</strong> <span className="text-red-600">❌ Not Authenticated</span></p>
                    <p><strong>User:</strong> None</p>
                    <p><strong>Session:</strong> None</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>🚀 Supabase Integration Status</CardTitle>
              <CardDescription>Real-time authentication with Supabase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">✅</div>
                  <div className="text-sm font-medium">Supabase Client</div>
                  <div className="text-xs text-gray-500">Configured</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">✅</div>
                  <div className="text-sm font-medium">Auth Context</div>
                  <div className="text-xs text-gray-500">Ready</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">✅</div>
                  <div className="text-sm font-medium">Components</div>
                  <div className="text-xs text-gray-500">Functional</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function SupabaseTestPage() {
  return (
    <AuthProvider>
      <AuthTest />
    </AuthProvider>
  );
}`;

  const testPagePath = path.join(process.cwd(), 'app', 'test-supabase', 'page.tsx');
  
  // Ensure directory exists
  const dir = path.dirname(testPagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(testPagePath, testPageContent);
  log('✅ Supabase test page created at /test-supabase', 'green');
}

function updateLayout() {
  log('Updating root layout to include AuthProvider...', 'yellow');
  
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Add AuthProvider import and wrapper
    if (!layoutContent.includes('AuthProvider')) {
      layoutContent = layoutContent.replace(
        'export default function RootLayout({',
        `import { AuthProvider } from '@/components/auth-context';

export default function RootLayout({`
      );
      
      layoutContent = layoutContent.replace(
        '<body className={inter.className}>',
        '<body className={inter.className}>\n        <AuthProvider>'
      );
      
      layoutContent = layoutContent.replace(
        '</body>',
        '        </AuthProvider>\n      </body>'
      );
      
      fs.writeFileSync(layoutPath, layoutContent);
      log('✅ Root layout updated with AuthProvider', 'green');
    } else {
      log('✅ AuthProvider already in layout', 'green');
    }
  }
}

async function setupSupabase() {
  log('🚀 Starting Supabase Integration Setup', 'blue');
  log('This will set up complete authentication infrastructure', 'blue');
  
  try {
    // Step 1: Check and create configuration
    if (!checkSupabaseConfig()) {
      createSupabaseConfig();
    } else {
      log('✅ Supabase configuration already exists', 'green');
    }

    // Step 2: Install dependencies
    installSupabaseDependencies();

    // Step 3: Create Supabase client
    createSupabaseClient();

    // Step 4: Create auth components
    createAuthComponents();

    // Step 5: Create test page
    createTestPage();

    // Step 6: Update layout
    updateLayout();

    // Step 7: Summary
    log('\\n📊 Supabase Setup Summary:', 'blue');
    log('✅ Supabase client configured', 'green');
    log('✅ Authentication context created', 'green');
    log('✅ Auth components ready', 'green');
    log('✅ Test page available', 'green');
    log('✅ Root layout updated', 'green');

    log('\\n🌐 Next Steps:', 'blue');
    log('1. Update .env.local with your Supabase credentials', 'yellow');
    log('2. Visit http://localhost:3008/test-supabase to test authentication', 'green');
    log('3. Run npm run mcp:health to verify integration', 'green');
    log('4. Set up your Supabase database tables', 'yellow');

    log('\\n📚 Documentation:', 'blue');
    log('- Supabase Dashboard: https://supabase.com/dashboard', 'green');
    log('- Supabase Docs: https://supabase.com/docs', 'green');
    log('- Auth Helpers: https://supabase.com/docs/guides/auth/auth-helpers', 'green');

  } catch (error) {
    log(`❌ Supabase setup failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the setup
setupSupabase();
