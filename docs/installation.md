# 📦 Installation Guide

> **Get AstroBits Core up and running in minutes**

This guide will walk you through installing and configuring AstroBits Core on your system.

## 🎯 Prerequisites

Before you begin, ensure you have the following installed:

### **Required Software**
- **Node.js 18+**: [Download here](https://nodejs.org/)
- **npm or yarn**: Comes with Node.js
- **Git**: [Download here](https://git-scm.com/)
- **Cursor IDE**: [Download here](https://cursor.sh/) (recommended for MCP integration)

### **System Requirements**
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **Memory**: 8GB RAM minimum (16GB recommended)
- **Storage**: 2GB free space
- **Network**: Internet connection for package downloads

### **Verify Installation**
```bash
# Check Node.js version
node --version  # Should be 18.0.0 or higher

# Check npm version
npm --version   # Should be 8.0.0 or higher

# Check Git version
git --version   # Should be 2.0.0 or higher
```

## 🚀 Installation Methods

### **Method 1: Clone Repository (Recommended)**

This is the most straightforward method for development and customization:

```bash
# Clone the repository
git clone https://github.com/demobdev/astrobits-core.git

# Navigate to the project directory
cd astrobits-core

# Install dependencies
npm install
```

### **Method 2: Download ZIP**

If you prefer not to use Git:

1. Visit [https://github.com/demobdev/astrobits-core](https://github.com/demobdev/astrobits-core)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Open terminal/command prompt in the extracted folder
6. Run `npm install`

### **Method 3: NPM Create (Coming Soon)**

```bash
npm create astrobits-core@latest
```

## ⚙️ Configuration

### **1. Environment Setup**

Copy the environment template and configure your services:

```bash
# Copy the environment template
cp .env.example .env.local

# Edit the file with your API keys
nano .env.local  # or use your preferred editor
```

### **2. Required Environment Variables**

At minimum, you'll need to configure:

```bash
# Supabase (Database & Auth)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Optional but recommended
SENTRY_DSN=your_sentry_dsn
CONTEXT7_API_KEY=your_context7_key
MEMORY_MCP_URL=your_memory_mcp_url
```

### **3. MCP Configuration**

Set up Model Context Protocol for voice-driven development:

#### **Option A: Copy Configuration File**
```bash
# Copy the MCP configuration
cp .mcp-config.example.json ~/.cursor/mcp.json
```

#### **Option B: Manual Configuration in Cursor**
1. Open Cursor IDE
2. Go to Settings (Ctrl/Cmd + ,)
3. Navigate to "MCP" section
4. Click "Add Configuration"
5. Import the `.mcp-config.example.json` file

## 🧪 Testing Your Installation

### **1. Start the Development Server**

```bash
npm run dev
```

Your application should be available at `http://localhost:3000`

### **2. Run Health Checks**

Test all MCP servers and integrations:

```bash
# Comprehensive health check
npm run mcp:health

# Test UI components
npm run mcp:test

# Test specific services
npm run mcp:test-shadcn
npm run mcp:test-aceternity
```

### **3. Verify Components**

Visit these test pages in your browser:
- `http://localhost:3000/test-shadcn` - Shadcn/UI components
- `http://localhost:3000/test-aceternity` - Aceternity UI components
- `http://localhost:3000/test-navbar` - Navigation components

## 🔧 Troubleshooting

### **Common Issues**

#### **Port Already in Use**
```bash
# Kill processes on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

#### **Node Version Issues**
```bash
# Use nvm to switch Node versions
nvm use 18

# Or install the correct version
nvm install 18
nvm use 18
```

#### **Permission Errors**
```bash
# On Linux/macOS, fix permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

#### **MCP Connection Issues**
```bash
# Check MCP configuration
cat ~/.cursor/mcp.json

# Restart Cursor IDE
# Clear MCP cache if needed
```

### **Getting Help**

If you encounter issues:

1. **Check the logs**: Look for error messages in the terminal
2. **Verify prerequisites**: Ensure all required software is installed
3. **Check environment**: Verify your `.env.local` file is configured
4. **Search issues**: Check [GitHub Issues](https://github.com/demobdev/astrobits-core/issues)
5. **Ask for help**: Create a new issue with detailed information

## 🎯 Next Steps

After successful installation:

1. **Explore the Documentation**: Visit `/docs` to learn more
2. **Configure Services**: Set up your API keys and test integrations
3. **Build Something**: Start creating your first application
4. **Join the Community**: Connect with other developers

## 📋 Installation Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Repository cloned/downloaded
- [ ] Dependencies installed (`npm install`)
- [ ] Environment file created (`.env.local`)
- [ ] MCP configuration set up
- [ ] Development server running (`npm run dev`)
- [ ] Health checks passing (`npm run mcp:health`)
- [ ] Test pages accessible

---

**🎉 Congratulations!** You've successfully installed AstroBits Core.

Ready to start building? Check out the [Quick Start Guide](./quick-start.md) to create your first application!
