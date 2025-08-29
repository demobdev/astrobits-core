const fs = require('fs');
const path = require('path');

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

function createEnvFile() {
  log('🚀 Setting up environment variables for AstroBits Core', 'blue');
  
  const envContent = `# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2luY2VyZS1vc3ByZXktMzcuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_8KF1XH5C2Q35wlhLwC7Fw4e0tgV5atXrlDbaYQSmq8

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here

# Notion Configuration
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here

# Sentry Configuration
SENTRY_DSN=your_sentry_dsn_here

# Vercel Configuration
VERCEL_TOKEN=your_vercel_token_here

# GitHub Configuration
GITHUB_TOKEN=your_github_token_here

# Context7 Configuration
CONTEXT7_API_KEY=your_context7_api_key_here

# Memory MCP Configuration
MEMORY_MCP_URL=your_memory_mcp_url_here
`;

  const envPath = path.join(process.cwd(), '.env.local');
  
  try {
    fs.writeFileSync(envPath, envContent);
    log('✅ Environment file created at .env.local', 'green');
    log('📝 Clerk test keys have been added automatically', 'green');
    log('🔧 Update other keys as needed for full functionality', 'yellow');
  } catch (error) {
    log(`❌ Failed to create environment file: ${error.message}`, 'red');
  }
}

createEnvFile();
