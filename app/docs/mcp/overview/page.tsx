"use client"

import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Brain, 
  Zap, 
  Shield, 
  Code, 
  Server, 
  Database,
  MessageSquare,
  Settings,
  Play,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Terminal,
  Cpu,
  Network,
  FileText
} from "lucide-react"

export default function MCPOverviewPage() {
  return (
    <DocsLayout
      title="MCP Overview - Model Context Protocol in AstroBits Core"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "MCP Integration", href: "/docs/mcp" },
        { title: "Overview", href: "/docs/mcp/overview" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
            <Brain className="size-4" />
            Model Context Protocol
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              MCP Overview
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Understanding the <span className="font-semibold text-foreground">Model Context Protocol</span> and how it powers voice-driven development in AstroBits Core
          </p>
        </div>

        {/* What is MCP */}
        <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">What is the Model Context Protocol?</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              The Model Context Protocol (MCP) is an open standard that enables AI assistants to interact with external data sources and tools through a standardized interface.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Standardized Communication</h3>
                <p className="text-muted-foreground">Enables consistent communication between AI models and external tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tool Integration</h3>
                <p className="text-muted-foreground">Connects AI to databases, APIs, file systems, and development tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Context Awareness</h3>
                <p className="text-muted-foreground">Provides AI with real-time context from multiple data sources</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MCP Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">MCP Architecture in AstroBits Core</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Terminal className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>MCP Client</CardTitle>
                <CardDescription>
                  The AI assistant (Claude, GPT, etc.) that makes requests to MCP servers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Sends tool calls and requests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Receives responses and data
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Manages conversation context
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Server className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>MCP Servers</CardTitle>
                <CardDescription>
                  Specialized services that provide tools and data access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Expose specific tools and capabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Handle authentication and permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Return structured data and results
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* MCP Servers in AstroBits Core */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">MCP Servers in AstroBits Core</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Database Servers</CardTitle>
                <CardDescription>
                  Supabase, PostgreSQL, and other database integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">SQLite</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>
                  Clerk, Supabase Auth, and security services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Clerk</Badge>
                  <Badge variant="secondary">Supabase Auth</Badge>
                  <Badge variant="secondary">OAuth</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>File System</CardTitle>
                <CardDescription>
                  File operations, Git integration, and project management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">File System</Badge>
                  <Badge variant="secondary">Project Files</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Network className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>External APIs</CardTitle>
                <CardDescription>
                  Notion, Context7, Sentry, and other service integrations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Notion</Badge>
                  <Badge variant="secondary">Context7</Badge>
                  <Badge variant="secondary">Sentry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Memory & Context</CardTitle>
                <CardDescription>
                  OpenMemory, conversation history, and context management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">OpenMemory</Badge>
                  <Badge variant="secondary">Conversation History</Badge>
                  <Badge variant="secondary">Context Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Development Tools</CardTitle>
                <CardDescription>
                  Code generation, testing, and development automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Code Generation</Badge>
                  <Badge variant="secondary">Testing</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Voice-Driven Development */}
        <Card className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">Voice-Driven Development with MCP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Natural Language</div>
                <div className="text-purple-100">Speak your intentions in plain English</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">MCP Translation</div>
                <div className="text-purple-100">AI converts to tool calls and actions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Instant Results</div>
                <div className="text-purple-100">Get code, data, and configurations</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Workflow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Example Voice-Driven Workflow</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="size-4 text-green-600 dark:text-green-400" />
                  </div>
                  Voice Command
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded">
                  "Create a new user authentication page with Clerk and add it to the navigation"
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="size-8 text-muted-foreground" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <Brain className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  AI Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Analyzes the request using MCP context</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Calls Clerk MCP server for authentication setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Uses file system MCP to create new page</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Updates navigation component automatically</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="size-8 text-muted-foreground" />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <Code className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  Generated Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>New authentication page created at <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">app/auth/page.tsx</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Clerk components and middleware configured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Navigation updated with auth links</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span>Environment variables added to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.env.local</code></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Getting Started with MCP</CardTitle>
            <CardDescription className="text-lg">
              Ready to experience voice-driven development?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Setup</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Install AstroBits Core</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Configure your MCP servers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Start using voice commands</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/docs/installation'}
                  >
                    <Play className="mr-2 size-4" />
                    Installation Guide
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/docs/mcp/health-check'}
                  >
                    <Settings className="mr-2 size-4" />
                    Health Check System
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/docs/mcp/voice-commands'}
                  >
                    <MessageSquare className="mr-2 size-4" />
                    Voice Commands Guide
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Transform Your Development?</CardTitle>
            <CardDescription className="text-purple-100 text-lg">
              Experience the future of development with voice-driven AI assistance
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
                Get Started Now
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => window.open('https://modelcontextprotocol.io', '_blank')}
              >
                <ExternalLink className="mr-2 size-5" />
                Learn More About MCP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
