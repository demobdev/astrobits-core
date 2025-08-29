"use client";
import AstroBitsNavigation, { AstroBitsNavigationEnhanced } from "@/components/AstroBitsNavigation";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NavbarTestPage() {
  const [useEnhanced, setUseEnhanced] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      {useEnhanced ? <AstroBitsNavigationEnhanced /> : <AstroBitsNavigation />}
      
      {/* Content */}
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">🧭 AstroBits Navigation Test</h1>
            <p className="text-xl text-gray-600">Test the modern resizable navbar</p>
          </div>

          {/* Navbar Toggle */}
          <div className="max-w-md mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Navbar Variants</CardTitle>
                <CardDescription>Switch between different navbar styles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    variant={!useEnhanced ? "default" : "outline"}
                    onClick={() => setUseEnhanced(false)}
                    className="flex-1"
                  >
                    Standard
                  </Button>
                  <Button
                    variant={useEnhanced ? "default" : "outline"}
                    onClick={() => setUseEnhanced(true)}
                    className="flex-1"
                  >
                    Enhanced
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Test Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <Card key={i} className="h-64">
                <CardHeader>
                  <CardTitle>Test Section {i + 1}</CardTitle>
                  <CardDescription>Scroll to see navbar resize effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This is test content to demonstrate the resizable navbar functionality. 
                    Scroll down to see the navbar change width and add blur effects.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>🚀 AstroBits Navigation Features</CardTitle>
                <CardDescription>Modern navbar with advanced functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Desktop Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✅ Resizable on scroll</li>
                      <li>✅ Blur effects</li>
                      <li>✅ Smooth animations</li>
                      <li>✅ Hover effects</li>
                      <li>✅ Gradient branding</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Mobile Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✅ Responsive design</li>
                      <li>✅ Animated menu</li>
                      <li>✅ Touch-friendly</li>
                      <li>✅ Quick access links</li>
                      <li>✅ Enhanced variants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Integration Status */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>🔗 Integration Status</CardTitle>
                <CardDescription>All navigation links are functional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">✅</div>
                    <div className="text-sm font-medium">Aceternity UI</div>
                    <div className="text-xs text-gray-500">Resizable Navbar</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">✅</div>
                    <div className="text-sm font-medium">Shadcn/UI</div>
                    <div className="text-xs text-gray-500">Components</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">✅</div>
                    <div className="text-sm font-medium">Framer Motion</div>
                    <div className="text-xs text-gray-500">Animations</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">✅</div>
                    <div className="text-sm font-medium">Responsive</div>
                    <div className="text-xs text-gray-500">Mobile Ready</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}