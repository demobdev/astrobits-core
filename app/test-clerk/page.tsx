"use client";
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
}