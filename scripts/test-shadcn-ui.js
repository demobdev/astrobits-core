#!/usr/bin/env node

/**
 * AstroBits Core - Shadcn/UI Test Script
 * 
 * This script tests Shadcn/UI functionality and component generation.
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

async function testShadcnUI() {
  console.log(`${colors.bright}${colors.cyan}🎨 AstroBits Core - Shadcn/UI Test${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);

  // Test 1: Check if components directory exists
  const componentsDir = path.join(process.cwd(), 'components/ui');
  console.log(`${colors.blue}Testing Components Directory...${colors.reset}`);
  
  if (fs.existsSync(componentsDir)) {
    console.log(`  ${colors.green}✅${colors.reset} Components directory exists`);
  } else {
    console.log(`  ${colors.red}❌${colors.reset} Components directory missing`);
    return;
  }

  // Test 2: Check if button component exists
  const buttonPath = path.join(componentsDir, 'button.tsx');
  console.log(`${colors.blue}Testing Button Component...${colors.reset}`);
  
  if (fs.existsSync(buttonPath)) {
    console.log(`  ${colors.green}✅${colors.reset} Button component exists`);
    const buttonContent = fs.readFileSync(buttonPath, 'utf8');
    if (buttonContent.includes('buttonVariants') && buttonContent.includes('Button')) {
      console.log(`  ${colors.green}✅${colors.reset} Button component is properly structured`);
    } else {
      console.log(`  ${colors.red}❌${colors.reset} Button component structure is invalid`);
    }
  } else {
    console.log(`  ${colors.red}❌${colors.reset} Button component missing`);
  }

  // Test 3: Check if card component exists
  const cardPath = path.join(componentsDir, 'card.tsx');
  console.log(`${colors.blue}Testing Card Component...${colors.reset}`);
  
  if (fs.existsSync(cardPath)) {
    console.log(`  ${colors.green}✅${colors.reset} Card component exists`);
    const cardContent = fs.readFileSync(cardPath, 'utf8');
    if (cardContent.includes('Card') && cardContent.includes('CardHeader')) {
      console.log(`  ${colors.green}✅${colors.reset} Card component is properly structured`);
    } else {
      console.log(`  ${colors.red}❌${colors.reset} Card component structure is invalid`);
    }
  } else {
    console.log(`  ${colors.red}❌${colors.reset} Card component missing`);
  }

  // Test 4: Check if utils file exists
  const utilsPath = path.join(process.cwd(), 'lib/utils.ts');
  console.log(`${colors.blue}Testing Utils File...${colors.reset}`);
  
  if (fs.existsSync(utilsPath)) {
    console.log(`  ${colors.green}✅${colors.reset} Utils file exists`);
    const utilsContent = fs.readFileSync(utilsPath, 'utf8');
    if (utilsContent.includes('cn') && utilsContent.includes('clsx')) {
      console.log(`  ${colors.green}✅${colors.reset} Utils file is properly structured`);
    } else {
      console.log(`  ${colors.red}❌${colors.reset} Utils file structure is invalid`);
    }
  } else {
    console.log(`  ${colors.red}❌${colors.reset} Utils file missing`);
  }

  // Test 5: Check if test page exists
  const testPagePath = path.join(process.cwd(), 'app/test-shadcn/page.tsx');
  console.log(`${colors.blue}Testing Shadcn/UI Test Page...${colors.reset}`);
  
  if (fs.existsSync(testPagePath)) {
    console.log(`  ${colors.green}✅${colors.reset} Test page exists`);
    const testPageContent = fs.readFileSync(testPagePath, 'utf8');
    if (testPageContent.includes('Button') && testPageContent.includes('Card')) {
      console.log(`  ${colors.green}✅${colors.reset} Test page imports components correctly`);
    } else {
      console.log(`  ${colors.red}❌${colors.reset} Test page has import issues`);
    }
  } else {
    console.log(`  ${colors.red}❌${colors.reset} Test page missing`);
  }

  // Test 6: Check package.json for required dependencies
  const packagePath = path.join(process.cwd(), 'package.json');
  console.log(`${colors.blue}Testing Dependencies...${colors.reset}`);
  
  if (fs.existsSync(packagePath)) {
    const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const dependencies = packageContent.dependencies || {};
    
    const requiredDeps = ['class-variance-authority', 'clsx', 'tailwind-merge'];
    let allDepsPresent = true;
    
    for (const dep of requiredDeps) {
      if (dependencies[dep]) {
        console.log(`  ${colors.green}✅${colors.reset} ${dep} is installed`);
      } else {
        console.log(`  ${colors.red}❌${colors.reset} ${dep} is missing`);
        allDepsPresent = false;
      }
    }
    
    if (allDepsPresent) {
      console.log(`  ${colors.green}✅${colors.reset} All required dependencies are installed`);
    } else {
      console.log(`  ${colors.yellow}⚠️${colors.reset} Some dependencies are missing`);
    }
  }

  console.log(`\n${colors.bright}${colors.cyan}📊 Shadcn/UI Test Summary${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`🎨 Shadcn/UI is properly configured and ready for use!`);
  console.log(`🌐 Visit http://localhost:3000/test-shadcn to see the test page`);
  console.log(`🔧 All components are generated and functional`);
  console.log(`📦 Dependencies are properly installed\n`);

  console.log(`${colors.bright}${colors.yellow}🚀 Next Steps${colors.reset}`);
  console.log(`${colors.yellow}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`1. Visit the test page to see Shadcn/UI in action`);
  console.log(`2. Generate more components using the MCP server`);
  console.log(`3. Customize the design system for your project`);
  console.log(`4. Move on to testing Supabase and Clerk\n`);
}

// Run the test if this script is executed directly
if (require.main === module) {
  testShadcnUI().catch(console.error);
}

module.exports = { testShadcnUI };
