const fs = require('fs');
const path = require('path');

// List of all missing pages with their titles and descriptions
const missingPages = [
  // MCP Integration
  { path: 'app/docs/mcp/servers/page.tsx', title: 'MCP Server Configuration', description: 'Configure and manage your MCP servers', icon: 'Server' },
  { path: 'app/docs/mcp/voice-commands/page.tsx', title: 'Voice Commands', description: 'Voice-driven development commands', icon: 'Mic' },
  { path: 'app/docs/mcp/inspector/page.tsx', title: 'MCP Inspector Guide', description: 'Debug and inspect MCP connections', icon: 'Search' },
  
  // UI Libraries
  { path: 'app/docs/ui/radix/page.tsx', title: 'Radix UI', description: 'Unstyled, accessible UI primitives', icon: 'Box' },
  { path: 'app/docs/ui/aceternity/page.tsx', title: 'Aceternity UI', description: 'Beautiful animated components', icon: 'Sparkles' },
  { path: 'app/docs/ui/magic/page.tsx', title: 'Magic UI', description: 'Magical UI components', icon: 'Wand2' },
  { path: 'app/docs/ui/testing/page.tsx', title: 'Component Testing', description: 'Test your UI components', icon: 'TestTube' },
  
  // Authentication
  { path: 'app/docs/auth/supabase/page.tsx', title: 'Supabase Auth', description: 'Supabase authentication setup', icon: 'Shield' },
  { path: 'app/docs/auth/clerk/page.tsx', title: 'Clerk Auth', description: 'Clerk authentication setup', icon: 'User' },
  { path: 'app/docs/auth/middleware/page.tsx', title: 'Middleware Setup', description: 'Authentication middleware configuration', icon: 'Settings' },
  { path: 'app/docs/auth/environment/page.tsx', title: 'Environment Setup', description: 'Environment variables for auth', icon: 'Key' },
  
  // Services & Integrations
  { path: 'app/docs/services/supabase/page.tsx', title: 'Supabase', description: 'Supabase database and backend services', icon: 'Database' },
  { path: 'app/docs/services/clerk/page.tsx', title: 'Clerk', description: 'Clerk authentication services', icon: 'Users' },
  { path: 'app/docs/services/sentry/page.tsx', title: 'Sentry', description: 'Error tracking and monitoring', icon: 'AlertTriangle' },
  { path: 'app/docs/services/openmemory/page.tsx', title: 'OpenMemory', description: 'Memory management and context', icon: 'Brain' },
  { path: 'app/docs/services/notion/page.tsx', title: 'Notion', description: 'Notion integration and API', icon: 'FileText' },
  { path: 'app/docs/services/stripe/page.tsx', title: 'Stripe', description: 'Payment processing with Stripe', icon: 'CreditCard' },
  
  // Scripts & Tools
  { path: 'app/docs/scripts/health-check/page.tsx', title: 'MCP Health Check', description: 'Health check scripts and tools', icon: 'CheckCircle' },
  { path: 'app/docs/scripts/component-testing/page.tsx', title: 'Component Testing', description: 'Component testing scripts', icon: 'TestTube' },
  { path: 'app/docs/scripts/setup/page.tsx', title: 'Setup Scripts', description: 'Project setup and configuration scripts', icon: 'Settings' },
  { path: 'app/docs/scripts/dependencies/page.tsx', title: 'Dependency Management', description: 'Manage project dependencies', icon: 'Package' },
  
  // API Reference
  { path: 'app/docs/api/components/page.tsx', title: 'Components API', description: 'Component library API reference', icon: 'Box' },
  { path: 'app/docs/api/utilities/page.tsx', title: 'Utilities API', description: 'Utility functions API reference', icon: 'Wrench' },
  { path: 'app/docs/api/config/page.tsx', title: 'Configuration API', description: 'Configuration API reference', icon: 'Settings' },
  { path: 'app/docs/api/env/page.tsx', title: 'Environment Variables', description: 'Environment variables reference', icon: 'Key' },
];

// Template for placeholder pages
const createPlaceholderPage = (pageInfo) => {
  const { path: filePath, title, description, icon } = pageInfo;
  
  // Extract breadcrumb info from path
  const pathParts = filePath.split('/');
  const section = pathParts[3]; // docs/section/...
  const subsection = pathParts[4]; // docs/section/subsection/...
  
  const breadcrumbs = [
    { title: "Home", href: "/" },
    { title: "Documentation", href: "/docs" },
    { title: section.charAt(0).toUpperCase() + section.slice(1), href: `/docs/${section}` },
    { title: title, href: filePath.replace('app', '').replace('.tsx', '') }
  ];
  
  return `"use client"

import DocsLayout from "@/components/DocsLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ${icon}, Clock, FileText, Settings } from "lucide-react"

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <DocsLayout
      title="${title} - ${description}"
      breadcrumbs={${JSON.stringify(breadcrumbs)}}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <${icon} className="size-4" />
            ${title}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ${title}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            ${description}
          </p>
        </div>

        {/* Placeholder Content */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Coming Soon</CardTitle>
            <p className="text-lg text-muted-foreground">
              Comprehensive documentation for ${title} is being prepared.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <${icon} className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">${title}</h3>
                <p className="text-muted-foreground">${description}</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground">Comprehensive guides and examples</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Configuration</h3>
                <p className="text-muted-foreground">Setup and configuration options</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}`;
};

// Create directories and files
missingPages.forEach(pageInfo => {
  const { path: filePath } = pageInfo;
  const dirPath = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  
  // Create the page file
  const content = createPlaceholderPage(pageInfo);
  fs.writeFileSync(filePath, content);
  console.log(`Created page: ${filePath}`);
});

console.log('All placeholder pages created successfully!');
