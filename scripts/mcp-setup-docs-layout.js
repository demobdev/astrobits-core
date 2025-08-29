const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'blue') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function installSidebarComponents() {
  log('Installing Shadcn Sidebar components...', 'yellow');
  
  try {
    // Install sidebar components with legacy peer deps
    execSync('npm exec shadcn@latest add sidebar --legacy-peer-deps', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    // Install additional required components
    execSync('npm exec shadcn@latest add breadcrumb --legacy-peer-deps', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    execSync('npm exec shadcn@latest add separator --legacy-peer-deps', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    execSync('npm exec shadcn@latest add dropdown-menu --legacy-peer-deps', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    execSync('npm exec shadcn@latest add label --legacy-peer-deps', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    log('✅ Sidebar components installed successfully', 'green');
  } catch (error) {
    log(`❌ Failed to install sidebar components: ${error.message}`, 'red');
    throw error;
  }
}

function createAstroBitsSidebar() {
  log('Creating AstroBits Core documentation sidebar...', 'yellow');
  
  const sidebarContent = `import * as React from "react"
import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarInput,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"

// AstroBits Core documentation data
const data = {
  versions: ["1.0.0", "1.1.0-alpha", "2.0.0-beta"],
  navMain: [
    {
      title: "Getting Started",
      url: "/docs/getting-started",
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction",
        },
        {
          title: "Installation",
          url: "/docs/installation",
        },
        {
          title: "Quick Start",
          url: "/docs/quick-start",
        },
        {
          title: "Project Structure",
          url: "/docs/project-structure",
        },
      ],
    },
    {
      title: "MCP Integration",
      url: "/docs/mcp",
      items: [
        {
          title: "MCP Overview",
          url: "/docs/mcp/overview",
        },
        {
          title: "Health Check System",
          url: "/docs/mcp/health-check",
        },
        {
          title: "Server Configuration",
          url: "/docs/mcp/servers",
        },
        {
          title: "Voice Commands",
          url: "/docs/mcp/voice-commands",
        },
      ],
    },
    {
      title: "UI Libraries",
      url: "/docs/ui",
      items: [
        {
          title: "Shadcn/UI",
          url: "/docs/ui/shadcn",
        },
        {
          title: "Radix UI",
          url: "/docs/ui/radix",
        },
        {
          title: "Aceternity UI",
          url: "/docs/ui/aceternity",
        },
        {
          title: "Magic UI",
          url: "/docs/ui/magic",
        },
      ],
    },
    {
      title: "Authentication",
      url: "/docs/auth",
      items: [
        {
          title: "Supabase Auth",
          url: "/docs/auth/supabase",
        },
        {
          title: "Clerk Auth",
          url: "/docs/auth/clerk",
        },
        {
          title: "Middleware Setup",
          url: "/docs/auth/middleware",
        },
      ],
    },
    {
      title: "Test Pages",
      url: "/test",
      items: [
        {
          title: "Shadcn/UI Test",
          url: "/test-shadcn",
        },
        {
          title: "Radix UI Test",
          url: "/test-radix",
        },
        {
          title: "Aceternity UI Test",
          url: "/test-aceternity",
        },
        {
          title: "Enhanced Aceternity",
          url: "/test-aceternity-enhanced",
        },
        {
          title: "Supabase Auth Test",
          url: "/test-supabase",
        },
        {
          title: "Clerk Auth Test",
          url: "/test-clerk",
        },
        {
          title: "Navigation Test",
          url: "/test-navbar",
        },
      ],
    },
    {
      title: "API Reference",
      url: "/docs/api",
      items: [
        {
          title: "Components",
          url: "/docs/api/components",
        },
        {
          title: "Scripts",
          url: "/docs/api/scripts",
        },
        {
          title: "Configuration",
          url: "/docs/api/config",
        },
        {
          title: "Environment Variables",
          url: "/docs/api/env",
        },
      ],
    },
  ],
}

// Search Form Component
function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search AstroBits docs..."
            className="pl-8"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}

// Version Switcher Component
function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[]
  defaultVersion: string
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">AstroBits Core</span>
                <span className="">v{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version}
                onSelect={() => setSelectedVersion(version)}
              >
                v{version}{" "}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export function AstroBitsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}`;

  const componentsDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const sidebarPath = path.join(componentsDir, 'AstroBitsSidebar.tsx');
  fs.writeFileSync(sidebarPath, sidebarContent);
  log('✅ AstroBits Sidebar created at components/AstroBitsSidebar.tsx', 'green');
}

function createDocsLayout() {
  log('Creating documentation layout...', 'yellow');
  
  const layoutContent = `import { AstroBitsSidebar } from "@/components/AstroBitsSidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DocsLayout({
  children,
  breadcrumbs = [],
  title = "Documentation"
}: {
  children: React.ReactNode
  breadcrumbs?: Array<{ title: string; href?: string }>
  title?: string
}) {
  return (
    <SidebarProvider>
      <AstroBitsSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                  <BreadcrumbItem className={index === 0 ? "hidden md:block" : ""}>
                    {crumb.href ? (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.title}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}`;

  const componentsDir = path.join(process.cwd(), 'components');
  const layoutPath = path.join(componentsDir, 'DocsLayout.tsx');
  fs.writeFileSync(layoutPath, layoutContent);
  log('✅ Docs Layout created at components/DocsLayout.tsx', 'green');
}

function createDocsHomePage() {
  log('Creating documentation home page...', 'yellow');
  
  const docsDir = path.join(process.cwd(), 'app', 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const pageContent = `import DocsLayout from "@/components/DocsLayout"

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
}`;

  const pagePath = path.join(docsDir, 'page.tsx');
  fs.writeFileSync(pagePath, pageContent);
  log('✅ Documentation home page created at /docs', 'green');
}

function updateMainPage() {
  log('Updating main page to use documentation layout...', 'yellow');
  
  const mainPageContent = `import DocsLayout from "@/components/DocsLayout"

export default function HomePage() {
  return (
    <DocsLayout 
      title="AstroBits Core - MCP-Powered Development System"
      breadcrumbs={[
        { title: "Home", href: "/" }
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ASTROBITS
            </span>
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-8">
            <span className="block text-foreground">The development DNA</span>
            <span className="block italic font-light text-muted-foreground">that powers your universe.</span>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            Voice-driven, MCP-powered development system that supercharges your workflow with 20+ integrated servers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 border rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">10x Development Speed</h3>
            <p className="text-muted-foreground">
              Leverage AI-powered voice commands and automated workflows to build faster than ever.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-2">Voice-Driven</h3>
            <p className="text-muted-foreground">
              Natural language commands that translate directly into code and configuration.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">20+ MCP Servers</h3>
            <p className="text-muted-foreground">
              Comprehensive integration with the Model Context Protocol ecosystem.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex gap-4">
            <a 
              href="/docs/getting-started" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a 
              href="/test-shadcn" 
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              View Components
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}`;

  const mainPagePath = path.join(process.cwd(), 'app', 'page.tsx');
  fs.writeFileSync(mainPagePath, mainPageContent);
  log('✅ Main page updated to use documentation layout', 'green');
}

function updateLayout() {
  log('Updating root layout to remove old navigation...', 'yellow');
  
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Remove the old navigation import and usage
    layoutContent = layoutContent.replace(/import AstroBitsNavigation from "@\/components\/AstroBitsNavigation";\n/g, '');
    layoutContent = layoutContent.replace(/<AstroBitsNavigation \/>\n/g, '');
    layoutContent = layoutContent.replace(/<main className="pt-16">\n/g, '<main>\n');
    layoutContent = layoutContent.replace(/<\/main>\n/g, '</main>\n');
    
    fs.writeFileSync(layoutPath, layoutContent);
    log('✅ Root layout updated', 'green');
  }
}

async function setupDocsLayout() {
  log('🚀 Starting AstroBits Core Documentation Layout Setup', 'blue');
  log('This will create a documentation-style layout with sidebar navigation', 'blue');
  
  try {
    // Step 1: Install sidebar components
    installSidebarComponents();

    // Step 2: Create AstroBits sidebar
    createAstroBitsSidebar();

    // Step 3: Create docs layout
    createDocsLayout();

    // Step 4: Create docs home page
    createDocsHomePage();

    // Step 5: Update main page
    updateMainPage();

    // Step 6: Update root layout
    updateLayout();

    // Step 7: Summary
    log('\n📊 Documentation Layout Setup Summary:', 'blue');
    log('✅ Sidebar components installed', 'green');
    log('✅ AstroBits sidebar created', 'green');
    log('✅ Documentation layout created', 'green');
    log('✅ Documentation home page created', 'green');
    log('✅ Main page updated', 'green');
    log('✅ Root layout updated', 'green');

    log('\n🌐 Next Steps:', 'blue');
    log('1. Visit http://localhost:3001 to see the new documentation layout', 'green');
    log('2. Visit http://localhost:3001/docs for the documentation home', 'green');
    log('3. Use the sidebar to navigate between sections', 'green');
    log('4. Test the search functionality', 'green');

    log('\n📚 Documentation Features:', 'blue');
    log('✅ Sidebar navigation with search', 'green');
    log('✅ Version switcher', 'green');
    log('✅ Breadcrumb navigation', 'green');
    log('✅ Responsive design', 'green');
    log('✅ Dark mode support', 'green');

  } catch (error) {
    log(`❌ Documentation layout setup failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the setup
setupDocsLayout();
