#!/usr/bin/env node

/**
 * Script to update GitHub URLs in the project
 * Run this when you're ready to publish to GitHub
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  currentUsername: 'demobdev', // Update this to your GitHub username
  repoName: 'astrobits-core',
  npmPackageName: 'astrobits-core'
};

const githubRepo = `https://github.com/${config.currentUsername}/${config.repoName}`;
const gitClone = `git clone ${githubRepo}.git`;
const npmInstall = `npm create ${config.npmPackageName}@latest`;

console.log('🚀 Updating GitHub URLs in AstroBits Core...\n');

// Files to update
const filesToUpdate = [
  {
    path: 'components/GetStartedModal.tsx',
    patterns: [
      {
        search: /const githubRepo = "https:\/\/github\.com\/[^"]+"/,
        replace: `const githubRepo = "${githubRepo}"`
      },
      {
        search: /const gitClone = "git clone https:\/\/github\.com\/[^"]+"/,
        replace: `const gitClone = "${gitClone}"`
      },
      {
        search: /const npmInstall = "npm create [^"]+"/,
        replace: `const npmInstall = "${npmInstall}"`
      }
    ]
  },
  {
    path: 'README.md',
    patterns: [
      {
        search: /https:\/\/github\.com\/[^\/]+\/[^\/]+/g,
        replace: githubRepo
      }
    ]
  }
];

// Update files
filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file.path);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    file.patterns.forEach(pattern => {
      if (pattern.search.test(content)) {
        content = content.replace(pattern.search, pattern.replace);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated ${file.path}`);
    } else {
      console.log(`⚠️  No changes needed in ${file.path}`);
    }
  } else {
    console.log(`❌ File not found: ${file.path}`);
  }
});

console.log('\n🎉 GitHub URL update complete!');
console.log('\n📋 Updated URLs:');
console.log(`   Repository: ${githubRepo}`);
console.log(`   Clone: ${gitClone}`);
console.log(`   NPM: ${npmInstall}`);
console.log('\n💡 Remember to:');
console.log('   1. Create the GitHub repository');
console.log('   2. Push your code to GitHub');
console.log('   3. Publish to npm (if applicable)');
console.log('   4. Update any other references in your documentation');
