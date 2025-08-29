import DocsLayout from "@/components/DocsLayout"

export default function DocsPage() {
  return (
    <DocsLayout 
      title="AstroBits Core Documentation"
      breadcrumbs={[
        { title: "Documentation", href: "/docs" }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AstroBits Core Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Complete guide to the MCP-powered development system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🚀 Getting Started</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to set up and configure AstroBits Core for your projects.
            </p>
            <a href="/docs/getting-started" className="text-blue-600 hover:underline">
              Get Started →
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🔗 MCP Integration</h3>
            <p className="text-muted-foreground mb-4">
              Understand the Model Context Protocol and voice-driven development.
            </p>
            <a href="/docs/mcp/overview" className="text-blue-600 hover:underline">
              Learn More →
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🎨 UI Libraries</h3>
            <p className="text-muted-foreground mb-4">
              Explore the integrated UI libraries and components.
            </p>
            <a href="/docs/ui/shadcn" className="text-blue-600 hover:underline">
              View Components →
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🔐 Authentication</h3>
            <p className="text-muted-foreground mb-4">
              Set up authentication with Supabase and Clerk.
            </p>
            <a href="/docs/auth/supabase" className="text-blue-600 hover:underline">
              Configure Auth →
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🧪 Test Pages</h3>
            <p className="text-muted-foreground mb-4">
              Interactive test pages for all integrated components.
            </p>
            <a href="/test-shadcn" className="text-blue-600 hover:underline">
              Run Tests →
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📚 API Reference</h3>
            <p className="text-muted-foreground mb-4">
              Complete API documentation and configuration options.
            </p>
            <a href="/docs/api/components" className="text-blue-600 hover:underline">
              View API →
            </a>
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">20+</div>
              <div className="text-sm text-muted-foreground">MCP Servers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-sm text-muted-foreground">UI Libraries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">7</div>
              <div className="text-sm text-muted-foreground">Test Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-muted-foreground">Automated</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}