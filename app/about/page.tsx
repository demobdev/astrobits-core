import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Rocket, 
  Zap, 
  Shield, 
  Palette, 
  Code, 
  Brain, 
  Users, 
  Globe, 
  Star,
  Github,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from "lucide-react"
"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <DocsLayout
      title="About AstroBits Core - The Future of Voice-Driven Development"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "About", href: "/about" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Rocket className="size-4" />
            The Future of Development
          </div>
          
                     <div className="flex items-center justify-center gap-4 mb-6">
             <Image
               src="/astrobits-icon-light.png"
               alt="AstroBits Core"
               width={64}
               height={64}
               className="dark:hidden"
             />
             <Image
               src="/astrobits-icon-dark.png"
               alt="AstroBits Core"
               width={64}
               height={64}
               className="hidden dark:block"
             />
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                 ASTROBITS CORE
               </span>
             </h1>
           </div>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            The most comprehensive <span className="font-semibold text-foreground">MCP-powered development system</span> ever created
          </p>
          
                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Button 
               size="lg" 
               className="px-8 py-3 text-lg"
               onClick={() => window.open('https://github.com/demobdev/astrobits-core', '_blank')}
             >
               <Github className="mr-2 size-5" />
               View on GitHub
             </Button>
             <Button 
               variant="outline" 
               size="lg" 
               className="px-8 py-3 text-lg"
               onClick={() => window.location.href = '/'}
             >
               <ExternalLink className="mr-2 size-5" />
               Get Started
             </Button>
           </div>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Our Mission</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              To revolutionize development workflows by creating the most comprehensive MCP-powered system that enables developers to build faster, smarter, and more efficiently through voice-driven AI assistance.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Key Features Grid */}
        <div className="grid gap-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why AstroBits Core?</h2>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Voice-Driven Development</CardTitle>
                <CardDescription>
                  Natural language commands that translate directly into code and configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    AI-powered code generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Natural language workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Intelligent automation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="size-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>20+ MCP Servers</CardTitle>
                <CardDescription>
                  Pre-configured and tested integrations for every development need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    UI Libraries (Shadcn/UI, Aceternity)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Authentication (Clerk, Supabase)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Payments (Stripe)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="size-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Enterprise-Grade</CardTitle>
                <CardDescription>
                  Production-ready with latest technologies and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    React 19 & Next.js 15
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    TypeScript & Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Security-first approach
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="size-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>UI Excellence</CardTitle>
                <CardDescription>
                  Beautiful components with design intention and accessibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Shadcn/UI foundations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Aceternity UI animations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Responsive design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="size-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Zero Boilerplate</CardTitle>
                <CardDescription>
                  Start coding immediately with pre-configured everything
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Auto-configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Smart dependencies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Production templates
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="size-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Built for developers, by developers, with continuous improvement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Open source
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Active development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    Growing ecosystem
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <Card className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">System Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">MCP Servers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-blue-100">UI Libraries</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-blue-100">Faster Development</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                    <Code className="size-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">React 19</Badge>
                <Badge variant="secondary">Next.js 15</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                    <Palette className="size-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  UI Libraries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">Shadcn/UI</Badge>
                <Badge variant="secondary">Aceternity UI</Badge>
                <Badge variant="secondary">Radix UI</Badge>
                <Badge variant="secondary">Magic UI</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded flex items-center justify-center">
                    <Shield className="size-4 text-green-600 dark:text-green-400" />
                  </div>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Clerk</Badge>
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded flex items-center justify-center">
                    <Brain className="size-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  AI & Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">MCP</Badge>
                <Badge variant="secondary">OpenMemory</Badge>
                <Badge variant="secondary">Context7</Badge>
                <Badge variant="secondary">Sentry</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Creator Section */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Meet the Creator</CardTitle>
            <CardDescription className="text-lg">
              The visionary behind AstroBits Core
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                DB
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Demo Bailey</h3>
                <p className="text-muted-foreground mb-4">Creator & Lead Developer</p>
                <p className="text-lg mb-6 max-w-2xl">
                  Demo Bailey created AstroBits Core to help developers unlock their full potential through the power of AI-assisted development. His vision combines cutting-edge technology with intuitive design to create a development experience that accelerates innovation and empowers developers to build the future.
                </p>
                                 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                   <Button 
                     variant="outline"
                     onClick={() => window.open('https://github.com/demobdev', '_blank')}
                   >
                     <Github className="mr-2 size-4" />
                     GitHub
                   </Button>
                   <Button 
                     variant="outline"
                     onClick={() => window.open('https://github.com/demobdev', '_blank')}
                   >
                     <Globe className="mr-2 size-4" />
                     Portfolio
                   </Button>
                 </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Supercharge Your Development?</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Join thousands of developers who are already building faster with AstroBits Core
            </CardDescription>
          </CardHeader>
          <CardContent>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button 
                 size="lg" 
                 variant="secondary" 
                 className="px-8 py-3 text-lg"
                 onClick={() => window.location.href = '/'}
               >
                 Get Started Now
                 <ArrowRight className="ml-2 size-5" />
               </Button>
               <Button 
                 size="lg" 
                 variant="outline" 
                 className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600"
                 onClick={() => window.open('https://github.com/demobdev/astrobits-core', '_blank')}
               >
                 <Star className="mr-2 size-5" />
                 Star on GitHub
               </Button>
             </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}
