const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Enhanced component list with more components
const aceternityComponents = [
  {
    name: 'background-beams',
    description: 'Animated background beams with collision effects',
    registry: 'https://ui.aceternity.com/registry/background-beams.json'
  },
  {
    name: 'bento-grid',
    description: 'A responsive grid layout component with modern design',
    registry: 'https://ui.aceternity.com/registry/bento-grid.json'
  },
  {
    name: 'text-generate-effect',
    description: 'A cool text effect that fades in text on page load, one by one',
    registry: 'https://ui.aceternity.com/registry/text-generate-effect.json'
  }
];

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

function checkComponentsJson() {
  try {
    const componentsPath = path.join(process.cwd(), 'components.json');
    return fs.existsSync(componentsPath);
  } catch (error) {
    return false;
  }
}

function createComponentsJson() {
  log('Creating components.json...', 'yellow');
  const componentsConfig = {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "default",
    "rsc": true,
    "tsx": true,
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "app/globals.css",
      "baseColor": "slate",
      "cssVariables": true,
      "prefix": ""
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils"
    }
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'components.json'),
    JSON.stringify(componentsConfig, null, 2)
  );
  log('✅ components.json created', 'green');
}

function installDependencies() {
  log('Installing common dependencies...', 'yellow');
  
  const dependencies = [
    'framer-motion@^11.0.0',
    'lucide-react@^0.542.0',
    'motion@^12.23.12',
    'class-variance-authority@^0.7.1',
    'clsx@^2.1.1',
    'tailwind-merge@^2.6.0'
  ];

  try {
    execSync(`npm install ${dependencies.join(' ')} --legacy-peer-deps`, {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    log('✅ Dependencies installed successfully', 'green');
  } catch (error) {
    log(`❌ Failed to install dependencies: ${error.message}`, 'red');
    throw error;
  }
}

function installComponent(component) {
  return new Promise((resolve) => {
    log(`Installing ${component.name}...`, 'yellow');
    
    try {
      const child = spawn('npm', ['exec', 'shadcn@latest', 'add', component.registry], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd(),
        shell: true
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
        process.stdout.write(data);
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
        process.stderr.write(data);
      });

      child.on('error', (error) => {
        log(`❌ Failed to start installation for ${component.name}: ${error.message}`, 'red');
        resolve(false);
      });

      child.on('close', (code) => {
        if (code === 0) {
          log(`✅ ${component.name} installed successfully`, 'green');
          resolve(true);
        } else {
          log(`❌ Failed to install ${component.name} (exit code: ${code})`, 'red');
          log(`STDOUT: ${stdout}`, 'yellow');
          log(`STDERR: ${stderr}`, 'yellow');
          resolve(false);
        }
      });

      // Auto-respond to prompts
      child.stdin.write('yes\n');
    } catch (error) {
      log(`❌ Failed to start installation process for ${component.name}: ${error.message}`, 'red');
      resolve(false);
    }
  });
}

function createEnhancedTestPage() {
  log('Creating enhanced test page...', 'yellow');
  
  const testPageContent = `"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { FocusCards } from "@/components/ui/focus-cards";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function TestAceternityPage() {
  // Sample data for FocusCards component
  const focusCardsData = [
    {
      title: "AstroBits Core",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    },
    {
      title: "MCP System",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
    },
    {
      title: "Voice-Driven Development",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    }
  ];

  // Sample data for BentoGrid
  const bentoItems = [
    {
      title: "AstroBits Core",
      description: "The development DNA that powers your universe",
      header: "🚀",
      icon: "⚡"
    },
    {
      title: "MCP System",
      description: "Model Context Protocol integration",
      header: "🔗",
      icon: "🌐"
    },
    {
      title: "Voice-Driven",
      description: "Natural language development",
      header: "🎤",
      icon: "💬"
    },
    {
      title: "Real Components",
      description: "Pulled from actual registries",
      header: "📦",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Beams */}
      <section className="relative overflow-hidden py-20">
        <BackgroundBeams />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextGenerateEffect 
              words="✨ AstroBits Core - Enhanced Test"
              className="text-6xl font-bold mb-6"
            />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real components installed via MCP and shadcn CLI - Now with enhanced process!
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bento Grid Layout</h2>
            <p className="text-xl text-gray-300">Modern responsive grid with hover effects</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Text Reveal Card with Fake Image */}
      <section className="py-20">
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Focus Cards</h2>
            <p className="text-xl text-gray-300">Hover over cards to focus on them</p>
          </div>
          <FocusCards cards={focusCardsData} />
        </div>
      </section>

      {/* Hero Section Demo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hero Section Demo</h2>
            <p className="text-xl text-gray-300">Complex hero layout with animations</p>
          </div>
          <HeroSectionOne />
        </div>
      </section>

      {/* Status Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">✅ Enhanced Aceternity UI Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">6</div>
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
                <div className="text-3xl font-bold text-amber-400 mb-2">Enhanced</div>
                <div className="text-sm text-gray-300">Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;

  const testPagePath = path.join(process.cwd(), 'app', 'test-aceternity-enhanced', 'page.tsx');
  
  // Ensure directory exists
  const dir = path.dirname(testPagePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(testPagePath, testPageContent);
  log('✅ Enhanced test page created at /test-aceternity-enhanced', 'green');
}

async function installAceternityUI() {
  log('🚀 Starting Enhanced Aceternity UI Installation Process', 'blue');
  log('This process incorporates all learnings from previous installations', 'blue');
  
  let successCount = 0;
  let totalComponents = aceternityComponents.length;

  try {
    // Step 1: Check and create components.json
    if (!checkComponentsJson()) {
      createComponentsJson();
    } else {
      log('✅ components.json already exists', 'green');
    }

    // Step 2: Install dependencies
    installDependencies();

    // Step 3: Install components
    log('Installing Aceternity UI components...', 'blue');
    
    for (const component of aceternityComponents) {
      const success = await installComponent(component);
      if (success) {
        successCount++;
      }
    }

    // Step 4: Create enhanced test page
    createEnhancedTestPage();

    // Step 5: Summary
    log('\\n📊 Installation Summary:', 'blue');
    log(`✅ Successfully installed: ${successCount}/${totalComponents} components`, 'green');
    
    if (successCount === totalComponents) {
      log('🎉 All components installed successfully!', 'green');
    } else {
      log(`⚠️  ${totalComponents - successCount} components failed to install`, 'yellow');
    }

    log('\\n🌐 Next Steps:', 'blue');
    log('1. Visit http://localhost:3008/test-aceternity-enhanced to see the enhanced test page', 'green');
    log('2. Run npm run mcp:health to verify installation', 'green');
    log('3. Check the console for any remaining issues', 'green');

  } catch (error) {
    log(`❌ Installation failed: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the installation
installAceternityUI();
