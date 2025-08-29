"use client"

import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Code, 
  Zap, 
  Database, 
  Shield, 
  Brain,
  Settings,
  FileText,
  Terminal,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Star,
  Package,
  AppWindow,
  Server,
  Cpu
} from "lucide-react"

export default function ApiReferencePage() {
  return (
    <DocsLayout
      title="API Reference - AstroBits Core APIs"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "API Reference", href: "/docs/api" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6">
            <AppWindow className="size-4" />
            API Reference
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              API Reference
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Complete documentation for all <span className="font-semibold text-foreground">APIs, utilities, and integrations</span> in AstroBits Core
          </p>
        </div>

        {/* API Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">API Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Database APIs</CardTitle>
                <CardDescription>
                  Supabase client and database operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Supabase Client</Badge>
                  <Badge variant="secondary">Auth Operations</Badge>
                  <Badge variant="secondary">Real-time</Badge>
                  <Badge variant="secondary">Storage</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Authentication APIs</CardTitle>
                <CardDescription>
                  Clerk and Supabase authentication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Clerk Auth</Badge>
                  <Badge variant="secondary">Supabase Auth</Badge>
                  <Badge variant="secondary">Middleware</Badge>
                  <Badge variant="secondary">User Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>MCP APIs</CardTitle>
                <CardDescription>
                  Model Context Protocol integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">OpenMemory</Badge>
                  <Badge variant="secondary">Context7</Badge>
                  <Badge variant="secondary">Health Check</Badge>
                  <Badge variant="secondary">Server Config</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Utility APIs</CardTitle>
                <CardDescription>
                  Helper functions and utilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Tailwind Utils</Badge>
                  <Badge variant="secondary">Date Helpers</Badge>
                  <Badge variant="secondary">Validation</Badge>
                  <Badge variant="secondary">Formatting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Server className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>External APIs</CardTitle>
                <CardDescription>
                  Third-party service integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Sentry</Badge>
                  <Badge variant="secondary">Notion</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Terminal className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>CLI APIs</CardTitle>
                <CardDescription>
                  Command-line tools and scripts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Setup Scripts</Badge>
                  <Badge variant="secondary">Health Checks</Badge>
                  <Badge variant="secondary">Component Install</Badge>
                  <Badge variant="secondary">Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core APIs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core APIs</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                    <Database className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Supabase Client
                </CardTitle>
                <CardDescription>
                  Database and authentication client configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Environment Variables</h4>
                      <ul className="space-y-1 text-sm">
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code></li>
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Real-time subscriptions</li>
                        <li>• Row Level Security</li>
                        <li>• Built-in authentication</li>
                        <li>• File storage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                    <Shield className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Clerk Authentication
                </CardTitle>
                <CardDescription>
                  User authentication and session management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Environment Variables</h4>
                      <ul className="space-y-1 text-sm">
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code></li>
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">CLERK_SECRET_KEY</code></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Components</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">SignIn</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">SignUp</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">UserButton</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">useUser</code></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded flex items-center justify-center">
                    <Brain className="size-4 text-green-600 dark:text-green-400" />
                  </div>
                  MCP Health Check
                </CardTitle>
                <CardDescription>
                  Monitor and verify MCP server connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// scripts/mcp-health-check.js
import { checkMCPHealth } from './mcp-health-check'

const servers = [
  'supabase',
  'clerk', 
  'openmemory',
  'context7'
]

checkMCPHealth(servers)`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Available Servers</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Supabase MCP</li>
                        <li>• Clerk MCP</li>
                        <li>• OpenMemory MCP</li>
                        <li>• Context7 MCP</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Health Checks</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Connection status</li>
                        <li>• Authentication</li>
                        <li>• Tool availability</li>
                        <li>• Response times</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Utility Functions */}
        <Card className="mb-16 border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Utility Functions</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Essential helper functions for common development tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tailwind Utils</h3>
                <p className="text-muted-foreground">Class merging and conditional styling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Component Utils</h3>
                <p className="text-muted-foreground">Variant props and styling helpers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="size-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">MCP Utils</h3>
                <p className="text-muted-foreground">Server connection and tool helpers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Reference</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Environment Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OPENMEMORY_API_KEY</code>
                    <Badge variant="secondary">Optional</Badge>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">CONTEXT7_API_KEY</code>
                    <Badge variant="secondary">Optional</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Imports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <code>import &#123; supabase &#125; from &apos;@/lib/supabase&apos;</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <code>import &#123; useUser &#125; from &apos;@clerk/nextjs&apos;</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <code>import &#123; cn &#125; from &apos;@/lib/utils&apos;</code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <code>import &#123; Button &#125; from &apos;@/components/ui/button&apos;</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Build with APIs?</CardTitle>
            <CardDescription className="text-green-100 text-lg">
              Start integrating powerful APIs into your AstroBits Core project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg"
                onClick={() => window.location.href = '/docs/installation'}
              >
                Get Started
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-green-600"
                onClick={() => window.location.href = '/docs/mcp/overview'}
              >
                <Brain className="mr-2 size-5" />
                Learn MCP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
