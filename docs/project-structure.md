# 🏗️ Project Structure

> **Understanding the AstroBits Core codebase organization**

This guide explains the structure and organization of the AstroBits Core project, helping you navigate and understand the codebase.

## 📁 Root Directory

```
astrobits-core/
├── 📁 app/                    # Next.js App Router
├── 📁 components/             # React components
├── 📁 lib/                    # Utility libraries
├── 📁 scripts/                # Automation scripts
├── 📁 public/                 # Static assets
├── 📁 docs/                   # Documentation
├── 📄 .mcp.json              # MCP configuration
├── 📄 .env.example           # Environment template
├── 📄 package.json           # Dependencies and scripts
├── 📄 README.md              # Project documentation
├── 📄 tailwind.config.ts     # Tailwind CSS configuration
├── 📄 next.config.js         # Next.js configuration
├── 📄 tsconfig.json          # TypeScript configuration
└── 📄 postcss.config.mjs     # PostCSS configuration
```

## 📁 app/ - Next.js App Router

The `app/` directory contains all the pages and API routes using Next.js 15 App Router.

```
app/
├── 📄 layout.tsx              # Root layout with providers
├── 📄 page.tsx                # Home page
├── 📄 globals.css             # Global styles
├── 📁 docs/                   # Documentation pages
│   ├── 📄 page.tsx            # Documentation home
│   ├── 📄 getting-started.md  # Getting started guide
│   ├── 📄 introduction.md     # Introduction page
│   ├── 📄 installation.md     # Installation guide
│   └── 📄 project-structure.md # This file
├── 📁 test-shadcn/            # Shadcn/UI test page
│   └── 📄 page.tsx
├── 📁 test-aceternity/        # Aceternity UI test page
│   └── 📄 page.tsx
├── 📁 test-navbar/            # Navigation test page
│   └── 📄 page.tsx
├── 📁 test-supabase/          # Supabase test page
│   └── 📄 page.tsx
├── 📁 test-clerk/             # Clerk test page
│   └── 📄 page.tsx
└── 📁 api/                    # API routes
    └── 📁 auth/               # Authentication endpoints
```

### **Key Files Explained**

#### **📄 layout.tsx**
Root layout that wraps all pages with:
- Authentication providers (Clerk, Supabase)
- Global styles and fonts
- Metadata configuration
- Error boundaries

#### **📄 page.tsx**
Main landing page featuring:
- AstroBits Core branding
- Feature showcase
- Get Started modal
- Documentation links

#### **📄 globals.css**
Global styles including:
- Tailwind CSS imports
- CSS variables for theming
- Custom utility classes
- Dark/light mode support

## 📁 components/ - React Components

Organized by purpose and functionality:

```
components/
├── 📁 ui/                     # Shadcn UI components
│   ├── 📄 button.tsx         # Button component
│   ├── 📄 card.tsx           # Card component
│   ├── 📄 dialog.tsx         # Dialog component
│   ├── 📄 input.tsx          # Input component
│   ├── 📄 label.tsx          # Label component
│   ├── 📄 separator.tsx      # Separator component
│   ├── 📄 sidebar.tsx        # Sidebar component
│   ├── 📄 breadcrumb.tsx     # Breadcrumb component
│   └── 📄 dropdown-menu.tsx  # Dropdown menu component
├── 📄 AstroBitsSidebar.tsx   # Documentation sidebar
├── 📄 DocsLayout.tsx         # Documentation layout wrapper
├── 📄 GetStartedModal.tsx    # Get started modal
├── 📄 AstroBitsNavigation.tsx # Navigation component (deprecated)
└── 📄 auth-context.tsx       # Supabase auth context
```

### **Component Categories**

#### **📁 ui/**
Auto-generated Shadcn UI components:
- **Form Components**: Button, Input, Label, etc.
- **Layout Components**: Card, Separator, etc.
- **Navigation Components**: Sidebar, Breadcrumb, etc.
- **Overlay Components**: Dialog, Dropdown Menu, etc.

#### **📄 AstroBitsSidebar.tsx**
Custom documentation sidebar with:
- Navigation menu structure
- Search functionality
- Version switcher
- Responsive design

#### **📄 DocsLayout.tsx**
Documentation page wrapper providing:
- Consistent layout structure
- Breadcrumb navigation
- Sidebar integration
- Responsive design

#### **📄 GetStartedModal.tsx**
Installation modal featuring:
- Copy-to-clipboard functionality
- GitHub repository links
- Documentation links
- Download options

## 📁 lib/ - Utility Libraries

Core utilities and configurations:

```
lib/
├── 📄 supabase.ts            # Supabase client configuration
├── 📄 utils.ts               # Common utility functions
└── 📄 auth-context.tsx       # Authentication context (moved from components)
```

### **Key Utilities**

#### **📄 supabase.ts**
Supabase client setup with:
- SSR-compatible client creation
- Environment variable validation
- Error handling
- Type safety

#### **📄 utils.ts**
Common utility functions:
- Class name merging (`clsx`, `tailwind-merge`)
- Type helpers
- Formatting utilities
- Validation functions

## 📁 scripts/ - Automation Scripts

Automation and setup scripts:

```
scripts/
├── 📄 mcp-health-check.js    # MCP server health check
├── 📄 mcp-setup-supabase.js  # Supabase setup automation
├── 📄 mcp-setup-clerk.js     # Clerk setup automation
├── 📄 mcp-setup-navbar.js    # Navigation setup
├── 📄 mcp-setup-docs-layout.js # Documentation layout setup
├── 📄 mcp-install-aceternity-ui.js # Aceternity UI installation
├── 📄 mcp-install-aceternity-enhanced.js # Enhanced installation
├── 📄 mcp-dependency-analyzer.js # Dependency analysis
├── 📄 mcp-test-components.js # Component testing
├── 📄 mcp-test-shadcn-ui.js  # Shadcn UI testing
├── 📄 setup-env.js           # Environment setup
├── 📄 test-mcp-setup.js      # MCP setup testing
└── 📄 update-github-urls.js  # GitHub URL updates
```

### **Script Categories**

#### **MCP Integration Scripts**
- `mcp-health-check.js`: Comprehensive server testing
- `mcp-setup-*.js`: Service-specific setup automation
- `mcp-install-*.js`: Component library installation
- `mcp-test-*.js`: Component and service testing

#### **Utility Scripts**
- `setup-env.js`: Environment variable configuration
- `update-github-urls.js`: Repository URL management
- `test-mcp-setup.js`: MCP configuration testing

## 📁 public/ - Static Assets

Static files served by Next.js:

```
public/
├── 📄 astrobits-icon-light.png # Light mode logo
├── 📄 astrobits-icon-dark.png  # Dark mode logo
├── 📄 favicon.ico              # Favicon
└── 📄 robots.txt               # SEO robots file
```

## 📁 docs/ - Documentation

Project documentation:

```
docs/
├── 📄 getting-started.md      # Getting started guide
├── 📄 introduction.md         # Introduction to AstroBits Core
├── 📄 installation.md         # Installation guide
├── 📄 project-structure.md    # This file
└── 📄 quick-start.md          # Quick start guide
```

## 📄 Configuration Files

### **📄 .mcp.json**
Model Context Protocol configuration:
- Server definitions
- Environment variables
- Transport settings
- Authentication setup

### **📄 .env.example**
Environment variable template:
- API keys placeholders
- Service configurations
- Development settings
- Production variables

### **📄 package.json**
Project configuration:
- Dependencies and versions
- Scripts and commands
- Project metadata
- Repository information

### **📄 tailwind.config.ts**
Tailwind CSS configuration:
- Custom colors and themes
- Component variants
- Plugin configurations
- Responsive breakpoints

### **📄 next.config.js**
Next.js configuration:
- Build settings
- Environment variables
- Image optimization
- Redirects and rewrites

### **📄 tsconfig.json**
TypeScript configuration:
- Compiler options
- Path mappings
- Type definitions
- Module resolution

## 🎯 Development Workflow

### **Adding New Pages**
1. Create a new directory in `app/`
2. Add `page.tsx` for the route
3. Use `DocsLayout` for documentation pages
4. Update sidebar navigation in `AstroBitsSidebar.tsx`

### **Adding New Components**
1. Create component in `components/`
2. Add TypeScript types
3. Include proper imports/exports
4. Add to test pages if needed

### **Adding New Scripts**
1. Create script in `scripts/`
2. Add to `package.json` scripts
3. Include error handling
4. Add documentation

### **Adding New Services**
1. Update `.env.example`
2. Add client configuration in `lib/`
3. Create setup script in `scripts/`
4. Add test page in `app/`
5. Update MCP configuration

## 🔧 Best Practices

### **File Naming**
- Use kebab-case for directories
- Use PascalCase for React components
- Use camelCase for utilities
- Use descriptive, clear names

### **Code Organization**
- Keep components focused and single-purpose
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent formatting

### **Documentation**
- Document complex functions
- Include usage examples
- Keep README updated
- Add inline comments where needed

---

**Ready to explore the codebase?** 🚀

Start with the [Getting Started Guide](./getting-started.md) to understand how everything works together!
