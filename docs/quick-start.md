# ⚡ Quick Start Guide

> **Get AstroBits Core running in under 5 minutes**

This quick start guide will have you up and running with AstroBits Core in minutes, not hours.

## 🚀 5-Minute Setup

### **Step 1: Clone & Install (1 minute)**

```bash
# Clone the repository
git clone https://github.com/demobdev/astrobits-core.git

# Navigate to the project
cd astrobits-core

# Install dependencies
npm install
```

### **Step 2: Environment Setup (1 minute)**

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your API keys (or skip for now)
nano .env.local
```

**Minimum required for basic functionality:**
```bash
# Add these to .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### **Step 3: Start Development (30 seconds)**

```bash
npm run dev
```

Your app is now running at `http://localhost:3000`! 🎉

### **Step 4: Test Your Setup (1 minute)**

```bash
# Test all MCP servers
npm run mcp:health

# Test UI components
npm run mcp:test
```

### **Step 5: Explore (1 minute)**

Visit these pages to see AstroBits Core in action:
- **Home**: `http://localhost:3000` - Main landing page
- **Documentation**: `http://localhost:3000/docs` - Full documentation
- **Shadcn/UI Test**: `http://localhost:3000/test-shadcn` - UI components
- **Aceternity UI Test**: `http://localhost:3000/test-aceternity` - Advanced components

## 🎯 What You Get

### **✅ Working Features**
- **Documentation Site**: Professional docs with sidebar navigation
- **UI Components**: Shadcn/UI and Aceternity UI components
- **Authentication**: Clerk and Supabase auth ready
- **Database**: Supabase integration configured
- **MCP Integration**: Voice-driven development setup
- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Automatic theme switching

### **🔧 Ready-to-Use Scripts**
```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server

# MCP Integration
npm run mcp:health       # Test all MCP servers
npm run mcp:test         # Test UI components

# Service Setup
npm run mcp:setup-supabase    # Setup Supabase
npm run mcp:setup-clerk       # Setup Clerk
npm run mcp:setup-docs-layout # Setup documentation layout
```

## 🎨 Your First Customization

### **Add a New Page**

1. **Create a new page**:
   ```bash
   mkdir app/my-page
   touch app/my-page/page.tsx
   ```

2. **Add content**:
   ```tsx
   // app/my-page/page.tsx
   import DocsLayout from "@/components/DocsLayout"
   
   export default function MyPage() {
     return (
       <DocsLayout
         title="My Custom Page"
         breadcrumbs={[
           { title: "Home", href: "/" },
           { title: "My Page", href: "/my-page" }
         ]}
       >
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold mb-6">My Custom Page</h1>
           <p className="text-lg text-muted-foreground">
             This is my first custom page with AstroBits Core!
           </p>
         </div>
       </DocsLayout>
     )
   }
   ```

3. **Add to sidebar** (optional):
   Edit `components/AstroBitsSidebar.tsx` to add navigation.

### **Add a New Component**

1. **Create component**:
   ```bash
   touch components/MyComponent.tsx
   ```

2. **Add content**:
   ```tsx
   // components/MyComponent.tsx
   "use client"
   
   import { Button } from "@/components/ui/button"
   
   export function MyComponent() {
     return (
       <div className="p-6 border rounded-lg">
         <h2 className="text-2xl font-bold mb-4">My Component</h2>
         <Button>Click me!</Button>
       </div>
     )
   }
   ```

3. **Use in your page**:
   ```tsx
   import { MyComponent } from "@/components/MyComponent"
   
   // Add to your page
   <MyComponent />
   ```

## 🔧 Next Steps

### **Configure Services**

1. **Supabase Setup**:
   ```bash
   npm run mcp:setup-supabase
   ```

2. **Clerk Setup**:
   ```bash
   npm run mcp:setup-clerk
   ```

3. **Add More UI Components**:
   ```bash
   npm run mcp:install-aceternity
   ```

### **Learn More**

- **📖 Full Documentation**: Visit `/docs` for comprehensive guides
- **🎨 UI Libraries**: Explore Shadcn/UI and Aceternity UI
- **🔧 MCP Integration**: Learn voice-driven development
- **🛡️ Authentication**: Set up user management
- **💳 Payments**: Integrate Stripe payments

### **Build Something**

Ready to build your first app?

1. **SaaS Application**: User auth + payments + dashboard
2. **E-commerce Site**: Product catalog + checkout + orders
3. **Content Platform**: Blog + CMS + user management
4. **Dashboard**: Analytics + charts + real-time data

## 🆘 Need Help?

### **Common Issues**

**Port 3000 in use**:
```bash
npm run dev -- -p 3001
```

**Environment variables not working**:
```bash
# Restart the dev server
npm run dev
```

**MCP not connecting**:
```bash
# Check configuration
cat ~/.cursor/mcp.json
```

### **Getting Support**

- **📚 Documentation**: Check `/docs` first
- **🐛 Issues**: [GitHub Issues](https://github.com/demobdev/astrobits-core/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/demobdev/astrobits-core/discussions)
- **📧 Contact**: Create an issue for help

## 🎉 Congratulations!

You've successfully set up AstroBits Core and are ready to build amazing applications with voice-driven development!

**What's next?**
- Explore the documentation
- Try the test pages
- Build your first feature
- Share your experience

---

**Ready to supercharge your development?** 🚀

Start building with AstroBits Core today!
