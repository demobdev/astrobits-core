#!/usr/bin/env node

/**
 * AstroBits Core - Aceternity UI Installation Script
 * 
 * This script handles the complete installation process for Aceternity UI components
 * including shadcn CLI setup, components.json creation, and proper error handling.
 */

const { execSync, spawn } = require('child_process');
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

// Aceternity UI components to install
const aceternityComponents = [
  {
    name: 'text-reveal-card',
    description: '3D card with mousemove effect to reveal text content',
    registry: 'https://ui.aceternity.com/registry/text-reveal-card.json'
  },
  {
    name: 'focus-cards',
    description: 'Hover over cards to focus, blurring the rest',
    registry: 'https://ui.aceternity.com/registry/focus-cards.json'
  },
  {
    name: 'hero-section',
    description: 'Hero section with complex layouts',
    registry: 'https://ui.aceternity.com/registry/hero-section-demo-1.json'
  }
];

// Function to check if components.json exists
function checkComponentsJson() {
  const componentsJsonPath = path.join(process.cwd(), 'components.json');
  return fs.existsSync(componentsJsonPath);
}

// Function to create components.json
function createComponentsJson() {
  console.log(`${colors.blue}📝 Creating components.json...${colors.reset}`);
  
  const componentsJson = {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "default",
    "rsc": true,
    "tsx": true,
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "app/globals.css",
      "baseColor": "neutral",
      "cssVariables": true,
      "prefix": ""
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils"
    }
  };

  try {
    fs.writeFileSync('components.json', JSON.stringify(componentsJson, null, 2));
    console.log(`${colors.green}✅ components.json created successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.log(`${colors.red}❌ Failed to create components.json: ${error.message}${colors.reset}`);
    return false;
  }
}

// Function to install dependencies with legacy peer deps
function installDependencies() {
  console.log(`${colors.blue}📦 Installing dependencies...${colors.reset}`);
  
  try {
    // Install required dependencies with legacy peer deps
    execSync('npm install clsx tailwind-merge class-variance-authority lucide-react --legacy-peer-deps', { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    console.log(`${colors.green}✅ Dependencies installed successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.log(`${colors.red}❌ Failed to install dependencies: ${error.message}${colors.reset}`);
    return false;
  }
}

// Function to install a single Aceternity UI component
function installComponent(component) {
  console.log(`${colors.blue}🔧 Installing ${component.name}...${colors.reset}`);
  console.log(`   📝 ${component.description}`);
  
  return new Promise((resolve) => {
    try {
      // Use npm exec instead of npx for better compatibility
      const child = spawn('npm', ['exec', 'shadcn@latest', 'add', component.registry], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd(),
        shell: true // Use shell for better compatibility
      });

      let output = '';
      let errorOutput = '';

      child.stdout.on('data', (data) => {
        const text = data.toString();
        output += text;
        process.stdout.write(text);
      });

      child.stderr.on('data', (data) => {
        const text = data.toString();
        errorOutput += text;
        process.stderr.write(text);
      });

      child.on('error', (error) => {
        console.log(`${colors.red}❌ Error spawning process: ${error.message}${colors.reset}`);
        if (error.code === 'ENOENT') {
          console.log(`${colors.yellow}⚠️  npm not found. Trying alternative approach...${colors.reset}`);
          // Try alternative approach using direct execSync
          try {
            execSync(`npm exec shadcn@latest add ${component.registry}`, { 
              stdio: 'inherit',
              cwd: process.cwd()
            });
            console.log(`${colors.green}✅ ${component.name} installed successfully${colors.reset}`);
            resolve(true);
          } catch (execError) {
            console.log(`${colors.red}❌ Failed to install ${component.name}: ${execError.message}${colors.reset}`);
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });

      child.on('close', (code) => {
        if (code === 0) {
          console.log(`${colors.green}✅ ${component.name} installed successfully${colors.reset}`);
          resolve(true);
        } else {
          console.log(`${colors.red}❌ Failed to install ${component.name}${colors.reset}`);
          console.log(`${colors.yellow}⚠️  Error output: ${errorOutput}${colors.reset}`);
          resolve(false);
        }
      });

      // Handle interactive prompts
      child.stdin.write('yes\n'); // Auto-respond to prompts
    } catch (error) {
      console.log(`${colors.red}❌ Failed to start installation process: ${error.message}${colors.reset}`);
      resolve(false);
    }
  });
}

// Function to create a test page with the installed components
function createTestPage() {
  console.log(`${colors.blue}📄 Creating test page...${colors.reset}`);
  
  const testPageContent = `"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { FocusCards } from "@/components/ui/focus-cards";
import { HeroSection } from "@/components/ui/hero-section";

export default function TestAceternityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ✨ Aceternity UI
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real components installed via MCP and shadcn CLI
            </p>
          </div>
        </div>
      </section>

      {/* Text Reveal Card */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">3D Text Reveal Card</h2>
            <p className="text-xl text-gray-300">Move your mouse over the card to see the 3D effect</p>
          </div>
          <div className="flex justify-center">
            <TextRevealCard
              text="AstroBits Core"
              revealText="MCP-Powered Development System"
              imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Focus Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Focus Cards</h2>
            <p className="text-xl text-gray-300">Hover over cards to focus on them</p>
          </div>
          <FocusCards />
        </div>
      </section>

      {/* Status Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">✅ Aceternity UI Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                <div className="text-sm text-gray-300">Components</div>
              </div>
              <div className="text-center p-6 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">Real</div>
                <div className="text-sm text-gray-300">Components</div>
              </div>
              <div className="text-center p-6 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">MCP</div>
                <div className="text-sm text-gray-300">Installed</div>
              </div>
              <div className="text-center p-6 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-400 mb-2">Ready</div>
                <div className="text-sm text-gray-300">Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;

  try {
    const testPagePath = path.join(process.cwd(), 'app/test-aceternity/page.tsx');
    const testPageDir = path.dirname(testPagePath);
    if (!fs.existsSync(testPageDir)) {
      fs.mkdirSync(testPageDir, { recursive: true });
    }
    fs.writeFileSync(testPagePath, testPageContent);
    console.log(`${colors.green}✅ Test page created: ${testPagePath}${colors.reset}`);
    return true;
  } catch (error) {
    console.log(`${colors.red}❌ Failed to create test page: ${error.message}${colors.reset}`);
    return false;
  }
}

// Main installation function
async function installAceternityUI() {
  console.log(`${colors.bright}${colors.cyan}✨ AstroBits Core - Aceternity UI Installation${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

  let successCount = 0;
  let totalComponents = aceternityComponents.length;

  // Step 1: Check and create components.json
  console.log(`${colors.bright}${colors.yellow}Step 1: Checking components.json${colors.reset}`);
  if (!checkComponentsJson()) {
    console.log(`${colors.yellow}⚠️  components.json not found${colors.reset}`);
    if (!createComponentsJson()) {
      console.log(`${colors.red}❌ Cannot proceed without components.json${colors.reset}`);
      return;
    }
  } else {
    console.log(`${colors.green}✅ components.json already exists${colors.reset}`);
  }

  // Step 2: Install dependencies
  console.log(`\n${colors.bright}${colors.yellow}Step 2: Installing dependencies${colors.reset}`);
  if (!installDependencies()) {
    console.log(`${colors.red}❌ Cannot proceed without dependencies${colors.reset}`);
    return;
  }

  // Step 3: Install components
  console.log(`\n${colors.bright}${colors.yellow}Step 3: Installing Aceternity UI components${colors.reset}`);
  for (const component of aceternityComponents) {
    const success = await installComponent(component);
    if (success) {
      successCount++;
    }
    console.log(''); // Add spacing between components
  }

  // Step 4: Create test page
  console.log(`${colors.bright}${colors.yellow}Step 4: Creating test page${colors.reset}`);
  createTestPage();

  // Summary
  console.log(`\n${colors.bright}${colors.cyan}📊 Installation Summary${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`✅ Successfully installed: ${colors.green}${successCount}/${totalComponents}${colors.reset} components`);
  console.log(`📁 Components location: ${colors.blue}components/ui/${colors.reset}`);
  console.log(`🎯 Test page: ${colors.blue}app/test-aceternity/page.tsx${colors.reset}\n`);

  if (successCount === totalComponents) {
    console.log(`${colors.bright}${colors.green}🎉 All Aceternity UI components installed successfully!${colors.reset}`);
    console.log(`${colors.green}🌐 Visit http://localhost:3006/test-aceternity to see the components${colors.reset}\n`);
  } else {
    console.log(`${colors.bright}${colors.yellow}⚠️  Some components failed to install${colors.reset}`);
    console.log(`${colors.yellow}Check the error messages above for details${colors.reset}\n`);
  }

  return {
    successCount,
    totalComponents,
    components: aceternityComponents
  };
}

// Run the installation if this script is executed directly
if (require.main === module) {
  installAceternityUI().catch(console.error);
}

module.exports = { installAceternityUI, aceternityComponents };
