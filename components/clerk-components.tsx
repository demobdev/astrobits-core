"use client";
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
