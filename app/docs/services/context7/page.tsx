"use client"

import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Brain, 
  Zap, 
  Database, 
  Shield, 
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
  Cpu,
  Search,
  Globe,
  Code
} from "lucide-react"

export default function Context7Page() {
  return (
    <DocsLayout
      title="Context7 - AI-Powered Context Management"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "Services & Integrations", href: "/docs/services" },
        { title: "Context7", href: "/docs/services/context7" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-6">
            <Brain className="size-4" />
            AI Context Management
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Context7
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Intelligent <span className="font-semibold text-foreground">context management and retrieval</span> powered by AI for enhanced MCP workflows
          </p>
        </div>

        {/* What is Context7 */}
        <Card className="mb-16 border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">What is Context7?</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Context7 is an AI-powered context management system that helps you store, retrieve, and manage contextual information for your applications and AI workflows.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="size-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Retrieval</h3>
                <p className="text-muted-foreground">AI-powered search and context retrieval</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="size-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Context Storage</h3>
                <p className="text-muted-foreground">Efficient storage and organization of context</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">MCP Integration</h3>
                <p className="text-muted-foreground">Seamless integration with Model Context Protocol</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Context7 Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>AI-Powered Search</CardTitle>
                <CardDescription>
                  Intelligent context retrieval using natural language
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Semantic Search</Badge>
                  <Badge variant="secondary">Natural Language</Badge>
                  <Badge variant="secondary">Relevance Scoring</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="size-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Context Storage</CardTitle>
                <CardDescription>
                  Efficient storage and organization of contextual data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Vector Database</Badge>
                  <Badge variant="secondary">Metadata Support</Badge>
                  <Badge variant="secondary">Version Control</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4">
                  <AppWindow className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>MCP Integration</CardTitle>
                <CardDescription>
                  Native integration with Model Context Protocol
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">MCP Server</Badge>
                  <Badge variant="secondary">Tool Integration</Badge>
                  <Badge variant="secondary">Real-time Sync</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Security & Privacy</CardTitle>
                <CardDescription>
                  Enterprise-grade security and data protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Encryption</Badge>
                  <Badge variant="secondary">Access Control</Badge>
                  <Badge variant="secondary">Audit Logs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>High Performance</CardTitle>
                <CardDescription>
                  Fast and scalable context retrieval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Low Latency</Badge>
                  <Badge variant="secondary">High Throughput</Badge>
                  <Badge variant="secondary">Caching</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Simple setup and configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">REST API</Badge>
                  <Badge variant="secondary">SDK Support</Badge>
                  <Badge variant="secondary">Documentation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Setup Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Setup Guide</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                    <Package className="size-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  Step 1: Get API Key
                </CardTitle>
                <CardDescription>
                  Obtain your Context7 API key from the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`1. Visit https://context7.com
2. Sign up for an account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy the key for use in your project`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Required Information</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Email address</li>
                        <li>• Organization name</li>
                        <li>• Use case description</li>
                        <li>• API key permissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Security Notes</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Keep API key secure</li>
                        <li>• Use environment variables</li>
                        <li>• Rotate keys regularly</li>
                        <li>• Monitor usage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                    <Settings className="size-4 text-red-600 dark:text-red-400" />
                  </div>
                  Step 2: Configure Environment
                </CardTitle>
                <CardDescription>
                  Add Context7 configuration to your environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`# .env.local
CONTEXT7_API_KEY=your_api_key_here
CONTEXT7_BASE_URL=https://api.context7.com
CONTEXT7_PROJECT_ID=your_project_id`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Environment Variables</h4>
                      <ul className="space-y-1 text-sm">
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">CONTEXT7_API_KEY</code> - Your API key</li>
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">CONTEXT7_BASE_URL</code> - API endpoint</li>
                        <li><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">CONTEXT7_PROJECT_ID</code> - Project identifier</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Configuration Options</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Development vs Production</li>
                        <li>• Rate limiting settings</li>
                        <li>• Retry policies</li>
                        <li>• Timeout configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center">
                    <Code className="size-4 text-pink-600 dark:text-pink-400" />
                  </div>
                  Step 3: Integration Code
                </CardTitle>
                <CardDescription>
                  Implement Context7 in your AstroBits Core project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// lib/context7.ts
import { Context7Client } from '@context7/sdk'

const client = new Context7Client({
  apiKey: process.env.CONTEXT7_API_KEY,
  baseUrl: process.env.CONTEXT7_BASE_URL,
  projectId: process.env.CONTEXT7_PROJECT_ID
})

export { client }

// Usage example
export async function searchContext(query: string) {
  const results = await client.search({
    query,
    limit: 10,
    filters: { type: 'documentation' }
  })
  return results
}`}
                    </pre>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">Key Functions</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">client.search()</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">client.store()</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">client.update()</code></li>
                        <li>• <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">client.delete()</code></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">MCP Integration</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Context7 MCP Server</li>
                        <li>• Tool definitions</li>
                        <li>• Authentication</li>
                        <li>• Error handling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* MCP Integration */}
        <Card className="mb-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">MCP Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Context Search</div>
                <div className="text-orange-100">Search stored context using natural language</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Context Storage</div>
                <div className="text-orange-100">Store and organize contextual information</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">AI Enhancement</div>
                <div className="text-orange-100">Enhance AI responses with relevant context</div>
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
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded flex items-center justify-center">
                    <Search className="size-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  Context Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// Search for relevant context
const results = await client.search({
  query: "user authentication setup",
  limit: 5,
  filters: {
    type: "documentation",
    tags: ["auth", "setup"]
  }
})

console.log(results.items)`}
                    </pre>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Search for context using natural language queries with filters and relevance scoring.
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded flex items-center justify-center">
                    <Database className="size-4 text-red-600 dark:text-red-400" />
                  </div>
                  Store Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm">
{`// Store new context
const context = await client.store({
  content: "User authentication setup guide...",
  metadata: {
    type: "documentation",
    tags: ["auth", "setup"],
    author: "demo@example.com",
    version: "1.0.0"
  }
})

console.log(context.id)`}
                    </pre>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Store contextual information with metadata for better organization and retrieval.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Enhance Your Context?</CardTitle>
            <CardDescription className="text-orange-100 text-lg">
              Start using Context7 to improve your AI workflows and context management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://context7.com', '_blank')}
              >
                Get Started with Context7
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-orange-600"
                onClick={() => window.location.href = '/docs/mcp/overview'}
              >
                <Brain className="mr-2 size-5" />
                Learn MCP Integration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
