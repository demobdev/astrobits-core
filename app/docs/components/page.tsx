"use client"

import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Box, 
  Zap, 
  Palette, 
  Code, 
  Layers,
  Sparkles,
  Eye,
  Copy,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Star,
  Settings,
  FileText,
  Component
} from "lucide-react"

export default function ComponentsPage() {
  return (
    <DocsLayout
      title="Components - UI Component Library"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "Components", href: "/docs/components" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Component className="size-4" />
            UI Component Library
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Components
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            A comprehensive collection of <span className="font-semibold text-foreground">pre-built UI components</span> for rapid development
          </p>
        </div>

        {/* Component Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Component Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Box className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Shadcn/UI Components</CardTitle>
                <CardDescription>
                  Beautiful, accessible components built with Radix UI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Button</Badge>
                  <Badge variant="secondary">Card</Badge>
                  <Badge variant="secondary">Dialog</Badge>
                  <Badge variant="secondary">Input</Badge>
                  <Badge variant="secondary">Badge</Badge>
                  <Badge variant="secondary">Sidebar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Aceternity UI</CardTitle>
                <CardDescription>
                  Animated and interactive components with Framer Motion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">TextRevealCard</Badge>
                  <Badge variant="secondary">BackgroundBeams</Badge>
                  <Badge variant="secondary">FocusCards</Badge>
                  <Badge variant="secondary">MacbookScroll</Badge>
                  <Badge variant="secondary">CardSpotlight</Badge>
                  <Badge variant="secondary">BentoGrid</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Radix UI Primitives</CardTitle>
                <CardDescription>
                  Low-level primitives for building custom components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Accordion</Badge>
                  <Badge variant="secondary">Tabs</Badge>
                  <Badge variant="secondary">Dialog</Badge>
                  <Badge variant="secondary">Dropdown</Badge>
                  <Badge variant="secondary">Tooltip</Badge>
                  <Badge variant="secondary">Slider</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Custom Components</CardTitle>
                <CardDescription>
                  AstroBits Core specific components and layouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">DocsLayout</Badge>
                  <Badge variant="secondary">AstroBitsSidebar</Badge>
                  <Badge variant="secondary">GetStartedModal</Badge>
                  <Badge variant="secondary">AuthComponents</Badge>
                  <Badge variant="secondary">Navigation</Badge>
                  <Badge variant="secondary">ResizableNavbar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Utility Components</CardTitle>
                <CardDescription>
                  Helper components for common UI patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Separator</Badge>
                  <Badge variant="secondary">Skeleton</Badge>
                  <Badge variant="secondary">Label</Badge>
                  <Badge variant="secondary">Breadcrumb</Badge>
                  <Badge variant="secondary">Tooltip</Badge>
                  <Badge variant="secondary">Sheet</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Layout Components</CardTitle>
                <CardDescription>
                  Structural components for page organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Container</Badge>
                  <Badge variant="secondary">Grid</Badge>
                  <Badge variant="secondary">Flex</Badge>
                  <Badge variant="secondary">Stack</Badge>
                  <Badge variant="secondary">Center</Badge>
                  <Badge variant="secondary">Wrapper</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Features */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Component Features</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Every component in AstroBits Core is designed with modern development practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accessible</h3>
                <p className="text-muted-foreground">Built with ARIA standards and keyboard navigation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customizable</h3>
                <p className="text-muted-foreground">Easy to style and extend with Tailwind CSS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="size-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">TypeScript</h3>
                <p className="text-muted-foreground">Fully typed with excellent IntelliSense support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Performant</h3>
                <p className="text-muted-foreground">Optimized for speed and bundle size</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Usage Examples</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                    <Code className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Basic Button
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`import { Button } from "@/components/ui/button"

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>`}
                    </pre>
                  </div>
                  <div className="flex gap-2">
                    <Button>Click me</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                    <Sparkles className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Animated Card
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`import { TextRevealCard } from "@/components/ui/text-reveal-card"

<TextRevealCard
  text="AstroBits Core"
  revealText="MCP-Powered"
  imageUrl="/hero-image.jpg"
/>`}
                    </pre>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded flex items-center justify-center text-white font-bold">
                    Animated Component Preview
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Testing */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">Test Your Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Interactive</div>
                <div className="text-blue-100">Test components in real-time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Responsive</div>
                <div className="text-blue-100">See how they adapt to different screens</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Accessible</div>
                <div className="text-blue-100">Verify keyboard and screen reader support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Component Libraries</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 flex flex-col items-center gap-4"
              onClick={() => window.location.href = '/docs/ui/shadcn'}
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Box className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Shadcn/UI</div>
                <div className="text-sm text-muted-foreground">Beautiful, accessible components</div>
              </div>
              <ArrowRight className="size-4" />
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 flex flex-col items-center gap-4"
              onClick={() => window.location.href = '/docs/ui/aceternity'}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Sparkles className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Aceternity UI</div>
                <div className="text-sm text-muted-foreground">Animated and interactive</div>
              </div>
              <ArrowRight className="size-4" />
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 flex flex-col items-center gap-4"
              onClick={() => window.location.href = '/docs/ui/radix'}
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Layers className="size-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-center">
                <div className="font-semibold">Radix UI</div>
                <div className="text-sm text-muted-foreground">Low-level primitives</div>
              </div>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Build Amazing UIs?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Start using our component library to create beautiful, accessible interfaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg"
                onClick={() => window.location.href = '/docs/ui/shadcn'}
              >
                Explore Components
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.location.href = '/test-shadcn'}
              >
                <Eye className="mr-2 size-5" />
                View Test Pages
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
