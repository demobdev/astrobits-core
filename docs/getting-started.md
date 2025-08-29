# 🚀 Getting Started with AstroBits Core

> **The development DNA that powers your universe**

AstroBits Core is a comprehensive MCP-powered development system that supercharges your workflow with voice-driven development and 20+ integrated servers. This guide will get you up and running in minutes.

## 🌟 What is AstroBits Core?

AstroBits Core is more than just a project starter—it's a complete development ecosystem that combines:

- **🎤 Voice-Driven Development**: Natural language commands that translate directly into code
- **🔧 20+ MCP Servers**: Pre-configured and tested Model Context Protocol integrations
- **🎨 Multiple UI Libraries**: Magic UI, Shadcn/UI, Aceternity UI, and Radix UI
- **🛡️ Enterprise Services**: Authentication, payments, database, deployment, and monitoring
- **⚡ 10x Development Speed**: Build complete applications in minutes, not hours

### **Why AstroBits Core?**

- **Zero Boilerplate**: Start coding immediately with pre-configured everything
- **AI-Powered Workflow**: Leverage MCP for intelligent code generation
- **Production Ready**: Built with enterprise-grade services and best practices
- **Future-Proof**: Latest React 19, Next.js 15, and cutting-edge technologies

## 📦 Installation

### **Prerequisites**

- Node.js 18+ 
- npm or yarn
- Git
- Cursor IDE (recommended for MCP integration)

### **Quick Install**

Choose your preferred installation method:

#### **Option 1: Clone Repository**
```bash
git clone https://github.com/demobdev/astrobits-core.git
cd astrobits-core
npm install
```

#### **Option 2: NPM Create (Coming Soon)**
```bash
npm create astrobits-core@latest
```

#### **Option 3: Download ZIP**
1. Visit [https://github.com/demobdev/astrobits-core](https://github.com/demobdev/astrobits-core)
2. Click "Code" → "Download ZIP"
3. Extract and run `npm install`

## ⚡ Quick Start

### **1. Environment Setup**

Copy the environment template and configure your services:

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your API keys
nano .env.local
```

### **2. MCP Configuration**

Set up Model Context Protocol for voice-driven development:

```bash
# Copy MCP configuration
cp .mcp-config.example.json ~/.cursor/mcp.json

# Or manually configure in Cursor:
# Settings → MCP → Add Configuration
```

### **3. Start Development Server**

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`

### **4. Test Your Setup**

Run the comprehensive health check:

```bash
# Test all MCP servers
npm run mcp:health

# Test UI components
npm run mcp:test

# Test specific services
npm run mcp:test-shadcn
npm run mcp:test-aceternity
```

## 🏗️ Project Structure

```
astrobits-core/
├── 📁 app/                          # Next.js App Router
│   ├── 📄 layout.tsx               # Root layout with providers
│   ├── 📄 page.tsx                 # Home page
│   ├── 📁 docs/                    # Documentation pages
│   ├── 📁 test-*/                  # Component test pages
│   └── 📁 api/                     # API routes
├── 📁 components/                   # React components
│   ├── 📁 ui/                      # Shadcn UI components
│   ├── 📄 AstroBitsSidebar.tsx     # Documentation sidebar
│   ├── 📄 DocsLayout.tsx           # Documentation layout
│   └── 📄 GetStartedModal.tsx      # Get started modal
├── 📁 lib/                         # Utility libraries
│   ├── 📄 supabase.ts              # Supabase client
│   └── 📄 utils.ts                 # Utility functions
├── 📁 scripts/                     # Automation scripts
│   ├── 📄 mcp-health-check.js      # MCP server health check
│   ├── 📄 mcp-setup-*.js           # Service setup scripts
│   └── 📄 setup-env.js             # Environment setup
├── 📁 public/                      # Static assets
│   ├── 📄 astrobits-icon-*.png     # Brand assets
│   └── 📄 favicon.ico              # Favicon
├── 📄 .mcp.json                    # MCP configuration
├── 📄 .env.example                 # Environment template
├── 📄 package.json                 # Dependencies and scripts
└── 📄 README.md                    # Project documentation
```

### **Key Directories Explained**

#### **📁 app/**
Next.js 15 App Router with file-based routing:
- `layout.tsx`: Root layout with authentication providers
- `page.tsx`: Main landing page
- `docs/`: Documentation pages using DocsLayout
- `test-*/`: Component testing pages for each UI library

#### **📁 components/**
React components organized by purpose:
- `ui/`: Shadcn UI components (auto-generated)
- `AstroBitsSidebar.tsx`: Documentation navigation
- `DocsLayout.tsx`: Documentation page wrapper
- `GetStartedModal.tsx`: Installation modal

#### **📁 scripts/**
Automation and setup scripts:
- `mcp-health-check.js`: Comprehensive MCP server testing
- `mcp-setup-*.js`: Service-specific setup automation
- `setup-env.js`: Environment variable configuration

#### **📁 lib/**
Utility libraries and configurations:
- `supabase.ts`: Supabase client with SSR support
- `utils.ts`: Common utility functions

## 🔧 Available Scripts

### **Development**
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### **MCP Integration**
```bash
npm run mcp:health       # Test all MCP servers
npm run mcp:test         # Test UI components
npm run mcp:test-shadcn  # Test Shadcn/UI
npm run mcp:test-aceternity # Test Aceternity UI
```

### **Service Setup**
```bash
npm run mcp:setup-supabase    # Setup Supabase
npm run mcp:setup-clerk       # Setup Clerk
npm run mcp:setup-navbar      # Setup navigation
npm run mcp:setup-docs-layout # Setup documentation layout
```

### **Component Installation**
```bash
npm run mcp:install-aceternity        # Install Aceternity UI
npm run mcp:install-aceternity-enhanced # Install with dependencies
npm run mcp:dependency-analyzer       # Analyze dependencies
```

## 🎯 Next Steps

1. **Explore the Documentation**: Visit `/docs` to see the full documentation
2. **Test Components**: Try the test pages for each UI library
3. **Configure Services**: Set up your API keys and test integrations
4. **Build Something**: Start building your next project with AstroBits Core

## 🆘 Need Help?

- **Documentation**: Check the `/docs` section
- **Issues**: Report bugs on [GitHub](https://github.com/demobdev/astrobits-core/issues)
- **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/demobdev/astrobits-core/discussions)

---

**Ready to supercharge your development?** 🚀

Start building with AstroBits Core today and experience the future of voice-driven development!
