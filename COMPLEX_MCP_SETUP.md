# 🚀 Complex MCP Server Setup Guide

## Overview
This guide walks you through setting up the more complex MCP servers that require API tokens, authentication, and external service configuration.

## 📋 Prerequisites
- Node.js and npm installed
- Git configured
- A code editor (VS Code recommended)
- Command line access

---

## 🔑 1. GitHub Token Setup

### Step 1: Create GitHub Personal Access Token
1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "MCP Development Token"
4. Select these scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
   - `write:packages` (Upload packages to GitHub Package Registry)
   - `delete:packages` (Delete packages from GitHub Package Registry)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Configure Environment Variables
Create a `.env.local` file in your project root:

```bash
# Create the environment file
echo "# GitHub Configuration" > .env.local
echo "GITHUB_TOKEN=your_token_here" >> .env.local
echo "" >> .env.local
```

### Step 3: Test GitHub Integration
```bash
# Test if your token works
curl -H "Authorization: token YOUR_TOKEN_HERE" https://api.github.com/user
```

---

## 🗄️ 2. Supabase Setup

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Choose your organization
5. Enter project details:
   - Name: `my-sales-funnel`
   - Database Password: Generate a strong password
   - Region: Choose closest to you
6. Click "Create new project"

### Step 2: Get Supabase Credentials
1. In your Supabase dashboard, go to Settings > API
2. Copy these values:
   - Project URL
   - Anon public key
   - Service role key (keep this secret!)

### Step 3: Install Supabase CLI
```bash
# Install Supabase CLI globally
npm install -g supabase

# Login to Supabase
supabase login
```

### Step 4: Configure Environment Variables
Add to your `.env.local`:

```bash
# Supabase Configuration
echo "# Supabase Configuration" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=your_project_url" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key" >> .env.local
echo "SUPABASE_SERVICE_ROLE_KEY=your_service_role_key" >> .env.local
echo "" >> .env.local
```

### Step 5: Install Supabase Client
```bash
npm install @supabase/supabase-js
```

---

## 🔐 3. Clerk Authentication Setup

### Step 1: Create Clerk Application
1. Go to [clerk.com](https://clerk.com)
2. Sign up/Login
3. Click "Add application"
4. Choose "Next.js"
5. Enter app name: `my-sales-funnel`
6. Click "Create application"

### Step 2: Get Clerk Keys
1. In your Clerk dashboard, go to API Keys
2. Copy:
   - Publishable Key
   - Secret Key

### Step 3: Configure Environment Variables
Add to your `.env.local`:

```bash
# Clerk Configuration
echo "# Clerk Configuration" >> .env.local
echo "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key" >> .env.local
echo "CLERK_SECRET_KEY=your_secret_key" >> .env.local
echo "" >> .env.local
```

### Step 4: Install Clerk
```bash
npm install @clerk/nextjs
```

---

## 🚀 4. Vercel Deployment Setup

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Link Your Project
```bash
# In your project directory
vercel link
```

### Step 4: Configure Environment Variables in Vercel
```bash
# Add your environment variables to Vercel
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
```

---

## 🧪 5. Testing Your MCP Servers

### Test Script
Create a test script to verify all integrations:

```bash
# Create test script
cat > test-mcp-servers.js << 'EOF'
const { execSync } = require('child_process');

console.log('🧪 Testing MCP Server Integrations...\n');

// Test GitHub
try {
  console.log('🔑 Testing GitHub...');
  const githubUser = execSync('curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user', { encoding: 'utf8' });
  console.log('✅ GitHub: Connected successfully');
} catch (error) {
  console.log('❌ GitHub: Connection failed');
}

// Test Supabase
try {
  console.log('🗄️ Testing Supabase...');
  const { createClient } = require('@supabase/supabase-js');
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  console.log('✅ Supabase: Client created successfully');
} catch (error) {
  console.log('❌ Supabase: Connection failed');
}

// Test Clerk
try {
  console.log('🔐 Testing Clerk...');
  const { clerkClient } = require('@clerk/nextjs/server');
  console.log('✅ Clerk: Client created successfully');
} catch (error) {
  console.log('❌ Clerk: Connection failed');
}

console.log('\n🎉 MCP Server testing complete!');
EOF
```

### Run Tests
```bash
# Make the test script executable
chmod +x test-mcp-servers.js

# Run the tests
node test-mcp-servers.js
```

---

## 🔧 6. MCP Server Configuration

### Create MCP Configuration File
Create `.mcp-config.json`:

```json
{
  "servers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "supabase": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-supabase"],
      "env": {
        "SUPABASE_URL": "${NEXT_PUBLIC_SUPABASE_URL}",
        "SUPABASE_ANON_KEY": "${NEXT_PUBLIC_SUPABASE_ANON_KEY}",
        "SUPABASE_SERVICE_ROLE_KEY": "${SUPABASE_SERVICE_ROLE_KEY}"
      }
    },
    "clerk": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-clerk"],
      "env": {
        "CLERK_PUBLISHABLE_KEY": "${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}",
        "CLERK_SECRET_KEY": "${CLERK_SECRET_KEY}"
      }
    },
    "vercel": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-vercel"],
      "env": {
        "VERCEL_TOKEN": "${VERCEL_TOKEN}"
      }
    }
  }
}
```

---

## 🚨 Troubleshooting

### Common Issues:

1. **GitHub Token Not Working**
   ```bash
   # Check if token is valid
   curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user
   ```

2. **Supabase Connection Failed**
   ```bash
   # Check environment variables
   echo $NEXT_PUBLIC_SUPABASE_URL
   echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

3. **Clerk Not Loading**
   ```bash
   # Verify keys are correct
   echo $NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   ```

4. **Vercel Deployment Issues**
   ```bash
   # Check Vercel status
   vercel status
   ```

---

## 🎯 Next Steps

Once all servers are configured:

1. **Test each MCP server** using the test script
2. **Create your first voice-driven component** using the integrated services
3. **Deploy your application** to Vercel
4. **Set up CI/CD** with GitHub Actions

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set correctly
3. Ensure all API tokens have the correct permissions
4. Test each service individually before integrating

---

**🎉 Congratulations! You now have a fully configured MCP development environment with all the complex servers ready for voice-driven development!**
