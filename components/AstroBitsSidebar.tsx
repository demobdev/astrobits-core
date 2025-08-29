"use client"

import * as React from "react"
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
        {
          title: "MCP Inspector Guide",
          url: "/docs/mcp/inspector",
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
        {
          title: "Component Testing",
          url: "/docs/ui/testing",
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
        {
          title: "Environment Setup",
          url: "/docs/auth/environment",
        },
      ],
    },
    {
      title: "Services & Integrations",
      url: "/docs/services",
      items: [
        {
          title: "Supabase",
          url: "/docs/services/supabase",
        },
        {
          title: "Clerk",
          url: "/docs/services/clerk",
        },
        {
          title: "Context7",
          url: "/docs/services/context7",
        },
        {
          title: "Sentry",
          url: "/docs/services/sentry",
        },
        {
          title: "OpenMemory",
          url: "/docs/services/openmemory",
        },
        {
          title: "Notion",
          url: "/docs/services/notion",
        },
        {
          title: "Stripe",
          url: "/docs/services/stripe",
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
      title: "Scripts & Tools",
      url: "/docs/scripts",
      items: [
        {
          title: "MCP Health Check",
          url: "/docs/scripts/health-check",
        },
        {
          title: "Component Testing",
          url: "/docs/scripts/component-testing",
        },
        {
          title: "Setup Scripts",
          url: "/docs/scripts/setup",
        },
        {
          title: "Dependency Management",
          url: "/docs/scripts/dependencies",
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
          title: "Utilities",
          url: "/docs/api/utilities",
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
    {
      title: "About",
      url: "/about",
      items: [
        {
          title: "Project Overview",
          url: "/about",
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
            className="pl-8 h-8 text-sm"
          />
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 opacity-50 select-none" />
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
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-auto p-2"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg shrink-0">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0 leading-none min-w-0 flex-1">
                <span className="font-medium text-xs truncate">AstroBits Core</span>
                <span className="text-xs text-muted-foreground">v{selectedVersion}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 shrink-0" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) z-50"
            align="start"
            side="bottom"
            sideOffset={4}
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
    <Sidebar {...props} className="w-64 bg-background border-r !bg-background" style={{ backgroundColor: 'hsl(var(--background))' }}>
      <SidebarHeader className="p-4 space-y-3">
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="px-2">
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
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
}