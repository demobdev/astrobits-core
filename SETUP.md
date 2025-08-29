# 🚀 AstroBits Core - Quick Setup Guide

## Welcome to the Future of Development! 🎉

You've just discovered **AstroBits Core** - the most comprehensive MCP-powered development system ever created. This guide will get you up and running in minutes.

---

## ⚡ Quick Start (5 Minutes)

### 1. **Install Dependencies**
```bash
npm install
```

### 2. **Configure MCP Servers**
```bash
# Copy the MCP configuration to your Cursor setup
cp .mcp-config.example.json ~/.cursor/mcp.json
```

### 3. **Set Up Environment Variables**
```bash
# Copy the environment template
cp env.example .env.local

# Edit .env.local and add your API keys
# (See "Required API Keys" section below)
```

### 4. **Test Your Setup**
```bash
# Run comprehensive health check
npm run mcp:health

# Generate test components
npm run mcp:test
```

### 5. **Start Developing**
```bash
npm run dev
```

---

## 🔑 Required API Keys

### **Essential (Get These First)**
- **GitHub Token**: Required for Shadcn/UI MCP server
  - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
  - Create token with `public_repo` scope

### **Recommended (For Full Experience)**
- **Clerk**: User authentication
  - Sign up at [clerk.com](https://clerk.com)
  - Get publishable and secret keys

- **Supabase**: Database and backend
  - Create project at [supabase.com](https://supabase.com)
  - Get project URL and anon key

- **Stripe**: Payment processing
  - Sign up at [stripe.com](https://stripe.com)
  - Get test secret key

---

## 🎯 Your First Voice-Driven Project

### **Try These Commands in Cursor:**

```bash
# Create a complete SaaS landing page
"Create a SaaS landing page with hero, features, pricing, and contact sections"

# Add authentication
"Add user authentication with Clerk to my app"

# Add payments
"Integrate Stripe checkout for the pricing section"

# Deploy automatically
"Deploy this site to Vercel with bot protection"
```

### **Generate Templates:**
```bash
# SaaS template
npm run template:saas

# E-commerce template
npm run template:ecommerce

# Portfolio template
npm run template:portfolio
```

---

## 🔍 MCP Health Check System

### **Monitor Your Setup:**
```bash
# Check all MCP servers
npm run mcp:health

# Generate test page
npm run mcp:test-page

# Monitor over time
npm run mcp:monitor
```

### **Expected Health Score:**
- **90%+**: Excellent! Ready for production
- **70-89%**: Good! Fix warnings for optimal performance
- **<70%**: Needs attention - check failed servers

---

## 🎨 MCP Server Ecosystem

### **UI Libraries (3/3 working)**
- **Magic UI**: Complex design variants
- **Shadcn/UI**: Backbone components
- **Aceternity UI**: Animations & effects

### **Development Tools (5/5 working)**
- **File System**: Safe file operations
- **Git**: Repository management
- **Memory**: Knowledge graph
- **Context7**: Documentation
- **Fetch**: Web scraping

### **Authentication & Security**
- **Clerk**: User authentication
- **Supabase**: Database & auth
- **Vercel Bot Protection**: Frontend protection

### **External Services**
- **Stripe**: Payment processing
- **Notion**: Knowledge management
- **Browser Tools**: Automation
- **Playwright**: Testing framework

---

## 🚀 Advanced Features

### **Voice-Driven Development**
- Natural language commands
- MCP server chaining
- Automatic fallbacks
- Context-aware development

### **Production Ready**
- Performance monitoring
- SEO optimization
- A/B testing
- Analytics integration

### **Team Collaboration**
- Shared configurations
- Component libraries
- Design systems
- Code review automation

---

## 🎯 Use Cases

### **Rapid Prototyping**
```bash
"Build a complete MVP in minutes"
```

### **Component Libraries**
```bash
"Create a design system with Magic UI and Shadcn/UI"
```

### **Landing Pages**
```bash
"Build high-converting pages with animations"
```

### **E-commerce Sites**
```bash
"Create full online stores with payments"
```

---

## 🚨 Troubleshooting

### **Common Issues:**

**MCP Server Not Working**
```bash
# Check server health
npm run mcp:health

# Restart specific server
npm run mcp:restart --server=magic_ui

# Update all servers
npm run mcp:update
```

**API Key Issues**
```bash
# Verify environment variables
npm run mcp:verify-keys

# Test individual services
npm run mcp:test-stripe
npm run mcp:test-supabase
```

**Performance Issues**
```bash
# Check MCP server performance
npm run mcp:performance

# Optimize configuration
npm run mcp:optimize
```

---

## 📚 Next Steps

### **1. Explore Documentation**
- [Complex MCP Setup](./COMPLEX_MCP_SETUP.md)
- [MCP Development Guide](./MCP_DEVELOPMENT_GUIDE.md)
- [MCP Health Check System](./MCP_HEALTH_CHECK_SYSTEM.md)
- [Voice-Driven MCP System](./VOICE_DRIVEN_MCP_SYSTEM.md)

### **2. Join the Community**
- **Discord**: [AstroBits Community](https://discord.gg/astrobits)
- **Twitter**: [@AstroBitsDev](https://twitter.com/AstroBitsDev)
- **GitHub**: [AstroBits Core](https://github.com/astrobits/core)

### **3. Share Your Creations**
- Showcase your MCP-powered projects
- Contribute new templates
- Add new MCP server integrations

---

## 🎉 You're Ready!

**Congratulations!** You now have the most powerful development environment ever created. 

- **20+ MCP servers** at your fingertips
- **Voice-driven development** workflow
- **Production-ready templates** for any project
- **Health monitoring** and optimization tools

**The future of development is here. Start building! 🚀**

---

*"The future of development isn't about typing faster—it's about thinking out loud and watching your ideas come to life."*
