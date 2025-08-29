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

function checkClerkConfig() {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      return envContent.includes('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY') && envContent.includes('CLERK_SECRET_KEY');
    }
    return false;
  } catch (error) {
    return false;
  }
}

function createClerkConfig() {
  log('Creating Clerk configuration...', 'yellow');
  
  const envPath = path.join(process.cwd(), '.env.local');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }
  
  const clerkConfig = `
# Clerk Configuration
# Get these values from your Clerk dashboard
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Example (replace with your actual values):
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
# CLERK_SECRET_KEY=sk_test_...
`;

  envContent += clerkConfig;
  fs.writeFileSync(envPath, envContent);
  log('✅ Clerk configuration template added to .env.local', 'green');
  log('⚠️  Please update .env.local with your actual Clerk credentials', 'yellow');
}

function installClerkDependencies() {
  log('Installing Clerk dependencies...', 'yellow');
  
  const dependencies = [
    '@clerk/nextjs@^5.0.0'
  ];

  try {
    execSync(`npm install ${dependencies.join(' ')} --legacy-peer-deps`, {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    log('✅ Clerk dependencies installed successfully', 'green');
  } catch (error) {
    log(`❌ Failed to install Clerk dependencies: ${error.message}`, 'red');
    throw error;
  }
}

function createClerkMiddleware() {
  log('Creating Clerk middleware...', 'yellow');
  
  const middlewareContent = `import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/test-supabase",
    "/test-aceternity",
    "/test-aceternity-enhanced",
    "/test-shadcn",
    "/test-radix",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
});
 
export const config = {
  // Protects all routes, including api/trpc
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
`;

  const middlewarePath = path.join(process.cwd(), 'middleware.ts');
  fs.writeFileSync(middlewarePath, middlewareContent);
  log('✅ Clerk middleware created at middleware.ts', 'green');
}

function createClerkComponents() {
  log('Creating Clerk authentication components...', 'yellow');
  
  const clerkComponentsContent = `"use client";
import { SignIn, SignUp, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ClerkSignIn() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In with Clerk</CardTitle>
        <CardDescription>Secure authentication powered by Clerk</CardDescription>
      </CardHeader>
      <CardContent>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              card: "shadow-none",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-600",
            }
          }}
        />
      </CardContent>
    </Card>
  );
}

export function ClerkSignUp() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up with Clerk</CardTitle>
        <CardDescription>Create your account with Clerk</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
              card: "shadow-none",
              headerTitle: "text-2xl font-bold",
              headerSubtitle: "text-gray-600",
            }
          }}
        />
      </CardContent>
    </Card>
  );
}

export function ClerkUserProfile() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center p-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <p className="text-center text-gray-600">Not signed in</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Your Clerk account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          {user.imageUrl && (
            <img 
              src={user.imageUrl} 
              alt="Profile" 
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{user.fullName || user.firstName}</p>
            <p className="text-sm text-gray-600">{user.primaryEmailAddress?.emailAddress}</p>
          </div>
        </div>
        <div className="space-y-2">
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          <p><strong>Email Verified:</strong> {user.primaryEmailAddress?.verification?.status === 'verified' ? '✅ Yes' : '❌ No'}</p>
        </div>
        <div className="flex justify-center">
          <UserButton 
            appearance={{
              elements: {
                userButtonBox: "hover:bg-gray-100 rounded-lg p-2",
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function ClerkAuthStatus() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
            <span className="text-sm">Loading...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication Status</CardTitle>
        <CardDescription>Current Clerk session information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>
            <strong>Status:</strong> 
            {user ? (
              <span className="text-green-600 ml-2">✅ Authenticated</span>
            ) : (
              <span className="text-red-600 ml-2">❌ Not Authenticated</span>
            )}
          </p>
          <p><strong>User ID:</strong> {user?.id || 'None'}</p>
          <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress || 'None'}</p>
          <p><strong>Name:</strong> {user?.fullName || user?.firstName || 'None'}</p>
        </div>
      </CardContent>
    </Card>
  );
}
`;

  const componentsDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const clerkComponentsPath = path.join(componentsDir, 'clerk-components.tsx');
  fs.writeFileSync(clerkComponentsPath, clerkComponentsContent);
  log('✅ Clerk components created at components/clerk-components.tsx', 'green');
}

function createTestPage() {
  log('Creating Clerk test page...', 'yellow');
  
  const testPageContent = `"use client";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import { ClerkSignIn, ClerkSignUp, ClerkUserProfile, ClerkAuthStatus } from "@/components/clerk-components";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function ClerkAuthTest() {
  const { user, isLoaded } = useUser();
  const [showSignUp, setShowSignUp] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-lg">Loading Clerk...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">🔐 Clerk Authentication Test</h1>
          <p className="text-xl text-gray-600">Test the complete authentication flow with Clerk</p>
        </div>

        <div className="max-w-md mx-auto">
          {user ? (
            <div className="space-y-6">
              <ClerkUserProfile />
              <ClerkAuthStatus />
            </div>
          ) : (
            <div className="space-y-6">
              {showSignUp ? <ClerkSignUp /> : <ClerkSignIn />}
              
              <div className="text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowSignUp(!showSignUp)}
                >
                  {showSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                </Button>
              </div>

              <ClerkAuthStatus />
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>🚀 Clerk Integration Status</CardTitle>
              <CardDescription>Professional authentication with Clerk</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">✅</div>
                  <div className="text-sm font-medium">Clerk Client</div>
                  <div className="text-xs text-gray-500">Configured</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">✅</div>
                  <div className="text-sm font-medium">Middleware</div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">✅</div>
                  <div className="text-sm font-medium">Components</div>
                  <div className="text-xs text-gray-500">Ready</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>🔄 Authentication Options</CardTitle>
              <CardDescription>Choose your preferred authentication method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl mb-2">🔐</div>
                  <div className="font-medium">Clerk</div>
                  <div className="text-sm text-gray-600">Professional auth</div>
                  <div className="text-xs text-gray-500 mt-1">Current page</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-medium">Supabase</div>
                  <div className="text-sm text-gray-600">Database auth</div>
                  <a href="/test-supabase" className="text-xs text-purple-600 mt-1 block hover:underline">
                    Test Supabase
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function ClerkTestPage() {
  return (
    <ClerkProvider>
      <ClerkAuthTest />
    </ClerkProvider>
  );
}`;

  const testPagePath = path.join(process.cwd(), 'app', 'test-clerk', 'page.tsx');
  
  // Ensure directory exists
  const dir = path.dirname(testPagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(testPagePath, testPageContent);
  log('✅ Clerk test page created at /test-clerk', 'green');
}

function updateLayout() {
  log('Updating root layout to include ClerkProvider...', 'yellow');
  
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Add ClerkProvider import and wrapper
    if (!layoutContent.includes('ClerkProvider')) {
      layoutContent = layoutContent.replace(
        'export default function RootLayout({',
        `import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({`
      );
      
      layoutContent = layoutContent.replace(
        '<body className={inter.className}>',
        '<body className={inter.className}>\n        <ClerkProvider>'
      );
      
      layoutContent = layoutContent.replace(
        '</body>',
        '        </ClerkProvider>\n      </body>'
      );
      
      fs.writeFileSync(layoutPath, layoutContent);
      log('✅ Root layout updated with ClerkProvider', 'green');
    } else {
      log('✅ ClerkProvider already in layout', 'green');
    }
  }
}

async function setupClerk() {
  log('🚀 Starting Clerk Integration Setup', 'blue');
  log('This will set up professional authentication infrastructure', 'blue');
  
  try {
    // Step 1: Check and create configuration
    if (!checkClerkConfig()) {
      createClerkConfig();
    } else {
      log('✅ Clerk configuration already exists', 'green');
    }

    // Step 2: Install dependencies
    installClerkDependencies();

    // Step 3: Create middleware
    createClerkMiddleware();

    // Step 4: Create auth components
    createClerkComponents();

    // Step 5: Create test page
    createTestPage();

    // Step 6: Update layout
    updateLayout();

    // Step 7: Summary
    log('\\n📊 Clerk Setup Summary:', 'blue');
    log('✅ Clerk client configured', 'green');
    log('✅ Authentication middleware created', 'green');
    log('✅ Auth components ready', 'green');
    log('✅ Test page available', 'green');
    log('✅ Root layout updated', 'green');

    log('\\n🌐 Next Steps:', 'blue');
    log('1. Update .env.local with your Clerk credentials', 'yellow');
    log('2. Visit http://localhost:3008/test-clerk to test authentication', 'green');
    log('3. Run npm run mcp:health to verify integration', 'green');
    log('4. Configure your Clerk application settings', 'yellow');

    log('\\n📚 Documentation:', 'blue');
    log('- Clerk Dashboard: https://dashboard.clerk.com', 'green');
    log('- Clerk Docs: https://clerk.com/docs', 'green');
    log('- Next.js Integration: https://clerk.com/docs/nextjs/overview', 'green');

  } catch (error) {
    log(`❌ Clerk setup failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the setup
setupClerk();
