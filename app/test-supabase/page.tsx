"use client";
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
}