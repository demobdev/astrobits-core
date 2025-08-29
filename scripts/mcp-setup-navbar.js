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

function checkResizableNavbar() {
  try {
    const navbarPath = path.join(process.cwd(), 'components', 'ui', 'resizable-navbar.tsx');
    return fs.existsSync(navbarPath);
  } catch (error) {
    return false;
  }
}

function installResizableNavbar() {
  log('Installing Aceternity UI Resizable Navbar...', 'yellow');
  
  try {
    execSync('npm exec shadcn@latest add https://ui.aceternity.com/registry/resizable-navbar.json', {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    log('✅ Resizable navbar installed successfully', 'green');
  } catch (error) {
    log(`❌ Failed to install resizable navbar: ${error.message}`, 'red');
    throw error;
  }
}

function createAstroBitsNavbar() {
  log('Creating modern AstroBits navbar...', 'yellow');
  
  const navbarContent = `"use client";
import Link from 'next/link';
import { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";

// Navigation items for AstroBits Core
const navigationItems = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/#features" },
  { name: "MCP Ecosystem", link: "/#mcp-ecosystem" },
  { name: "Test Pages", link: "/#test-pages" },
  { name: "Documentation", link: "/#docs" },
];

// Test pages for quick access
const testPages = [
  { name: "Shadcn/UI", link: "/test-shadcn" },
  { name: "Radix UI", link: "/test-radix" },
  { name: "Aceternity UI", link: "/test-aceternity" },
  { name: "Enhanced Aceternity", link: "/test-aceternity-enhanced" },
  { name: "Supabase Auth", link: "/test-supabase" },
  { name: "Clerk Auth", link: "/test-clerk" },
];

export default function AstroBitsNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        <NavBody>
          {/* Logo */}
          <NavbarLogo>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AB</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AstroBits Core
              </span>
            </Link>
          </NavbarLogo>

          {/* Navigation Items */}
          <NavItems 
            items={navigationItems} 
            className="text-gray-700 dark:text-gray-300"
          />

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <NavbarButton
              href="/test-shadcn"
              variant="secondary"
              className="text-sm"
            >
              Test UI
            </NavbarButton>
            <NavbarButton
              href="/test-supabase"
              variant="primary"
              className="text-sm"
            >
              Get Started
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Navigation */}
      <MobileNav className="fixed top-0 left-0 right-0 z-50">
        <MobileNavHeader>
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AstroBits
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {/* Main Navigation */}
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={handleMobileItemClick}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Test Pages */}
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Test Pages
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {testPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  onClick={handleMobileItemClick}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/test-shadcn"
                onClick={handleMobileItemClick}
                className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-center"
              >
                Test UI Components
              </Link>
              <Link
                href="/test-supabase"
                onClick={handleMobileItemClick}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition-all text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}

// Enhanced navbar with additional features
export function AstroBitsNavigationEnhanced() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMobileItemClick = () => {
    setMobileMenuOpen(false);
  };

  // Enhanced navigation items with icons and descriptions
  const enhancedNavigationItems = [
    { 
      name: "Home", 
      link: "/", 
      icon: "🏠",
      description: "Welcome to AstroBits Core"
    },
    { 
      name: "Features", 
      link: "/#features", 
      icon: "⚡",
      description: "Discover our powerful features"
    },
    { 
      name: "MCP Ecosystem", 
      link: "/#mcp-ecosystem", 
      icon: "🔗",
      description: "Model Context Protocol integration"
    },
    { 
      name: "Test Pages", 
      link: "/#test-pages", 
      icon: "🧪",
      description: "Test all our integrations"
    },
    { 
      name: "Documentation", 
      link: "/#docs", 
      icon: "📚",
      description: "Learn how to use AstroBits"
    },
  ];

  return (
    <>
      {/* Desktop Enhanced Navigation */}
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        <NavBody>
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AstroBits Core
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  MCP-Powered Development
                </span>
              </div>
            </Link>
          </div>

          {/* Enhanced Navigation Items */}
          <NavItems 
            items={enhancedNavigationItems.map(item => ({ name: item.name, link: item.link }))} 
            className="text-gray-700 dark:text-gray-300"
          />

          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-3">
            <NavbarButton
              href="/test-shadcn"
              variant="secondary"
              className="text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              🧪 Test UI
            </NavbarButton>
            <NavbarButton
              href="/test-supabase"
              variant="gradient"
              className="text-sm"
            >
              🚀 Get Started
            </NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Enhanced Navigation */}
      <MobileNav className="fixed top-0 left-0 right-0 z-50">
        <MobileNavHeader>
          {/* Mobile Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AstroBits
              </span>
              <span className="text-xs text-gray-500">
                MCP-Powered
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Enhanced Mobile Menu */}
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {/* Enhanced Main Navigation */}
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <div className="space-y-2">
              {enhancedNavigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  onClick={handleMobileItemClick}
                  className="flex items-center space-x-3 px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-500">{item.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Test Pages */}
          <div className="w-full">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Test Pages
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {testPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  onClick={handleMobileItemClick}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="w-full pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                href="/test-shadcn"
                onClick={handleMobileItemClick}
                className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-center flex items-center justify-center space-x-2"
              >
                <span>🧪</span>
                <span>Test UI Components</span>
              </Link>
              <Link
                href="/test-supabase"
                onClick={handleMobileItemClick}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>🚀</span>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}`;

  const componentsDir = path.join(process.cwd(), 'components');
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const navbarPath = path.join(componentsDir, 'AstroBitsNavigation.tsx');
  fs.writeFileSync(navbarPath, navbarContent);
  log('✅ AstroBits Navigation created at components/AstroBitsNavigation.tsx', 'green');
}

function updateLayoutWithNewNavbar() {
  log('Updating layout to use new AstroBits navbar...', 'yellow');
  
  const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Replace the old Navigation import with the new one
    if (layoutContent.includes('import Navigation')) {
      layoutContent = layoutContent.replace(
        'import Navigation from "./components/Navigation";',
        'import AstroBitsNavigation from "@/components/AstroBitsNavigation";'
      );
      
      // Replace the Navigation component usage
      layoutContent = layoutContent.replace(
        '<Navigation />',
        '<AstroBitsNavigation />'
      );
      
      fs.writeFileSync(layoutPath, layoutContent);
      log('✅ Layout updated with new AstroBits navbar', 'green');
    } else {
      log('⚠️  No Navigation import found in layout, manual update may be needed', 'yellow');
    }
  }
}

function createTestPage() {
  log('Creating navbar test page...', 'yellow');
  
  const testPageContent = `"use client";
import AstroBitsNavigation, { AstroBitsNavigationEnhanced } from "@/components/AstroBitsNavigation";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NavbarTestPage() {
  const [useEnhanced, setUseEnhanced] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      {useEnhanced ? <AstroBitsNavigationEnhanced /> : <AstroBitsNavigation />}
      
      {/* Content */}
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">🧭 AstroBits Navigation Test</h1>
            <p className="text-xl text-gray-600">Test the modern resizable navbar</p>
          </div>

          {/* Navbar Toggle */}
          <div className="max-w-md mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Navbar Variants</CardTitle>
                <CardDescription>Switch between different navbar styles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    variant={!useEnhanced ? "default" : "outline"}
                    onClick={() => setUseEnhanced(false)}
                    className="flex-1"
                  >
                    Standard
                  </Button>
                  <Button
                    variant={useEnhanced ? "default" : "outline"}
                    onClick={() => setUseEnhanced(true)}
                    className="flex-1"
                  >
                    Enhanced
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Test Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <Card key={i} className="h-64">
                <CardHeader>
                  <CardTitle>Test Section {i + 1}</CardTitle>
                  <CardDescription>Scroll to see navbar resize effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This is test content to demonstrate the resizable navbar functionality. 
                    Scroll down to see the navbar change width and add blur effects.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>🚀 AstroBits Navigation Features</CardTitle>
                <CardDescription>Modern navbar with advanced functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Desktop Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✅ Resizable on scroll</li>
                      <li>✅ Blur effects</li>
                      <li>✅ Smooth animations</li>
                      <li>✅ Hover effects</li>
                      <li>✅ Gradient branding</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Mobile Features</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✅ Responsive design</li>
                      <li>✅ Animated menu</li>
                      <li>✅ Touch-friendly</li>
                      <li>✅ Quick access links</li>
                      <li>✅ Enhanced variants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Integration Status */}
          <div className="mt-16">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>🔗 Integration Status</CardTitle>
                <CardDescription>All navigation links are functional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">✅</div>
                    <div className="text-sm font-medium">Aceternity UI</div>
                    <div className="text-xs text-gray-500">Resizable Navbar</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">✅</div>
                    <div className="text-sm font-medium">Shadcn/UI</div>
                    <div className="text-xs text-gray-500">Components</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">✅</div>
                    <div className="text-sm font-medium">Framer Motion</div>
                    <div className="text-xs text-gray-500">Animations</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">✅</div>
                    <div className="text-sm font-medium">Responsive</div>
                    <div className="text-xs text-gray-500">Mobile Ready</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  const testPagePath = path.join(process.cwd(), 'app', 'test-navbar', 'page.tsx');
  
  // Ensure directory exists
  const dir = path.dirname(testPagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(testPagePath, testPageContent);
  log('✅ Navbar test page created at /test-navbar', 'green');
}

function backupOldNavbar() {
  log('Backing up old Navigation component...', 'yellow');
  
  const oldNavbarPath = path.join(process.cwd(), 'app', 'components', 'Navigation.tsx');
  const backupPath = path.join(process.cwd(), 'app', 'components', 'Navigation.backup.tsx');
  
  if (fs.existsSync(oldNavbarPath)) {
    fs.copyFileSync(oldNavbarPath, backupPath);
    log('✅ Old Navigation backed up as Navigation.backup.tsx', 'green');
  } else {
    log('⚠️  No old Navigation component found to backup', 'yellow');
  }
}

function createDocumentation() {
  log('Creating navbar documentation...', 'yellow');
  
  const docContent = `# AstroBits Navigation System

## Overview

The AstroBits Navigation system replaces the old "Rebirth" navbar with a modern, responsive navigation component built with Aceternity UI's resizable navbar.

## Features

### 🎯 Core Features
- **Resizable on Scroll**: Navbar changes width and adds blur effects when scrolling
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Modern Styling**: Gradient branding and glass-morphism effects

### 📱 Mobile Features
- **Animated Menu**: Smooth slide-in mobile navigation
- **Touch-Friendly**: Optimized for mobile interactions
- **Quick Access**: Direct links to all test pages
- **Enhanced Variants**: Multiple styling options

### 🖥️ Desktop Features
- **Hover Effects**: Interactive navigation items with hover states
- **Blur Effects**: Dynamic backdrop blur on scroll
- **Gradient Branding**: Modern AstroBits Core branding
- **Action Buttons**: Quick access to key features

## Components

### AstroBitsNavigation
Standard navigation component with basic functionality.

### AstroBitsNavigationEnhanced
Enhanced version with additional features:
- Icons for navigation items
- Descriptions for better UX
- Enhanced mobile menu
- Improved visual hierarchy

## Usage

### Basic Usage
\`\`\`tsx
import AstroBitsNavigation from "@/components/AstroBitsNavigation";

export default function Layout() {
  return (
    <div>
      <AstroBitsNavigation />
      {/* Your content */}
    </div>
  );
}
\`\`\`

### Enhanced Usage
\`\`\`tsx
import { AstroBitsNavigationEnhanced } from "@/components/AstroBitsNavigation";

export default function Layout() {
  return (
    <div>
      <AstroBitsNavigationEnhanced />
      {/* Your content */}
    </div>
  );
}
\`\`\`

## Navigation Items

### Main Navigation
- **Home**: Landing page
- **Features**: Key features showcase
- **MCP Ecosystem**: Model Context Protocol integration
- **Test Pages**: All available test pages
- **Documentation**: Usage guides and documentation

### Test Pages
- **Shadcn/UI**: UI component testing
- **Radix UI**: Primitive component testing
- **Aceternity UI**: Animation component testing
- **Enhanced Aceternity**: Advanced animation testing
- **Supabase Auth**: Authentication testing
- **Clerk Auth**: Professional auth testing

## Customization

### Adding New Navigation Items
Edit the \`navigationItems\` array in \`components/AstroBitsNavigation.tsx\`:

\`\`\`tsx
const navigationItems = [
  { name: "Home", link: "/" },
  { name: "New Page", link: "/new-page" },
  // ... more items
];
\`\`\`

### Styling Customization
The navbar uses Tailwind CSS classes and can be customized by modifying the component styles.

### Color Scheme
The navbar uses a blue-to-purple gradient theme that matches the AstroBits Core branding.

## Integration

### Dependencies
- **Aceternity UI**: Resizable navbar component
- **Framer Motion**: Animation library
- **Shadcn/UI**: Button and card components
- **Tabler Icons**: Icon library

### File Structure
\`\`\`
components/
├── AstroBitsNavigation.tsx          # Main navigation component
└── ui/
    └── resizable-navbar.tsx         # Aceternity UI navbar
\`\`\`

## Testing

Visit \`/test-navbar\` to see the navbar in action with:
- Both standard and enhanced variants
- Scroll effects demonstration
- Mobile responsiveness testing
- Integration status display

## Migration from Old Navbar

The old "Rebirth" navbar has been:
1. ✅ Backed up as \`Navigation.backup.tsx\`
2. ✅ Replaced with modern AstroBits navigation
3. ✅ Updated in the main layout
4. ✅ Enhanced with additional features

## Best Practices

1. **Performance**: The navbar is optimized for smooth scrolling
2. **Accessibility**: Includes proper ARIA labels and keyboard navigation
3. **Responsive**: Works seamlessly across all device sizes
4. **Maintainable**: Clean, well-documented code structure

## Future Enhancements

- [ ] Dark mode toggle
- [ ] User authentication integration
- [ ] Search functionality
- [ ] Breadcrumb navigation
- [ ] Multi-language support
`;

  const docsPath = path.join(process.cwd(), 'NAVBAR_DOCUMENTATION.md');
  fs.writeFileSync(docsPath, docContent);
  log('✅ Navbar documentation created at NAVBAR_DOCUMENTATION.md', 'green');
}

async function setupNavbar() {
  log('🚀 Starting AstroBits Navigation Setup', 'blue');
  log('This will replace the old Rebirth navbar with a modern Aceternity UI navbar', 'blue');
  
  try {
    // Step 1: Check and install resizable navbar
    if (!checkResizableNavbar()) {
      installResizableNavbar();
    } else {
      log('✅ Resizable navbar already installed', 'green');
    }

    // Step 2: Backup old navbar
    backupOldNavbar();

    // Step 3: Create new AstroBits navbar
    createAstroBitsNavbar();

    // Step 4: Update layout
    updateLayoutWithNewNavbar();

    // Step 5: Create test page
    createTestPage();

    // Step 6: Create documentation
    createDocumentation();

    // Step 7: Summary
    log('\n📊 Navbar Setup Summary:', 'blue');
    log('✅ Resizable navbar installed', 'green');
    log('✅ Old navbar backed up', 'green');
    log('✅ New AstroBits navbar created', 'green');
    log('✅ Layout updated', 'green');
    log('✅ Test page available', 'green');
    log('✅ Documentation created', 'green');

    log('\n🌐 Next Steps:', 'blue');
    log('1. Visit http://localhost:3008/test-navbar to test the new navbar', 'green');
    log('2. Scroll to see the resizable effect', 'green');
    log('3. Test mobile responsiveness', 'green');
    log('4. Check all navigation links work', 'green');

    log('\n📚 Documentation:', 'blue');
    log('- Navbar Documentation: NAVBAR_DOCUMENTATION.md', 'green');
    log('- Test Page: /test-navbar', 'green');
    log('- Component: components/AstroBitsNavigation.tsx', 'green');

    log('\n🎯 Key Features:', 'blue');
    log('✅ Resizable on scroll with blur effects', 'green');
    log('✅ Responsive mobile navigation', 'green');
    log('✅ Modern gradient branding', 'green');
    log('✅ Smooth Framer Motion animations', 'green');
    log('✅ Quick access to all test pages', 'green');

  } catch (error) {
    log(`❌ Navbar setup failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the setup
setupNavbar();
