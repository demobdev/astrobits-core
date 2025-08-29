#!/usr/bin/env node

/**
 * AstroBits Core - MCP Dependency Analyzer
 * 
 * This script analyzes component dependencies and pre-installs all required packages
 * to prevent conflicts during component installation.
 */

const { execSync } = require('child_process');
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

// Component dependency mapping
const componentDependencies = {
  // Aceternity UI Components
  'text-reveal-card': {
    dependencies: ['motion', 'framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0', // Old version conflicts with React 19
      'motion': '^12.0.0' // Needs specific version
    },
    registry: 'https://ui.aceternity.com/registry/text-reveal-card.json'
  },
  'focus-cards': {
    dependencies: ['framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    },
    registry: 'https://ui.aceternity.com/registry/focus-cards.json'
  },
  'hero-section-demo-1': {
    dependencies: ['framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    },
    registry: 'https://ui.aceternity.com/registry/hero-section-demo-1.json'
  },
  
  // Shadcn/UI Components
  'button': {
    dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    },
    registry: 'button' // shadcn component name
  },
  'card': {
    dependencies: ['class-variance-authority', 'clsx', 'tailwind-merge'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {},
    registry: 'card' // shadcn component name
  },
  
  // Radix UI Components
  'accordion': {
    dependencies: ['@radix-ui/react-accordion'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {},
    registry: 'accordion' // shadcn component name
  },
  'dialog': {
    dependencies: ['@radix-ui/react-dialog'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {},
    registry: 'dialog' // shadcn component name
  },
  'tabs': {
    dependencies: ['@radix-ui/react-tabs'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {},
    registry: 'tabs' // shadcn component name
  },
  
  // Magic UI Components
  'hero-section': {
    dependencies: ['framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    },
    registry: 'hero-section' // Magic UI component name
  },
  'animated-card': {
    dependencies: ['framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    },
    registry: 'animated-card' // Magic UI component name
  }
};

// React 19 compatibility fixes
const react19Fixes = {
  'lucide-react': '^0.542.0', // Latest version compatible with React 19
  'motion': '^12.23.12', // Latest version
  'framer-motion': '^11.0.0', // Latest version - but needs to be updated to latest
  'class-variance-authority': '^0.7.1', // Latest version
  'clsx': '^2.1.1', // Latest version
  'tailwind-merge': '^2.6.0' // Latest version
};

// Function to check current package.json
function getCurrentDependencies() {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return {
      dependencies: packageJson.dependencies || {},
      devDependencies: packageJson.devDependencies || {}
    };
  } catch (error) {
    console.log(`${colors.red}❌ Failed to read package.json: ${error.message}${colors.reset}`);
    return { dependencies: {}, devDependencies: {} };
  }
}

// Function to analyze component dependencies
function analyzeComponentDependencies(componentName) {
  const component = componentDependencies[componentName];
  if (!component) {
    return {
      status: 'unknown',
      message: `Component ${componentName} not found in dependency mapping`,
      dependencies: [],
      conflicts: []
    };
  }

  const currentDeps = getCurrentDependencies();
  const allDeps = { ...currentDeps.dependencies, ...currentDeps.devDependencies };
  
  const missingDeps = [];
  const conflicts = [];
  const updates = [];

  // Check for missing dependencies
  for (const dep of component.dependencies) {
    if (!allDeps[dep]) {
      missingDeps.push(dep);
    }
  }

  // Check for conflicts
  for (const [dep, requiredVersion] of Object.entries(component.conflicts)) {
    if (allDeps[dep]) {
      const currentVersion = allDeps[dep];
      if (currentVersion !== react19Fixes[dep]) {
        conflicts.push({
          package: dep,
          current: currentVersion,
          required: react19Fixes[dep]
        });
        updates.push(dep);
      }
    }
  }

  return {
    status: missingDeps.length === 0 && conflicts.length === 0 ? 'ready' : 'needs-update',
    message: `Component ${componentName} analysis complete`,
    dependencies: component.dependencies,
    missingDeps,
    conflicts,
    updates
  };
}

// Function to install dependencies with React 19 compatibility
function installDependencies(dependencies, options = {}) {
  const { force = false, legacy = true } = options;
  
  console.log(`${colors.blue}📦 Installing dependencies...${colors.reset}`);
  
  try {
    const installCommand = `npm install ${dependencies.join(' ')} ${legacy ? '--legacy-peer-deps' : ''} ${force ? '--force' : ''}`;
    console.log(`   Running: ${installCommand}`);
    
    execSync(installCommand, { 
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

// Function to update conflicting dependencies
function updateConflictingDependencies(conflicts) {
  console.log(`${colors.yellow}⚠️  Updating conflicting dependencies...${colors.reset}`);
  
  for (const conflict of conflicts) {
    console.log(`   Updating ${conflict.package}: ${conflict.current} → ${conflict.required}`);
    
    try {
      execSync(`npm install ${conflict.package}@${conflict.required} --legacy-peer-deps`, {
        stdio: 'inherit',
        cwd: process.cwd()
      });
      console.log(`${colors.green}✅ Updated ${conflict.package}${colors.reset}`);
    } catch (error) {
      console.log(`${colors.red}❌ Failed to update ${conflict.package}: ${error.message}${colors.reset}`);
    }
  }
}

// Function to pre-install all common dependencies
function preInstallCommonDependencies() {
  console.log(`${colors.blue}🔧 Pre-installing common dependencies...${colors.reset}`);
  
  // Get all unique dependencies from all components
  const allDeps = new Set();
  const allConflicts = new Set();
  
  Object.values(componentDependencies).forEach(component => {
    component.dependencies.forEach(dep => allDeps.add(dep));
    Object.keys(component.conflicts).forEach(dep => allConflicts.add(dep));
  });
  
  const commonDeps = Array.from(allDeps);
  const conflictDeps = Array.from(allConflicts);
  
  console.log(`   Common dependencies: ${commonDeps.join(', ')}`);
  console.log(`   Dependencies with conflicts: ${conflictDeps.join(', ')}`);
  
  // Install common dependencies
  if (commonDeps.length > 0) {
    installDependencies(commonDeps, { legacy: true });
  }
  
  // Update conflicting dependencies to React 19 compatible versions
  const conflicts = conflictDeps.map(dep => ({
    package: dep,
    current: 'unknown',
    required: react19Fixes[dep]
  }));
  
  updateConflictingDependencies(conflicts);
}

// Function to analyze all components
function analyzeAllComponents() {
  console.log(`${colors.bright}${colors.cyan}🔍 Analyzing all component dependencies${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);
  
  const results = {};
  let readyCount = 0;
  let needsUpdateCount = 0;
  let unknownCount = 0;
  
  for (const componentName of Object.keys(componentDependencies)) {
    console.log(`${colors.blue}📋 Analyzing ${componentName}...${colors.reset}`);
    const result = analyzeComponentDependencies(componentName);
    results[componentName] = result;
    
    if (result.status === 'ready') {
      console.log(`${colors.green}✅ ${componentName}: Ready${colors.reset}`);
      readyCount++;
    } else if (result.status === 'needs-update') {
      console.log(`${colors.yellow}⚠️  ${componentName}: Needs update${colors.reset}`);
      if (result.missingDeps.length > 0) {
        console.log(`   Missing: ${result.missingDeps.join(', ')}`);
      }
      if (result.conflicts.length > 0) {
        console.log(`   Conflicts: ${result.conflicts.map(c => `${c.package} ${c.current}→${c.required}`).join(', ')}`);
      }
      needsUpdateCount++;
    } else {
      console.log(`${colors.red}❌ ${componentName}: Unknown${colors.reset}`);
      unknownCount++;
    }
    console.log('');
  }
  
  // Summary
  console.log(`${colors.bright}${colors.cyan}📊 Analysis Summary${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`✅ Ready: ${colors.green}${readyCount}${colors.reset} components`);
  console.log(`⚠️  Needs Update: ${colors.yellow}${needsUpdateCount}${colors.reset} components`);
  console.log(`❌ Unknown: ${colors.red}${unknownCount}${colors.reset} components`);
  console.log(`📦 Total: ${Object.keys(componentDependencies).length} components\n`);
  
  return results;
}

// Function to create dependency report
function createDependencyReport() {
  console.log(`${colors.blue}📄 Creating dependency report...${colors.reset}`);
  
  const report = {
    timestamp: new Date().toISOString(),
    reactVersion: '19.1.0',
    componentDependencies,
    react19Fixes,
    currentDependencies: getCurrentDependencies(),
    analysis: analyzeAllComponents()
  };
  
  try {
    fs.writeFileSync('dependency-report.json', JSON.stringify(report, null, 2));
    console.log(`${colors.green}✅ Dependency report created: dependency-report.json${colors.reset}`);
    return true;
  } catch (error) {
    console.log(`${colors.red}❌ Failed to create report: ${error.message}${colors.reset}`);
    return false;
  }
}

// Function to generate installation script
function generateInstallationScript(components) {
  console.log(`${colors.blue}📝 Generating installation script...${colors.reset}`);
  
  const scriptContent = `#!/usr/bin/env node

/**
 * Auto-generated installation script for ${components.join(', ')}
 * Generated by MCP Dependency Analyzer
 */

const { execSync } = require('child_process');

console.log('🚀 Installing components with pre-resolved dependencies...');

// Pre-install common dependencies
const commonDeps = [
  'framer-motion@^11.0.0',
  'lucide-react@^0.542.0',
  'motion@^12.23.12',
  'class-variance-authority@^0.7.1',
  'clsx@^2.1.1',
  'tailwind-merge@^2.6.0'
];

console.log('📦 Installing common dependencies...');
execSync(\`npm install \${commonDeps.join(' ')} --legacy-peer-deps\`, { stdio: 'inherit' });

// Install components
const componentCommands = [
${components.map(comp => `  'npm exec shadcn@latest add ${componentDependencies[comp]?.registry || 'component-url'}'`).join(',\n')}
];

for (const command of componentCommands) {
  console.log(\`🔧 Running: \${command}\`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log('✅ Component installed successfully');
  } catch (error) {
    console.log('❌ Component installation failed');
  }
}

console.log('🎉 Installation complete!');
`;

  try {
    fs.writeFileSync('install-components.js', scriptContent);
    console.log(`${colors.green}✅ Installation script created: install-components.js${colors.reset}`);
    return true;
  } catch (error) {
    console.log(`${colors.red}❌ Failed to create script: ${error.message}${colors.reset}`);
    return false;
  }
}

// Main function
function main() {
  console.log(`${colors.bright}${colors.cyan}🔧 AstroBits Core - MCP Dependency Analyzer${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════${colors.reset}\n`);
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'analyze':
      analyzeAllComponents();
      break;
      
    case 'pre-install':
      preInstallCommonDependencies();
      break;
      
    case 'report':
      createDependencyReport();
      break;
      
    case 'generate-script':
      const components = args.slice(1);
      if (components.length === 0) {
        console.log(`${colors.red}❌ Please specify components to include in script${colors.reset}`);
        return;
      }
      generateInstallationScript(components);
      break;
      
    case 'full-setup':
      console.log(`${colors.blue}🚀 Running full dependency setup...${colors.reset}\n`);
      preInstallCommonDependencies();
      console.log('');
      analyzeAllComponents();
      console.log('');
      createDependencyReport();
      break;
      
    default:
      console.log(`${colors.yellow}Usage:${colors.reset}`);
      console.log(`  node scripts/mcp-dependency-analyzer.js analyze`);
      console.log(`  node scripts/mcp-dependency-analyzer.js pre-install`);
      console.log(`  node scripts/mcp-dependency-analyzer.js report`);
      console.log(`  node scripts/mcp-dependency-analyzer.js generate-script <component1> <component2> ...`);
      console.log(`  node scripts/mcp-dependency-analyzer.js full-setup`);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = {
  analyzeComponentDependencies,
  preInstallCommonDependencies,
  createDependencyReport,
  generateInstallationScript,
  componentDependencies,
  react19Fixes
};
