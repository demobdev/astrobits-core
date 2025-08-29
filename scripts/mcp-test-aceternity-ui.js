#!/usr/bin/env node

/**
 * AstroBits Core - Aceternity UI Test Script
 * 
 * This script tests Aceternity UI components and demonstrates their usage.
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

// Aceternity UI components to test
const aceternityComponents = {
  'card-spotlight': {
    name: 'Card Spotlight',
    description: 'Interactive card with spotlight effect',
    content: `"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200/[0.08] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-10",
        className
      )}
    >
      <div className="relative z-10">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};`
  },
  'hate': {
    name: 'Hate',
    description: 'Animated hate/love component',
    content: `"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hate = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
        className="relative p-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <motion.div
          animate={{
            scale: isLiked ? [1, 1.2, 1] : 1,
            rotate: isLiked ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: isLiked ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {isLiked ? "❤️" : "💔"}
          </motion.span>
          <span>{isLiked ? "Love" : "Hate"}</span>
        </motion.div>
        
        <motion.div
          animate={{
            opacity: isLiked ? [0, 1, 0] : 0,
            scale: isLiked ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full"
        >
          +1
        </motion.div>
      </motion.button>
    </div>
  );
};`
  },
  'macbook-scroll': {
    name: 'Macbook Scroll',
    description: 'MacBook-style scroll animation',
    content: `"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const MacbookScroll = ({
  title,
  badge,
  src,
  showGradient,
}: {
  src?: string;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
  showGradient?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-center overflow-hidden rounded-md antialiased"
    >
      <motion.div
        style={{
          y,
          opacity,
        }}
        className="relative z-10"
      >
        <div className="relative">
          {/* MacBook Frame */}
          <div className="relative mx-auto h-[400px] w-[600px] rounded-[2.5rem] border border-gray-800 bg-gray-900 p-2 shadow-2xl">
            {/* Screen */}
            <div className="relative h-full w-full rounded-[2rem] bg-gray-800 overflow-hidden">
              {/* Content */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">{title || "AstroBits Core"}</h3>
                  {badge && <div className="mb-4">{badge}</div>}
                  <p className="text-lg opacity-90">MCP-Powered Development</p>
                </div>
              </div>
            </div>
            
            {/* Camera */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full"></div>
          </div>
          
          {/* Base */}
          <div className="relative mx-auto mt-2 h-4 w-[700px] rounded-[1rem] bg-gray-900 border border-gray-800"></div>
        </div>
      </motion.div>
      
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/0 to-gray-900/0" />
      )}
    </div>
  );
};`
  }
};

// Main function to test Aceternity UI components
async function testAceternityUI() {
  console.log(`${colors.bright}${colors.cyan}✨ AstroBits Core - Aceternity UI Test${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

  // Create Aceternity UI components directory
  const aceternityDir = path.join(process.cwd(), 'components/aceternity');
  if (!fs.existsSync(aceternityDir)) {
    fs.mkdirSync(aceternityDir, { recursive: true });
  }

  let generatedCount = 0;

  // Generate each Aceternity UI component
  for (const [key, component] of Object.entries(aceternityComponents)) {
    try {
      const fileName = `${key}.tsx`;
      const filePath = path.join(aceternityDir, fileName);
      
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
  const indexContent = `// Aceternity UI Components Generated by AstroBits Core MCP System
// These are animated and interactive components

export { HoverEffect, Card, CardTitle, CardDescription } from './card-spotlight';
export { Hate } from './hate';
export { MacbookScroll } from './macbook-scroll';

// Usage:
// import { HoverEffect, Hate, MacbookScroll } from '@/components/aceternity';
`;

  try {
    const indexPath = path.join(aceternityDir, 'index.ts');
    fs.writeFileSync(indexPath, indexContent);
    console.log(`${colors.green}✅${colors.reset} Generated ${colors.bright}index.ts${colors.reset}`);
    console.log(`   📁 ${colors.blue}${indexPath}${colors.reset}\n`);
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} Failed to generate index file`);
    console.log(`   ${colors.red}Error: ${error.message}${colors.reset}\n`);
  }

  // Create test page
  const testPageContent = `"use client";
import { HoverEffect, Card, CardTitle, CardDescription } from "@/components/aceternity/card-spotlight";
import { Hate } from "@/components/aceternity/hate";
import { MacbookScroll } from "@/components/aceternity/macbook-scroll";

export default function TestAceternityPage() {
  const items = [
    {
      title: "AstroBits Core",
      description: "The development DNA that powers your universe",
      link: "/",
    },
    {
      title: "MCP Ecosystem",
      description: "20+ integrated MCP servers for rapid development",
      link: "/",
    },
    {
      title: "Voice-Driven",
      description: "Natural language commands for instant results",
      link: "/",
    },
    {
      title: "UI Libraries",
      description: "Radix UI, Shadcn/UI, Magic UI, and Aceternity UI",
      link: "/",
    },
    {
      title: "Health Check",
      description: "Comprehensive MCP server monitoring system",
      link: "/",
    },
    {
      title: "Templates",
      description: "SaaS, E-commerce, Portfolio, and custom templates",
      link: "/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Macbook Scroll */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ✨ Aceternity UI
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Testing animated and interactive components with AstroBits Core
            </p>
          </div>
          
          {/* Macbook Scroll Component */}
          <MacbookScroll
            title="AstroBits Core"
            badge={<span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">MCP-Powered</span>}
            showGradient={true}
          />
        </div>
      </section>

      {/* Hate Component */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Components</h2>
            <p className="text-xl text-gray-300">Click to see the animation</p>
          </div>
          <Hate />
        </div>
      </section>

      {/* Card Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Card Spotlight Effect</h2>
            <p className="text-xl text-gray-300">Hover over the cards to see the spotlight effect</p>
          </div>
          <HoverEffect items={items} />
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
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Animated</div>
              </div>
              <div className="text-center p-6 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">Ready</div>
                <div className="text-sm text-gray-300">Status</div>
              </div>
              <div className="text-center p-6 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-400 mb-2">MCP</div>
                <div className="text-sm text-gray-300">Powered</div>
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
    console.log(`${colors.green}✅${colors.reset} Generated ${colors.bright}Test Page${colors.reset}`);
    console.log(`   📁 ${colors.blue}${testPagePath}${colors.reset}\n`);
  } catch (error) {
    console.log(`${colors.red}❌${colors.reset} Failed to generate test page`);
    console.log(`   ${colors.red}Error: ${error.message}${colors.reset}\n`);
  }

  // Summary
  console.log(`${colors.bright}${colors.cyan}📊 Aceternity UI Test Summary${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`✅ Generated: ${colors.green}${generatedCount}${colors.reset} components`);
  console.log(`📁 Location: ${colors.blue}${aceternityDir}${colors.reset}`);
  console.log(`🎯 Purpose: Test Aceternity UI animated components\n`);

  // Instructions
  console.log(`${colors.bright}${colors.yellow}🚀 Next Steps${colors.reset}`);
  console.log(`${colors.yellow}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`1. Review the generated Aceternity UI components in ${colors.blue}${aceternityDir}${colors.reset}`);
  console.log(`2. Visit http://localhost:3006/test-aceternity to see the test page`);
  console.log(`3. Test the interactive components: Card Spotlight, Hate, and Macbook Scroll`);
  console.log(`4. Integrate these animations into your main application\n`);

  return {
    generatedCount,
    aceternityDir,
    components: Object.keys(aceternityComponents)
  };
}

// Run the test if this script is executed directly
if (require.main === module) {
  testAceternityUI().catch(console.error);
}

module.exports = { testAceternityUI, aceternityComponents };
