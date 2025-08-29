import DocsLayout from "@/components/DocsLayout"
import { GetStartedModal } from "@/components/GetStartedModal"

export default function HomePage() {
  return (
    <DocsLayout 
      title="AstroBits Core - MCP-Powered Development System"
      breadcrumbs={[
        { title: "Home", href: "/" }
      ]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ASTROBITS
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
            <span className="block text-foreground">The development DNA</span>
            <span className="block italic font-light text-muted-foreground">that powers your universe.</span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto">
            Voice-driven, MCP-powered development system that supercharges your workflow with 20+ integrated servers.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          <div className="p-6 sm:p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl sm:text-5xl mb-4">🚀</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">10x Development Speed</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Leverage AI-powered voice commands and automated workflows to build faster than ever.
            </p>
          </div>

          <div className="p-6 sm:p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl sm:text-5xl mb-4">🎤</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Voice-Driven</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Natural language commands that translate directly into code and configuration.
            </p>
          </div>

          <div className="p-6 sm:p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl sm:text-5xl mb-4">🔧</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">20+ MCP Servers</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Comprehensive integration with the Model Context Protocol ecosystem.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GetStartedModal />
            <a 
              href="https://astrobits-ui.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2"
            >
              View Components
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}