#!/usr/bin/env node

/**
 * AstroBits Core - Radix UI Test Script
 * 
 * This script tests Radix UI primitive components and demonstrates their usage.
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

// Radix UI components to test
const radixComponents = {
  'accordion': {
    name: 'Accordion',
    description: 'Collapsible content sections',
    content: `import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }`
  },
  'dialog': {
    name: 'Dialog',
    description: 'Modal dialog component',
    content: `import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}`
  },
  'tabs': {
    name: 'Tabs',
    description: 'Tabbed interface component',
    content: `import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }`
  }
};

// Main function to test Radix UI components
async function testRadixUI() {
  console.log(`${colors.bright}${colors.cyan}🎯 AstroBits Core - Radix UI Test${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

  // Create Radix UI components directory
  const radixDir = path.join(process.cwd(), 'components/radix');
  if (!fs.existsSync(radixDir)) {
    fs.mkdirSync(radixDir, { recursive: true });
  }

  let generatedCount = 0;

  // Generate each Radix UI component
  for (const [key, component] of Object.entries(radixComponents)) {
    try {
      const fileName = `${key}.tsx`;
      const filePath = path.join(radixDir, fileName);
      
      fs.writeFileSync(filePath, component.content);
      
      console.log(`${colors.green}✅${colors.reset} Generated ${colors.bright}${component.name}${colors.reset}`);
      console.log(`   📁 ${colors.blue}${filePath}${colors.reset}`);
      console.log(`   📝 ${component.description}\n`);
      
      generatedCount++;
    } catch (error) {
      console.log(`${colors.red}❌${colors.reset} Failed to generate ${colors.bright}${component.name}${colors.reset}`);
      console.log(`   ${colors.red}Error: ${error.message}${colors.reset}\n`);
    }
  }

  // Create index file
  const indexContent = `// Radix UI Components Generated by AstroBits Core MCP System
// These are the primitive components that Shadcn/UI is built upon

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
export { 
  Dialog, 
  DialogPortal, 
  DialogOverlay, 
  DialogClose, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogFooter, 
  DialogTitle, 
  DialogDescription 
} from './dialog';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

// Usage:
// import { Accordion, Dialog, Tabs } from '@/components/radix';
`;

  try {
    const indexPath = path.join(radixDir, 'index.ts');
    fs.writeFileSync(indexPath, indexContent);
    console.log(`${colors.green}✅${colors.reset} Generated ${colors.bright}index.ts${colors.reset}`);
    console.log(`   📁 ${colors.blue}${indexPath}${colors.reset}\n`);
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} Failed to generate index file`);
    console.log(`   ${colors.red}Error: ${error.message}${colors.reset}\n`);
  }

  // Create test page
  const testPageContent = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/radix/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/radix/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/radix/tabs";
import { Button } from "@/components/ui/button";

export default function TestRadixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 Radix UI Test Page
          </h1>
          <p className="text-xl text-gray-300">
            Testing Radix UI primitive components with AstroBits Core
          </p>
        </div>

        {/* Accordion Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Accordion Component</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white">What is Radix UI?</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Radix UI provides unstyled, accessible components for building high‑quality design systems and web apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white">How does it work with Shadcn/UI?</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Shadcn/UI is built on top of Radix UI primitives, providing styled components with the same accessibility features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Dialog Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Dialog Component</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">Radix UI Dialog</DialogTitle>
                <DialogDescription className="text-gray-300">
                  This is a modal dialog built with Radix UI primitives.
                </DialogDescription>
              </DialogHeader>
              <p className="text-gray-300">
                Radix UI provides the foundation for accessible, unstyled components that you can style however you want.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabs Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Tabs Component</h2>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="account" className="text-white data-[state=active]:bg-blue-600">Account</TabsTrigger>
              <TabsTrigger value="password" className="text-white data-[state=active]:bg-blue-600">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-gray-300 mt-4">
              <p>Account settings and preferences go here.</p>
            </TabsContent>
            <TabsContent value="password" className="text-gray-300 mt-4">
              <p>Password management and security settings.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Status Section */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">✅ Radix UI Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-500/20 rounded-lg">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-sm text-gray-300">Components</div>
            </div>
            <div className="text-center p-4 bg-blue-500/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Accessible</div>
            </div>
            <div className="text-center p-4 bg-purple-500/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">Ready</div>
              <div className="text-sm text-gray-300">Status</div>
            </div>
            <div className="text-center p-4 bg-amber-500/20 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">MCP</div>
              <div className="text-sm text-gray-300">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  try {
    const testPagePath = path.join(process.cwd(), 'app/test-radix/page.tsx');
    const testPageDir = path.dirname(testPagePath);
    if (!fs.existsSync(testPageDir)) {
      fs.mkdirSync(testPageDir, { recursive: true });
    }
    fs.writeFileSync(testPagePath, testPageContent);
    console.log(`${colors.green}✅${colors.reset} Generated ${colors.bright}Test Page${colors.reset}`);
    console.log(`   📁 ${colors.blue}${testPagePath}${colors.reset}\n`);
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} Failed to generate test page`);
    console.log(`   ${colors.red}Error: ${error.message}${colors.reset}\n`);
  }

  // Summary
  console.log(`${colors.bright}${colors.cyan}📊 Radix UI Test Summary${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`✅ Generated: ${colors.green}${generatedCount}${colors.reset} components`);
  console.log(`📁 Location: ${colors.blue}${radixDir}${colors.reset}`);
  console.log(`🎯 Purpose: Test Radix UI primitive components\n`);

  // Instructions
  console.log(`${colors.bright}${colors.yellow}🚀 Next Steps${colors.reset}`);
  console.log(`${colors.yellow}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`1. Review the generated Radix UI components in ${colors.blue}${radixDir}${colors.reset}`);
  console.log(`2. Visit http://localhost:3002/test-radix to see the test page`);
  console.log(`3. Use these primitives to build custom Shadcn/UI components`);
  console.log(`4. Explore the full Radix UI documentation for more primitives\n`);

  return {
    generatedCount,
    radixDir,
    components: Object.keys(radixComponents)
  };
}

// Run the test if this script is executed directly
if (require.main === module) {
  testRadixUI().catch(console.error);
}

module.exports = { testRadixUI, radixComponents };
