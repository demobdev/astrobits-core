const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/docs/api/config/page.tsx',
  'app/docs/auth/middleware/page.tsx',
  'app/docs/scripts/setup/page.tsx',
  'app/docs/services/notion/page.tsx'
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix duplicate imports
    content = content.replace(
      /import \{ ([^}]+), ([^}]+), ([^}]+), \2 \} from "lucide-react"/g,
      'import { $1, $2, $3 } from "lucide-react"'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed duplicate imports in: ${filePath}`);
  }
});

console.log('All duplicate imports fixed!');
