# AstroBits Core - Dependency Management System

## Overview

The Dependency Management System is a comprehensive solution for handling component dependencies across multiple UI libraries (Aceternity UI, Shadcn/UI, Radix UI, Magic UI) while ensuring React 19 compatibility and preventing installation conflicts.

## The Problem

Different UI components have varying dependency requirements:

- **Simple cards**: May only need `clsx` and `tailwind-merge`
- **3D cards**: Require `motion`, `framer-motion`, and `lucide-react`
- **Animated components**: Need `framer-motion` and specific icon libraries
- **Complex layouts**: May require multiple animation and styling libraries

Each component can have its own dependency tree, and conflicts arise when:
1. Different components require different versions of the same package
2. React 19 compatibility issues with older dependencies
3. Peer dependency conflicts during installation

## The Solution

### 1. Component Dependency Mapping

The system maintains a comprehensive mapping of all component dependencies:

```javascript
const componentDependencies = {
  'text-reveal-card': {
    dependencies: ['motion', 'framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0', // Old version conflicts with React 19
      'motion': '^12.0.0' // Needs specific version
    }
  },
  'focus-cards': {
    dependencies: ['framer-motion', 'lucide-react'],
    peerDependencies: ['react', 'react-dom'],
    conflicts: {
      'lucide-react': '^0.300.0'
    }
  }
  // ... more components
};
```

### 2. React 19 Compatibility Fixes

Pre-defined fixes for React 19 compatibility:

```javascript
const react19Fixes = {
  'lucide-react': '^0.542.0', // Latest version compatible with React 19
  'motion': '^12.23.12', // Latest version
  'framer-motion': '^11.0.0', // Latest version
  'class-variance-authority': '^0.7.1', // Latest version
  'clsx': '^2.1.1', // Latest version
  'tailwind-merge': '^2.6.0' // Latest version
};
```

### 3. Pre-Installation Analysis

Before installing any component, the system:

1. **Analyzes current dependencies** in package.json
2. **Identifies missing dependencies** for the target component
3. **Detects version conflicts** with React 19
4. **Pre-installs common dependencies** to prevent conflicts
5. **Updates conflicting packages** to compatible versions

## Usage

### Basic Analysis

```bash
# Analyze all component dependencies
npm run mcp:dependency-analyzer analyze

# Pre-install common dependencies
npm run mcp:dependency-analyzer pre-install

# Generate dependency report
npm run mcp:dependency-analyzer report

# Full setup (pre-install + analyze + report)
npm run mcp:dependency-analyzer full-setup
```

### Component-Specific Analysis

```javascript
const { analyzeComponentDependencies } = require('./scripts/mcp-dependency-analyzer');

// Analyze a specific component
const result = analyzeComponentDependencies('text-reveal-card');
console.log(result);
// Output:
// {
//   status: 'ready' | 'needs-update' | 'unknown',
//   message: 'Component text-reveal-card analysis complete',
//   dependencies: ['motion', 'framer-motion', 'lucide-react'],
//   missingDeps: [],
//   conflicts: [],
//   updates: []
// }
```

### Generating Installation Scripts

```bash
# Generate installation script for specific components
npm run mcp:dependency-analyzer generate-script text-reveal-card focus-cards hero-section-demo-1
```

This creates `install-components.js` with pre-resolved dependencies:

```javascript
// Auto-generated installation script
const commonDeps = [
  'framer-motion@^11.0.0',
  'lucide-react@^0.542.0',
  'motion@^12.23.12',
  'class-variance-authority@^0.7.1',
  'clsx@^2.1.1',
  'tailwind-merge@^2.6.0'
];

// Pre-install dependencies
execSync(`npm install ${commonDeps.join(' ')} --legacy-peer-deps`);

// Install components
const componentCommands = [
  'npm exec shadcn@latest add https://ui.aceternity.com/registry/text-reveal-card.json',
  'npm exec shadcn@latest add https://ui.aceternity.com/registry/focus-cards.json',
  'npm exec shadcn@latest add https://ui.aceternity.com/registry/hero-section-demo-1.json'
];
```

## Integration with MCP System

### 1. Health Check Integration

The MCP health check system uses the dependency analyzer:

```javascript
function testAceternityUI() {
  const { analyzeComponentDependencies } = require('./mcp-dependency-analyzer');
  
  const textRevealCard = analyzeComponentDependencies('text-reveal-card');
  const focusCards = analyzeComponentDependencies('focus-cards');
  
  if (textRevealCard.status === 'ready' && focusCards.status === 'ready') {
    return { status: 'working', message: 'All Aceternity UI components ready' };
  }
  
  return { status: 'failed', message: 'Dependency conflicts detected' };
}
```

### 2. Automated Installation

The Aceternity UI installation script uses the dependency analyzer:

```javascript
const { preInstallCommonDependencies } = require('./mcp-dependency-analyzer');

async function installAceternityUI() {
  // Step 1: Pre-install dependencies
  preInstallCommonDependencies();
  
  // Step 2: Install components (now guaranteed to work)
  for (const component of aceternityComponents) {
    await installComponent(component);
  }
}
```

## Dependency Categories

### Core Dependencies
- **`clsx`**: Class name utility
- **`tailwind-merge`**: Tailwind CSS class merging
- **`class-variance-authority`**: Component variant management

### Animation Dependencies
- **`framer-motion`**: Animation library
- **`motion`**: Motion One library (used by some Aceternity components)

### Icon Dependencies
- **`lucide-react`**: Icon library (requires React 19 compatible version)

### Radix UI Dependencies
- **`@radix-ui/react-*`**: Various Radix UI primitives

## Conflict Resolution Strategies

### 1. Version Conflicts
```javascript
// Before: lucide-react@^0.300.0 (incompatible with React 19)
// After: lucide-react@^0.542.0 (React 19 compatible)
```

### 2. Peer Dependency Conflicts
```bash
# Use --legacy-peer-deps for React 19 compatibility
npm install lucide-react@^0.542.0 --legacy-peer-deps
```

### 3. Missing Dependencies
```javascript
// Pre-install all common dependencies
const commonDeps = ['framer-motion', 'lucide-react', 'motion'];
installDependencies(commonDeps, { legacy: true });
```

## Best Practices

### 1. Always Pre-Analyze
```bash
# Before installing any component
npm run mcp:dependency-analyzer analyze
```

### 2. Use Pre-Installation
```bash
# Pre-install common dependencies
npm run mcp:dependency-analyzer pre-install
```

### 3. Generate Installation Scripts
```bash
# For complex component combinations
npm run mcp:dependency-analyzer generate-script component1 component2
```

### 4. Monitor Health
```bash
# Regular health checks
npm run mcp:health
```

## Troubleshooting

### Common Issues

1. **"npm error ERESOLVE"**
   - Solution: Use `--legacy-peer-deps` flag
   - Prevention: Pre-install dependencies

2. **"Component not found"**
   - Solution: Check component name in dependency mapping
   - Prevention: Use dependency analyzer

3. **"Export doesn't exist"**
   - Solution: Check actual export name in component file
   - Prevention: Use MCP tools to get component info

### Debugging Commands

```bash
# Check current dependencies
npm list lucide-react motion framer-motion

# Analyze specific component
node scripts/mcp-dependency-analyzer.js analyze

# Generate detailed report
npm run mcp:dependency-analyzer report

# Check component exports
cat components/hero-section-demo-1.tsx | head -10
```

## Future Enhancements

### 1. Dynamic Dependency Discovery
- Automatically detect component dependencies from registry
- Update dependency mapping based on component versions

### 2. Version Compatibility Matrix
- Maintain compatibility matrix for different React versions
- Auto-update fixes based on React version

### 3. Conflict Prediction
- Predict conflicts before they occur
- Suggest alternative components with fewer conflicts

### 4. Automated Testing
- Test component installation in isolated environments
- Validate component functionality after installation

## Conclusion

The Dependency Management System provides a robust foundation for handling complex component dependencies across multiple UI libraries. By pre-analyzing dependencies, pre-installing common packages, and resolving conflicts proactively, it ensures smooth component installation and prevents the common issues that arise when integrating diverse UI libraries.

This system is essential for maintaining the reliability and scalability of the AstroBits Core MCP-powered development environment.
