"use client";
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
              <img 
                src="/astrobits-icon-light.png" 
                alt="AstroBits Core" 
                className="w-8 h-8 dark:hidden"
              />
              <img 
                src="/astrobits-icon-dark.png" 
                alt="AstroBits Core" 
                className="w-8 h-8 hidden dark:block"
              />
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
            <img 
              src="/astrobits-icon-light.png" 
              alt="AstroBits Core" 
              className="w-8 h-8 dark:hidden"
            />
            <img 
              src="/astrobits-icon-dark.png" 
              alt="AstroBits Core" 
              className="w-8 h-8 hidden dark:block"
            />
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AstroBits Core
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
              <img 
                src="/astrobits-icon-light.png" 
                alt="AstroBits Core" 
                className="w-10 h-10 dark:hidden group-hover:scale-110 transition-transform duration-200"
              />
              <img 
                src="/astrobits-icon-dark.png" 
                alt="AstroBits Core" 
                className="w-10 h-10 hidden dark:block group-hover:scale-110 transition-transform duration-200"
              />
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
            <img 
              src="/astrobits-icon-light.png" 
              alt="AstroBits Core" 
              className="w-8 h-8 dark:hidden"
            />
            <img 
              src="/astrobits-icon-dark.png" 
              alt="AstroBits Core" 
              className="w-8 h-8 hidden dark:block"
            />
            <div className="flex flex-col">
              <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AstroBits Core
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
}