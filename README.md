# Smart Campus Frontend

A **production-ready** Next.js application with enterprise-grade tooling, strict quality gates, and comprehensive developer experience optimizations.

---

## 🎯 Project Overview

This is a modern web application built with Next.js 16, React 19, and TypeScript, featuring a robust quality assurance system that enforces code standards at multiple stages of development.

### Key Highlights

- ✅ **Multi-layered Quality Gates** - Pre-commit hooks, build-time validation, and real-time feedback
- ✅ **Strict TypeScript** - Production-ready type safety with comprehensive checks
- ✅ **Enforced Code Standards** - Lowercase kebab-case naming, ESLint, and Prettier
- ✅ **Modern Stack** - Next.js 16, React 19, Tailwind CSS v4
- ✅ **Developer Experience** - Real-time linting, auto-formatting, and type checking

---

## 🚀 Tech Stack

### Core Framework

- **Next.js** `^16.0.10` - React framework with App Router
- **React** `^19.2.3` - Latest React with improved performance
- **TypeScript** `^5.9.3` - Strict type safety

### Styling

- **Tailwind CSS** `^4.1.18` - Utility-first CSS framework (v4)
- **@tailwindcss/postcss** `^4.1.18` - PostCSS integration
- **tw-animate-css** `^1.4.0` - Animation utilities

### UI Components & Utilities

- **@base-ui/react** `^1.0.0` - Headless UI components
- **class-variance-authority** `^0.7.1` - Component variant management
- **clsx** `^2.1.1` - Conditional className utility
- **tailwind-merge** `^3.4.0` - Merge Tailwind classes without conflicts
- **lucide-react** `^0.561.0` - Beautiful icon library
- **shadcn** `^3.6.2` - Component CLI

### Code Quality & Linting

- **ESLint** `^9.39.2` - Linting with flat config
- **Prettier** `^3.7.4` - Code formatting
- **Husky** `^9.1.7` - Git hooks
- **lint-staged** `^16.2.7` - Run linters on staged files

### ESLint Plugins

- `@typescript-eslint/eslint-plugin` `^8.50.0` - TypeScript rules
- `eslint-plugin-react` `^7.37.5` - React rules
- `eslint-plugin-react-hooks` `^7.0.1` - React Hooks rules
- `eslint-plugin-jsx-a11y` `^6.10.2` - Accessibility rules
- `eslint-plugin-import` `^2.32.0` - Import/export rules
- `eslint-plugin-check-file` `^3.3.1` - File naming conventions
- `eslint-plugin-prettier` `^5.5.4` - Prettier integration
- `eslint-plugin-tailwind-canonical-classes` `^1.0.8` - Tailwind class ordering

---

## 📁 Project Structure

```
smart-campus-frontend/
├── .husky/                      # Git hooks (pre-commit)
├── .vscode/                     # VS Code workspace settings
│   ├── settings.json           # ESLint, Prettier, auto-fix on save
│   └── extensions.json         # Recommended extensions
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── demo/              # Example routes
│   ├── components/            # Reusable components
│   │   └── ui/               # UI components (shadcn-style)
│   └── lib/                  # Utility functions
├── public/                    # Static assets
├── .prettierrc               # Prettier configuration
├── eslint.config.mjs        # ESLint flat config (v9+)
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration (strict mode)
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Dependencies and scripts
├── QUALITY_GATES.md        # Quality gates documentation
├── ESLINT_SETUP.md         # ESLint setup guide
├── NAMING_CONVENTIONS.md   # File/folder naming rules
└── README.md               # This file
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **pnpm** (recommended) or npm/yarn
- **Git** for version control
- **VS Code** (recommended) with extensions

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd smart-campus-frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Install recommended VS Code extensions**
   - Open VS Code
   - Press `Cmd+Shift+P` → "Extensions: Show Recommended Extensions"
   - Install: ESLint, Prettier, Error Lens

4. **Start development server**

   ```bash
   pnpm run dev
   ```

5. **Open browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

### Development

```bash
pnpm run dev              # Start dev server (no quality checks)
```

### Quality Checks

```bash
pnpm run validate         # Run ALL quality checks (ESLint + TypeScript + Prettier)
pnpm run lint             # Fix ESLint issues automatically
pnpm run lint:check       # Check ESLint (no auto-fix, 0 warnings allowed)
pnpm run check-types      # Check TypeScript types
pnpm run format           # Fix Prettier formatting
pnpm run format:check     # Check Prettier formatting
```

### Building

```bash
pnpm run build            # Production build (runs validation first)
pnpm run build:skip-checks # Build without validation (NOT RECOMMENDED)
pnpm run start            # Start production server
```

### Utilities

```bash
pnpm run tw-upgrade       # Upgrade Tailwind CSS
```

---

## 🔒 Quality Gates System

This project enforces **strict quality standards** at three levels:

### 1. **Pre-Commit Hooks** (via Husky + lint-staged)

- ✅ Runs automatically before every `git commit`
- ✅ Checks only staged files (fast!)
- ✅ Blocks commits if ESLint/TypeScript/Prettier checks fail
- ✅ Auto-fixes what can be fixed

### 2. **Build-Time Validation** (via Next.js + pnpm scripts)

- ✅ Runs during `pnpm run build`
- ✅ Validates entire codebase
- ✅ Blocks builds if any errors exist
- ✅ Ensures production deployments are clean

### 3. **Real-Time Feedback** (via VS Code)

- ✅ Shows errors as you type
- ✅ Auto-fix on save
- ✅ Inline error messages (with Error Lens)

**📖 See [QUALITY_GATES.md](./QUALITY_GATES.md) for detailed documentation**

---

## 📏 Naming Conventions

This project enforces **lowercase kebab-case** for all files and folders:

### ✅ Files

```
✅ user-profile.tsx
✅ api-client.ts
✅ use-auth-hook.ts
❌ UserProfile.tsx (PascalCase - NOT allowed)
❌ apiClient.ts (camelCase - NOT allowed)
```

### ✅ Folders

```
✅ user-profile/
✅ api-routes/
❌ UserProfile/ (PascalCase - NOT allowed)
❌ apiRoutes/ (camelCase - NOT allowed)
```

**Exceptions:** Next.js special files (`page.tsx`, `layout.tsx`, etc.)

**📖 See [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md) for complete rules**

---

## 🎨 Code Style

### ESLint Rules

- ✅ Lowercase kebab-case file/folder naming
- ✅ No unused variables (prefix with `_` if intentional)
- ✅ Only `console.warn` and `console.error` allowed
- ✅ Accessibility checks (alt text, anchor tags)
- ✅ Import ordering (React → Next.js → others)
- ✅ Max 2 levels of relative imports (`../` and `../../` allowed, `../../../` not allowed)

### TypeScript Rules (Strict Mode)

- ✅ `strict: true` - All strict checks enabled
- ✅ `noUnusedLocals: true` - No unused local variables
- ✅ `noUnusedParameters: true` - No unused function parameters
- ✅ `noUncheckedIndexedAccess: true` - Safe array/object access
- ✅ `noImplicitReturns: true` - All code paths must return
- ✅ `noFallthroughCasesInSwitch: true` - No fallthrough in switch

### Prettier Rules

- Single quotes
- Trailing commas
- 80 character line width
- 2 space indentation
- LF line endings

---

## 🧪 Testing the Quality Gates

### Test Pre-Commit Hook

```bash
# Create a file with wrong naming
touch src/app/TestFile.tsx

# Try to commit
git add src/app/TestFile.tsx
git commit -m "test"

# ❌ Commit will be blocked with error message
```

### Test Build Validation

```bash
# With ESLint errors present
pnpm run build

# ❌ Build will fail with error details
```

---

## 🎓 Developer Experience

### VS Code Setup

1. **Install recommended extensions** (see `.vscode/extensions.json`)
   - ESLint (`dbaeumer.vscode-eslint`) - **REQUIRED**
   - Prettier (`esbenp.prettier-vscode`) - **REQUIRED**
   - Error Lens (`usernamehw.errorlens`) - **HIGHLY RECOMMENDED**
   - Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

2. **Reload VS Code**
   - `Cmd+Shift+P` → "Developer: Reload Window"

3. **Verify ESLint is running**
   - Open any `.tsx` file
   - Look for ESLint status in bottom status bar

**📖 See [ESLINT_SETUP.md](./ESLINT_SETUP.md) for detailed setup**

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms

This project works with any platform supporting Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Docker

**Important:** Quality checks run automatically during build on all platforms.

---

## 📚 Documentation

| File                    | Purpose                            |
| ----------------------- | ---------------------------------- |
| `eslint.config.mjs`     | ESLint flat config with all rules  |
| `tsconfig.json`         | Strict TypeScript configuration    |
| `next.config.ts`        | Next.js with build-time validation |
| `.prettierrc`           | Code formatting rules              |
| `.husky/pre-commit`     | Pre-commit hook script             |
| `package.json`          | Scripts and lint-staged config     |
| `.vscode/settings.json` | VS Code workspace settings         |

---

## 🎯 Best Practices

### For Developers

1. ✅ Always use lowercase kebab-case for files/folders
2. ✅ Run `pnpm run validate` before pushing
3. ✅ Install VS Code extensions for real-time feedback
4. ✅ Don't bypass quality gates unless absolutely necessary
5. ✅ Keep ESLint and TypeScript errors at 0

### For Team Leads

1. ✅ Monitor build failure rates
2. ✅ Review any quality gate bypasses
3. ✅ Ensure all team members have proper setup
4. ✅ Update ESLint rules as project evolves
5. ✅ Make quality gates part of onboarding

---

## 🐛 Troubleshooting

### Pre-commit hook not running?

```bash
pnpm run prepare
chmod +x .husky/pre-commit
```

### ESLint not showing in VS Code?

1. Check ESLint output panel
2. Restart ESLint server: `Cmd+Shift+P` → "ESLint: Restart ESLint Server"
3. Ensure `"eslint.useFlatConfig": true` in VS Code settings

### Build failing?

```bash
# Check what's failing
pnpm run validate

# Fix ESLint issues
pnpm run lint

# Check TypeScript
pnpm run check-types
```

---

## 📈 Why This Setup?

### Long-Term Maintainability

- ✅ Prevents technical debt accumulation
- ✅ Enforces consistent code style
- ✅ Catches bugs early (type safety + linting)
- ✅ Easier onboarding for new developers
- ✅ Better code reviews (focus on logic, not style)

### Developer Productivity

- ✅ Real-time feedback while coding
- ✅ Auto-fix on save
- ✅ Clear error messages
- ✅ Fast pre-commit checks (only staged files)
- ✅ Comprehensive documentation

---

## 📝 License

MIT License - feel free to use this for your projects!

---

## 🤝 Contributing

1. Follow the naming conventions
2. Ensure all quality checks pass
3. Write meaningful commit messages
4. Update documentation if needed

---

## 📞 Support

For questions or issues:

1. Check the documentation files
2. Review ESLint/TypeScript error messages
3. Check VS Code output panels

---

**Built with ❤️ for long-term maintainability and developer happiness**

🚀 **Ready to build something amazing!**
