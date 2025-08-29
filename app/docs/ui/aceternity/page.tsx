"use client"

import DocsLayout from "@/components/DocsLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Sparkles, 
  Zap, 
  Palette, 
  Code, 
  Layers,
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
  Github,
  Rocket,
  Cpu,
  Globe
} from "lucide-react"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { FocusCards } from "@/components/ui/focus-cards"
import { ThreeDCardDemo } from "@/components/aceternity/3d-card-demo"
import { HoverEffect } from "@/components/aceternity/card-spotlight"

export default function AceternityPage() {
  const focusCardsData = [
    {
      title: "Animated Components",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
    },
    {
      title: "Interactive Elements",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
    },
    {
      title: "Modern Design",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
    }
  ]

  const spotlightData = [
    {
      title: "AstroBits Core",
      description: "Next-generation development platform with cosmic performance",
      link: "/"
    },
    {
      title: "Aceternity UI",
      description: "Beautiful animated components for modern interfaces",
      link: "#"
    },
    {
      title: "Developer Experience",
      description: "Tools that make coding feel like exploring space",
      link: "#"
    }
  ]

  return (
    <DocsLayout
      title="Aceternity UI - Beautiful Animated Components"
      breadcrumbs={[
        { title: "Home", href: "/" },
        { title: "Documentation", href: "/docs" },
        { title: "UI Libraries", href: "/docs/ui" },
        { title: "Aceternity UI", href: "/docs/ui/aceternity" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with TextRevealCard */}
        <div className="mb-16">
          <TextRevealCard
            text="Aceternity UI"
            revealText="AstroBits Themed"
          />
        </div>

        {/* What is Aceternity UI */}
        <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">What is Aceternity UI?</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Aceternity UI is a collection of beautiful, animated React components that bring your interfaces to life with smooth animations and modern design patterns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Beautiful Animations</h3>
                <p className="text-muted-foreground">Smooth, performant animations that enhance UX</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
                <p className="text-muted-foreground">Simple to integrate with your existing projects</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Customizable</h3>
                <p className="text-muted-foreground">Highly customizable to match your brand</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Component Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Live Component Examples</h2>
          
          {/* Focus Cards Example */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Focus Cards</h3>
            <FocusCards cards={focusCardsData} />
          </div>

          <Separator className="my-12" />

          {/* 3D Card Example */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">3D Card Effect</h3>
            <div className="flex justify-center">
              <ThreeDCardDemo />
            </div>
          </div>

          <Separator className="my-12" />

          {/* Card Spotlight Example */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Card Spotlight</h3>
            <HoverEffect items={spotlightData} />
          </div>
        </div>

        {/* Installation Guide */}
        <Card className="mb-16 border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Installation Guide</CardTitle>
            <CardDescription className="text-lg max-w-3xl mx-auto">
              Get started with Aceternity UI components in your AstroBits Core project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                <pre className="text-sm">
{`# Install Aceternity UI components
npm run mcp:install-aceternity

# Or install specific components
npm exec shadcn@latest add text-reveal-card --registry=https://ui.aceternity.com
npm exec shadcn@latest add focus-cards --registry=https://ui.aceternity.com
npm exec shadcn@latest add 3d-card-demo --registry=https://ui.aceternity.com`}
                </pre>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Dependencies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• framer-motion (for animations)</li>
                    <li>• lucide-react (for icons)</li>
                    <li>• tailwindcss (for styling)</li>
                    <li>• clsx (for class merging)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• TypeScript support</li>
                    <li>• Dark mode ready</li>
                    <li>• Responsive design</li>
                    <li>• Customizable themes</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AstroBits Theme Integration */}
        <Card className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-6">AstroBits Theme Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Cosmic Colors</div>
                <div className="text-purple-100">Purple to pink gradients with space vibes</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Smooth Animations</div>
                <div className="text-purple-100">AstroBits-branded motion and transitions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Developer Friendly</div>
                <div className="text-purple-100">Easy to customize and integrate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-4">Ready to Animate Your UI?</CardTitle>
            <CardDescription className="text-purple-100 text-lg">
              Start using Aceternity UI components in your AstroBits Core project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="px-8 py-3 text-lg"
                onClick={() => window.open('https://ui.aceternity.com', '_blank')}
              >
                Visit Aceternity UI
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-purple-600"
                onClick={() => window.location.href = '/test-aceternity'}
              >
                <Sparkles className="mr-2 size-5" />
                View Test Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}