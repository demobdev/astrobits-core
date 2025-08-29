import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  // Protect specific routes that require authentication
  '/dashboard(.*)',
  '/profile(.*)',
  '/settings(.*)',
  '/admin(.*)',
  // Add other protected routes here
]);

// Create a matcher for public routes
const isPublicRoute = createRouteMatcher([
  // Public routes that don't require authentication
  '/',
  '/about',
  '/docs(.*)', // All documentation routes are public
  '/test(.*)', // Test pages are public
  '/api/public(.*)', // Public API routes
]);

export default clerkMiddleware((auth, req) => {
  // Allow public routes
  if (isPublicRoute(req)) {
    return;
  }
  
  // Protect other routes
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
