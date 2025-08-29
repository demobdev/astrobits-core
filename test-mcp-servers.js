const { execSync } = require('child_process');
require('dotenv').config({ path: '.env.local' });

console.log('🧪 Testing MCP Server Integrations...\n');

// Test GitHub
try {
  console.log('🔑 Testing GitHub...');
  if (process.env.GITHUB_TOKEN) {
    const githubUser = execSync(`curl -s -H "Authorization: token ${process.env.GITHUB_TOKEN}" https://api.github.com/user`, { encoding: 'utf8' });
    const userData = JSON.parse(githubUser);
    console.log(`✅ GitHub: Connected successfully as ${userData.login}`);
  } else {
    console.log('❌ GitHub: No token found in environment');
  }
} catch (error) {
  console.log('❌ GitHub: Connection failed -', error.message);
}

// Test Supabase
try {
  console.log('🗄️ Testing Supabase...');
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.log('✅ Supabase: Environment variables configured');
    console.log(`   URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 30)}...`);
  } else {
    console.log('❌ Supabase: Missing environment variables');
  }
} catch (error) {
  console.log('❌ Supabase: Configuration failed -', error.message);
}

// Test Clerk
try {
  console.log('🔐 Testing Clerk...');
  if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY) {
    console.log('✅ Clerk: Environment variables configured');
    console.log(`   Publishable Key: ${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.substring(0, 20)}...`);
  } else {
    console.log('❌ Clerk: Missing environment variables');
  }
} catch (error) {
  console.log('❌ Clerk: Configuration failed -', error.message);
}

// Test Vercel
try {
  console.log('🚀 Testing Vercel...');
  const vercelVersion = execSync('vercel --version', { encoding: 'utf8' });
  console.log(`✅ Vercel: CLI installed (${vercelVersion.trim()})`);
} catch (error) {
  console.log('❌ Vercel: CLI not installed or not in PATH');
}

console.log('\n📊 Summary:');
console.log('==================');
console.log('🔑 GitHub: ' + (process.env.GITHUB_TOKEN ? '✅ Configured' : '❌ Not configured'));
console.log('🗄️ Supabase: ' + (process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Configured' : '❌ Not configured'));
console.log('🔐 Clerk: ' + (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? '✅ Configured' : '❌ Not configured'));
console.log('🚀 Vercel: ' + (process.env.VERCEL_TOKEN ? '✅ Configured' : '❌ Not configured'));

console.log('\n🎉 MCP Server testing complete!');
console.log('\n💡 Next steps:');
console.log('1. Follow the setup guide in COMPLEX_MCP_SETUP.md');
console.log('2. Add your API tokens to .env.local');
console.log('3. Run this test again to verify all connections');
