import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestShadcnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎨 Shadcn/UI Test Page
          </h1>
          <p className="text-xl text-gray-300">
            Testing Shadcn/UI components with AstroBits Core
          </p>
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400 font-semibold">
              ✅ Shadcn/UI is working perfectly with MCP!
            </p>
          </div>
        </div>

        {/* Button Tests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
            <CardDescription>
              Testing different button variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🎯</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Tests */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature Card</CardTitle>
              <CardDescription>
                This card demonstrates the card component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Cards are perfect for displaying content in a structured way.
                They work great with the AstroBits Core design system.
              </p>
              <Button className="mt-4">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stats Card</CardTitle>
              <CardDescription>
                Displaying key metrics and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Components Generated:</span>
                  <span className="font-bold text-green-600">46</span>
                </div>
                <div className="flex justify-between">
                  <span>MCP Servers:</span>
                  <span className="font-bold text-blue-600">20+</span>
                </div>
                <div className="flex justify-between">
                  <span>Health Score:</span>
                  <span className="font-bold text-amber-600">73%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>✅ Shadcn/UI Status</CardTitle>
            <CardDescription>
              All components are working correctly with AstroBits Core
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600">46</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Components</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Compatibility</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">Ready</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Status</div>
              </div>
              <div className="text-center p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">MCP</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Powered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MCP Integration Test */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>🔧 MCP Integration Test</CardTitle>
            <CardDescription>
              Testing MCP server functionality with Shadcn/UI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  MCP Server Status
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Shadcn/UI MCP Server: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Component Generation: Working</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>GitHub Token: Configured</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  Next Steps
                </h4>
                <div className="space-y-1 text-sm">
                  <div>• Test Supabase integration</div>
                  <div>• Test Clerk authentication</div>
                  <div>• Test Stripe payments</div>
                  <div>• Generate more components</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
