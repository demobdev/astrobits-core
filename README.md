# 🚀 AstroBits Core - MCP-Powered Development System

> **The development DNA that powers your universe. Voice-driven, MCP-powered development system.**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/demobdev/astrobits-core)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)

Transform your development workflow with the most comprehensive MCP (Model Context Protocol) setup ever created. This project starter combines **Magic UI**, **Shadcn/UI**, **Aceternity UI**, and dozens of other MCP servers to give you **10x development speed**.

## 🌟 What Makes This Special

### **🎯 Complete MCP Ecosystem**
- **20+ MCP servers** pre-configured and tested
- **Voice-driven development** workflow
- **Automatic health checks** and monitoring
- **Production-ready templates** for any project type

### **🚀 Supercharged Development**
- **Build complete websites in minutes** instead of hours
- **AI-powered component generation** with multiple UI libraries
- **Seamless integration** between design and functionality
- **Zero boilerplate** - start coding immediately

### **🛡️ Enterprise-Grade Setup**
- **Authentication** with Clerk/Supabase
- **Payments** with Stripe
- **Database** with Supabase
- **Deployment** with Vercel
- **Monitoring** with Sentry

---

## 🎯 Quick Start

### **1. Clone & Install**
```bash
git clone https://github.com/demobdev/astrobits-core.git
cd astrobits-core
npm install
```

### **2. Configure MCP Servers**
```bash
# Copy the MCP configuration
cp .mcp-config.example.json ~/.cursor/mcp.json

# Add your API keys to .env.local
cp .env.example .env.local
```

### **3. Start Developing**
```bash
npm run dev
```

### **4. Test Your MCP Setup**
```bash
# Run comprehensive health check
npm run mcp:health

# Generate test components
npm run mcp:test
```

---

## 🎨 MCP Server Ecosystem

### **🎯 Core Development Tools**
| Server | Status | Purpose |
|--------|--------|---------|
| **Magic UI** | ✅ Working | Complex design variants |
| **Shadcn/UI** | ✅ Working | Backbone components |
| **Aceternity UI** | ✅ Working | Animations & effects |
| **Context7** | ✅ Working | Real-time documentation |
| **Memory** | ✅ Working | Persistent knowledge graph |

### **🔐 Authentication & Security**
| Server | Status | Purpose |
|--------|--------|---------|
| **Clerk** | ✅ Working | User authentication |
| **Supabase Auth** | ✅ Working | Database authentication |
| **Vercel Bot Protection** | ✅ Working | Frontend protection |

### **💳 Payments & E-commerce**
| Server | Status | Purpose |
|--------|--------|---------|
| **Stripe** | ✅ Working | Payment processing |
| **Supabase** | ✅ Working | Database operations |

### **🔧 Development Tools**
| Server | Status | Purpose |
|--------|--------|---------|
| **File System** | ✅ Working | Safe file operations |
| **Git** | ✅ Working | Repository operations |
| **Browser Tools** | ✅ Working | Browser automation |
| **Playwright** | ✅ Working | Testing framework |

---

## 🎤 Voice-Driven Development

### **Natural Language Commands**
```bash
# Create complete pages
"Create a SaaS landing page with hero, features, pricing, and contact sections"

# Generate components
"Add a contact form with validation and floating animations"

# Integrate services
"Connect the contact form to Supabase and add Stripe payments"

# Deploy automatically
"Deploy the site to Vercel with bot protection"
```

### **MCP Server Chaining**
```bash
# Complex workflows in one command
"Use Magic UI for layout → Shadcn/UI for components → Supabase for data → Stripe for payments"
```

---

## 🏗️ Project Templates

### **SaaS Template**
```bash
npm run template:saas
# Generates: Landing page, authentication, dashboard, payments
```

### **E-commerce Template**
```bash
npm run template:ecommerce
# Generates: Product catalog, shopping cart, checkout, user accounts
```

### **Portfolio Template**
```bash
npm run template:portfolio
# Generates: Project showcase, contact form, blog, animations
```

---

## 🔍 MCP Health Check System

### **Automatic Health Monitoring**
```bash
# Check all MCP servers
npm run mcp:health

# Generate test page
npm run mcp:test-page

# Monitor over time
npm run mcp:monitor
```

### **Health Check Output**
```
🔍 MCP Health Check Report
═══════════════════════════════════════════════════════════════

🎨 UI Libraries (3/3 working)
├── ✅ Magic UI: Hero section generated successfully
├── ✅ Shadcn/UI: Button component created
└── ✅ Aceternity UI: Floating animation applied

🔐 Authentication (2/2 working)
├── ✅ Clerk: User auth working
└── ✅ Supabase Auth: Database connected

💳 Payments & Database (2/2 working)
├── ✅ Stripe: Test mode active
└── ✅ Supabase: Database connected

📊 Overall Health: 100% (7/7 servers working)
```

---

## 🚀 Advanced Features

### **Context-Aware Development**
- **Memory persistence** across projects
- **Smart server selection** based on request type
- **Automatic fallbacks** when servers fail
- **Project-specific configurations**

### **Production Optimization**
- **Performance monitoring** with Sentry
- **SEO optimization** with Context7
- **A/B testing** with browser tools
- **Analytics integration** with Vercel

### **Team Collaboration**
- **Shared MCP configurations**
- **Component library management**
- **Design system consistency**
- **Code review automation**

---

## 📦 Available Scripts

### **Development**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **MCP Management**
```bash
npm run mcp:health   # Check MCP server health
npm run mcp:test     # Generate test components
npm run mcp:update   # Update MCP servers
npm run mcp:reset    # Reset MCP configuration
```

### **Templates**
```bash
npm run template:saas        # Generate SaaS template
npm run template:ecommerce   # Generate e-commerce template
npm run template:portfolio   # Generate portfolio template
npm run template:custom      # Generate custom template
```

---

## 🔧 Configuration

### **Environment Variables**
```env
# Required for MCP servers
GITHUB_TOKEN=your_github_token
STRIPE_SECRET_KEY=sk_test_your_key
NOTION_TOKEN=your_notion_token
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
CLERK_PUBLISHABLE_KEY=pk_test_your_key
CLERK_SECRET_KEY=sk_test_your_key
VERCEL_TOKEN=your_vercel_token
SENTRY_AUTH_TOKEN=your_sentry_token
```

### **MCP Configuration**
```json
{
  "mcpServers": {
    "magic_ui": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic"]
    },
    "shadcn_ui": {
      "command": "npx",
      "args": ["-y", "@jpisnice/shadcn-ui-mcp-server"]
    },
    "aceternity_ui": {
      "command": "npx",
      "args": ["-y", "aceternityui-mcp"]
    }
  }
}
```

---

## 🎯 Use Cases

### **Rapid Prototyping**
```bash
# Build a complete MVP in minutes
"Create a SaaS MVP with authentication, payments, and dashboard"
```

### **Component Libraries**
```bash
# Generate design systems
"Create a complete component library with Magic UI and Shadcn/UI"
```

### **Landing Pages**
```bash
# High-converting pages
"Build a landing page with hero, features, testimonials, and pricing"
```

### **E-commerce Sites**
```bash
# Full online stores
"Create an e-commerce site with product catalog, cart, and checkout"
```

---

## 🚨 Troubleshooting

### **Common Issues**

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

## 📚 Documentation

### **MCP Server Guides**
- [Complex MCP Setup](./COMPLEX_MCP_SETUP.md)
- [MCP Development Guide](./MCP_DEVELOPMENT_GUIDE.md)
- [MCP Health Check System](./MCP_HEALTH_CHECK_SYSTEM.md)
- [Voice-Driven MCP System](./VOICE_DRIVEN_MCP_SYSTEM.md)

### **API References**
- [Magic UI Documentation](https://21st.dev)
- [Shadcn/UI Components](https://ui.shadcn.com)
- [Aceternity UI Components](https://ui.aceternity.com)
- [Context7 Documentation](https://context7.com)

---

## 🤝 Contributing

### **Adding New MCP Servers**
1. Test the server with our health check system
2. Add configuration to `.mcp-config.example.json`
3. Update documentation
4. Create test cases

### **Improving Templates**
1. Create new template in `templates/` directory
2. Add generation script to `package.json`
3. Update documentation
4. Test with health check system

---

## 📈 Roadmap

### **Phase 1: Core System** ✅
- [x] MCP server integration
- [x] Health check system
- [x] Basic templates
- [x] Voice-driven workflow

### **Phase 2: Advanced Features** 🚧
- [ ] AI-powered code generation
- [ ] Advanced analytics
- [ ] Team collaboration tools
- [ ] Performance optimization

### **Phase 3: Enterprise** 📋
- [ ] Multi-tenant support
- [ ] Advanced security
- [ ] Compliance features
- [ ] Enterprise templates

---

## 🎉 Community

### **Join the Revolution**
- **Discord**: [AstroBits Community](https://discord.gg/astrobits)
- **Twitter**: [@AstroBitsDev](https://twitter.com/AstroBitsDev)
- **GitHub**: [AstroBits Core](https://github.com/astrobits/core)

### **Share Your Creations**
- **Showcase**: Share your MCP-powered projects
- **Templates**: Contribute new project templates
- **Servers**: Add new MCP server integrations

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**🚀 Ready to supercharge your development? Start building with AstroBits Core today!**

*"The future of development isn't about typing faster—it's about thinking out loud and watching your ideas come to life."*
