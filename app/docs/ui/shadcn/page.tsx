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
  Component,
  Download,
  Github
} from "lucide-react"

export default function ShadcnPage() {
  return (
    <DocsLayout
      title="Shadcn/UI - Beautiful, Accessible Components"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "UI Libraries", href: "/docs/ui" },
        { title: "Shadcn/UI", href: "/docs/ui/shadcn" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Box className="size-4" />
            UI Component Library
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shadcn/UI
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Beautiful, accessible components built with <span className="font-semibold text-foreground">Radix UI and Tailwind CSS</span>
          </p>
        </div>

        {/* What is Shadcn/UI */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">What is Shadcn/UI?</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Shadcn/UI is a collection of reusable components built using Radix UI and Tailwind CSS. It&apos;s not a component library, but a collection of components that you can copy and paste into your apps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accessible</h3>
                <p className="text-muted-foreground">Built with Radix UI primitives for excellent accessibility</p>
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
                <h3 className="text-lg font-semibold mb-2">Copy & Paste</h3>
                <p className="text-muted-foreground">Copy components directly into your project</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Available Components</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Component className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Form Components</CardTitle>
                <CardDescription>
                  Input fields, buttons, and form controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Button</Badge>
                  <Badge variant="secondary">Input</Badge>
                  <Badge variant="secondary">Label</Badge>
                  <Badge variant="secondary">Textarea</Badge>
                  <Badge variant="secondary">Select</Badge>
                  <Badge variant="secondary">Checkbox</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Layout Components</CardTitle>
                <CardDescription>
                  Cards, containers, and layout elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Card</Badge>
                  <Badge variant="secondary">Sidebar</Badge>
                  <Badge variant="secondary">Separator</Badge>
                  <Badge variant="secondary">Sheet</Badge>
                  <Badge variant="secondary">Dialog</Badge>
                  <Badge variant="secondary">Drawer</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>
                  Menus, dropdowns, and navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Dropdown Menu</Badge>
                  <Badge variant="secondary">Navigation Menu</Badge>
                  <Badge variant="secondary">Breadcrumb</Badge>
                  <Badge variant="secondary">Tabs</Badge>
                  <Badge variant="secondary">Command</Badge>
                  <Badge variant="secondary">Menubar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Feedback</CardTitle>
                <CardDescription>
                  Alerts, toasts, and status indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Alert</Badge>
                  <Badge variant="secondary">Toast</Badge>
                  <Badge variant="secondary">Progress</Badge>
                  <Badge variant="secondary">Skeleton</Badge>
                  <Badge variant="secondary">Badge</Badge>
                  <Badge variant="secondary">Avatar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Data Display</CardTitle>
                <CardDescription>
                  Tables, lists, and data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Table</Badge>
                  <Badge variant="secondary">Accordion</Badge>
                  <Badge variant="secondary">Collapsible</Badge>
                  <Badge variant="secondary">Calendar</Badge>
                  <Badge variant="secondary">Popover</Badge>
                  <Badge variant="secondary">Tooltip</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Utilities</CardTitle>
                <CardDescription>
                  Helper components and utilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Scroll Area</Badge>
                  <Badge variant="secondary">Slider</Badge>
                  <Badge variant="secondary">Switch</Badge>
                  <Badge variant="secondary">Radio Group</Badge>
                  <Badge variant="secondary">Hover Card</Badge>
                  <Badge variant="secondary">Context Menu</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Installation Guide</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <Download className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Step 1: Install Shadcn/UI CLI
                </CardTitle>
                <CardDescription>
                  Install the Shadcn/UI CLI to manage components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`# Install Shadcn/UI CLI
npm install -g shadcn@latest

# Initialize Shadcn/UI in your project
npx shadcn@latest init`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Configuration Options</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Style: Default/New York</li>
                        <li>• Base color: Slate/Gray/Zinc/Neutral</li>
                        <li>• CSS variables: Yes/No</li>
                        <li>• Tailwind CSS: Yes/No</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Generated Files</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">components.json</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">lib/utils.ts</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">globals.css</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">tailwind.config.js</code></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <Component className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Step 2: Add Components
                </CardTitle>
                <CardDescription>
                  Add individual components to your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`# Add a component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card input

# Add with custom path
npx shadcn@latest add button --path src/components/ui`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Component Locations</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">components/ui/</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">lib/utils.ts</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">globals.css</code></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Dependencies</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Radix UI primitives</li>
                        <li>• Tailwind CSS classes</li>
                        <li>• Class variance authority</li>
                        <li>• Tailwind merge utility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <Code className="size-4 text-green-600 dark:text-green-400" />
                  </div>
                  Step 3: Use Components
                </CardTitle>
                <CardDescription>
                  Import and use components in your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// Import components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Use in your component
export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Import Patterns</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Named imports for components</li>
                        <li>• Path aliases with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@/</code></li>
                        <li>• TypeScript support included</li>
                        <li>• Auto-completion in IDEs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Styling</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Tailwind CSS classes</li>
                        <li>• CSS variables for theming</li>
                        <li>• Variant props for states</li>
                        <li>• Custom styling support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Component Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Component Examples</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                    <Component className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Button Variants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`<Button>Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                    </pre>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                    <Layers className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Card Layout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
                    </pre>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>This is a card description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Card content goes here with some example text.</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Theming */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">Theming & Customization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">CSS Variables</div>
                <div className="text-blue-100">Customize colors and spacing</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Tailwind Config</div>
                <div className="text-blue-100">Extend with custom utilities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Component Props</div>
                <div className="text-blue-100">Override styles with variants</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Best Practices</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded flex items-center justify-center">
                    <CheckCircle className="size-4 text-green-600 dark:text-green-400" />
                  </div>
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All components are built with Radix UI primitives, ensuring excellent accessibility out of the box.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                    <Palette className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Consistent Styling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use CSS variables and Tailwind classes for consistent theming across your application.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                    <Code className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All components include TypeScript definitions for better development experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Build Beautiful UIs?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Start using Shadcn/UI components to create accessible, customizable interfaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://ui.shadcn.com', '_blank')}
              >
                Visit Shadcn/UI
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.location.href = '/test-shadcn'}
              >
                <Eye className="mr-2 size-5" />
                View Examples
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
