# 📖 Developer Guide

Welcome to the Smart Campus Frontend project! This guide contains everything you need to know to get started and be productive.

---

## 📑 Table of Contents

1. [Quick Start](#-quick-start)
2. [Project Overview](#-project-overview)
3. [Development Setup](#-development-setup)
4. [Code Quality System](#-code-quality-system)
5. [Naming Conventions](#-naming-conventions)
6. [Available Commands](#-available-commands)
7. [VS Code Setup](#-vs-code-setup)
8. [Common Workflows](#-common-workflows)
9. [Troubleshooting](#-troubleshooting)
10. [Best Practices](#-best-practices)

---

## 🚀 Quick Start

### Get Up and Running in 5 Minutes

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm run dev

# 3. Open http://localhost:3000
```

### Install VS Code Extensions (Required for best experience)

```bash
# Install via command line
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
```

Or in VS Code: `Cmd+Shift+P` → "Extensions: Show Recommended Extensions"

### Reload VS Code

`Cmd+Shift+P` → "Developer: Reload Window"

**You're ready to code!** 🎉

---

## 🎯 Project Overview

### What is This Project?

A production-ready Next.js application with enterprise-grade tooling that enforces code quality at multiple stages.

### Tech Stack

| Category       | Technology   | Version |
| -------------- | ------------ | ------- |
| **Framework**  | Next.js      | 16.0.10 |
| **UI Library** | React        | 19.2.3  |
| **Language**   | TypeScript   | 5.9.3   |
| **Styling**    | Tailwind CSS | 4.1.18  |
| **Icons**      | Lucide React | 0.561.0 |
| **Linting**    | ESLint       | 9.39.2  |
| **Formatting** | Prettier     | 3.7.4   |
| **Git Hooks**  | Husky        | 9.1.7   |

### Key Features

✅ **Multi-layered Quality Gates** - Catches issues at commit, build, and dev time  
✅ **Strict TypeScript** - Production-ready type safety  
✅ **Auto-formatting** - Code formats on save  
✅ **Real-time Feedback** - See errors as you type  
✅ **Enforced Standards** - Consistent code style across the team

---

## 💻 Development Setup

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **pnpm** (recommended) or npm/yarn
- **Git**
- **VS Code** (recommended)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd smart-campus-frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Install VS Code extensions**
   - Open Command Palette: `Cmd+Shift+P`
   - Type: "Extensions: Show Recommended Extensions"
   - Install all recommended extensions

4. **Reload VS Code**
   - `Cmd+Shift+P` → "Developer: Reload Window"

5. **Start coding!**
   ```bash
   pnpm run dev
   ```

---

## 🔒 Code Quality System

This project has **3 layers of quality checks** to ensure clean, maintainable code:

### Layer 1: Real-Time Feedback (While Coding)

**When:** As you type  
**What:** ESLint + TypeScript errors show inline  
**Action:** Immediate visual feedback

✅ Red squiggly lines under errors  
✅ Hover to see error details  
✅ Auto-fix on save

### Layer 2: Pre-Commit Hooks (Before Commit)

**When:** Every `git commit`  
**What:** Validates only staged files  
**Action:** ❌ **Blocks commit** if checks fail

✅ ESLint (0 warnings allowed)  
✅ TypeScript type checking  
✅ Prettier formatting  
✅ Auto-fixes what it can

**Example:**

```bash
git add src/app/UserProfile.tsx  # Wrong naming!
git commit -m "Add profile"

# ❌ BLOCKED! Error: Filename must be kebab-case
# Fix: Rename to user-profile.tsx
```

### Layer 3: Build-Time Validation (Before Deploy)

**When:** `pnpm run build`  
**What:** Validates entire codebase  
**Action:** ❌ **Blocks build** if any errors exist

✅ All ESLint errors  
✅ All TypeScript errors  
✅ All Prettier issues  
✅ Next.js compilation

**Example:**

```bash
pnpm run build

# Runs: validate → lint:check → check-types → format:check → next build
# ❌ Build fails if ANY check fails
```

### Why This Matters

| Without Quality Gates         | With Quality Gates           |
| ----------------------------- | ---------------------------- |
| ❌ Technical debt accumulates | ✅ Issues caught immediately |
| ❌ Inconsistent code style    | ✅ Consistent codebase       |
| ❌ Bugs slip to production    | ✅ Bugs caught early         |
| ❌ Painful code reviews       | ✅ Focus on logic, not style |

---

## 📏 Naming Conventions

### The Golden Rule: **Lowercase Kebab-Case for Everything**

### ✅ Files

```bash
# Correct
user-profile.tsx
api-client.ts
use-auth-hook.ts
button-component.tsx

# Wrong
UserProfile.tsx      # ❌ PascalCase
userProfile.tsx      # ❌ camelCase
user_profile.tsx     # ❌ snake_case
```

### ✅ Folders

```bash
# Correct
user-profile/
api-routes/
shared-components/

# Wrong
UserProfile/         # ❌ PascalCase
userProfile/         # ❌ camelCase
user_profile/        # ❌ snake_case
```

### 🎯 Exceptions (Next.js Special Files)

These are **allowed** because they're Next.js conventions:

```bash
page.tsx             # ✅ Route pages
layout.tsx           # ✅ Layouts
loading.tsx          # ✅ Loading states
error.tsx            # ✅ Error boundaries
not-found.tsx        # ✅ 404 pages
route.ts             # ✅ API routes
```

### Quick Reference

| Type               | Pattern                  | Example                 |
| ------------------ | ------------------------ | ----------------------- |
| **Component**      | kebab-case               | `user-card.tsx`         |
| **Hook**           | kebab-case               | `use-auth.ts`           |
| **Utility**        | kebab-case               | `format-date.ts`        |
| **Type/Interface** | PascalCase (inside file) | `type UserProfile = {}` |
| **Folder**         | kebab-case               | `user-settings/`        |

---

## 📜 Available Commands

### Development

```bash
pnpm run dev              # Start dev server (port 3000)
```

### Quality Checks

```bash
# Run all checks (recommended before pushing)
pnpm run validate

# Individual checks
pnpm run lint             # Fix ESLint issues
pnpm run lint:check       # Check ESLint (no auto-fix)
pnpm run check-types      # Check TypeScript
pnpm run format           # Fix Prettier formatting
pnpm run format:check     # Check Prettier formatting
```

### Building

```bash
pnpm run build            # Production build (with validation)
pnpm run build:skip-checks # Build without checks (emergency only!)
pnpm run start            # Start production server
```

### Workflow Examples

```bash
# Before committing
pnpm run validate         # Check everything

# Before pushing
pnpm run build            # Ensure build works

# Fix all auto-fixable issues
pnpm run lint && pnpm run format
```

---

## 🎨 VS Code Setup

### Required Extensions

1. **ESLint** (`dbaeumer.vscode-eslint`) - **REQUIRED**
   - Shows linting errors in real-time
   - Auto-fixes on save

2. **Prettier** (`esbenp.prettier-vscode`) - **REQUIRED**
   - Formats code on save
   - Ensures consistent style

3. **Error Lens** (`usernamehw.errorlens`) - **HIGHLY RECOMMENDED**
   - Shows errors inline (at end of line)
   - Makes issues immediately visible

4. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocomplete for Tailwind classes
   - Shows color previews

### Installation

**Option 1: Via VS Code**

1. `Cmd+Shift+P` → "Extensions: Show Recommended Extensions"
2. Click "Install" on each extension

**Option 2: Via Command Line**

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension usernamehw.errorlens
code --install-extension bradlc.vscode-tailwindcss
```

### Verify Setup

1. **Open any `.tsx` file**
2. **Check bottom status bar** - Should show "ESLint" with checkmark
3. **Create an error** - Type `const x = 'test'` and don't use it
4. **See red squiggly line** - Hover to see error message
5. **Save file** - Should auto-format

### What You Should See

✅ Red squiggly lines under errors  
✅ Yellow squiggly lines under warnings  
✅ Inline error messages (with Error Lens)  
✅ Auto-format on save  
✅ ESLint status in bottom bar

---

## 🔄 Common Workflows

### Creating a New Component

```bash
# 1. Create file with kebab-case name
touch src/components/user-card.tsx

# 2. Write component
# VS Code will show errors in real-time

# 3. Save file
# Auto-formats with Prettier

# 4. Commit
git add src/components/user-card.tsx
git commit -m "Add user card component"
# Pre-commit hook validates automatically
```

### Fixing ESLint Errors

```bash
# See what's wrong
pnpm run lint:check

# Auto-fix what can be fixed
pnpm run lint

# Check remaining issues
pnpm run lint:check
```

### Fixing TypeScript Errors

```bash
# Check type errors
pnpm run check-types

# TypeScript errors must be fixed manually
# VS Code will show them inline
```

### Before Pushing to Git

```bash
# 1. Run all checks
pnpm run validate

# 2. If checks pass, push
git push

# 3. If checks fail, fix issues and try again
```

### Building for Production

```bash
# 1. Ensure all checks pass
pnpm run validate

# 2. Build
pnpm run build

# 3. Test production build locally
pnpm run start

# 4. Open http://localhost:3000
```

---

## 🐛 Troubleshooting

### ESLint Not Showing Errors in VS Code

**Problem:** No red squiggly lines, no errors showing

**Solutions:**

1. **Check ESLint is running**
   - Look at bottom status bar for "ESLint"
   - Should show checkmark ✓

2. **Check ESLint output**
   - View → Output → Select "ESLint" from dropdown
   - Look for error messages

3. **Restart ESLint server**
   - `Cmd+Shift+P` → "ESLint: Restart ESLint Server"

4. **Verify flat config enabled**
   - Check `.vscode/settings.json` has `"eslint.useFlatConfig": true`

5. **Reload VS Code**
   - `Cmd+Shift+P` → "Developer: Reload Window"

### Pre-Commit Hook Not Running

**Problem:** Can commit files with errors

**Solutions:**

```bash
# Reinstall husky
pnpm run prepare

# Make hook executable
chmod +x .husky/pre-commit

# Verify hook exists
cat .husky/pre-commit
```

### Build Failing

**Problem:** `pnpm run build` fails

**Solutions:**

```bash
# Check what's failing
pnpm run validate

# Fix ESLint issues
pnpm run lint

# Check TypeScript errors
pnpm run check-types

# Check formatting
pnpm run format:check
```

### Prettier Not Formatting on Save

**Problem:** Code doesn't format when saving

**Solutions:**

1. **Check default formatter**
   - Right-click in file → "Format Document With..."
   - Select "Prettier - Code formatter"
   - Check "Configure Default Formatter"

2. **Verify settings**
   - Check `.vscode/settings.json` has:
     ```json
     {
       "editor.defaultFormatter": "esbenp.prettier-vscode",
       "editor.formatOnSave": true
     }
     ```

3. **Check Prettier extension installed**
   - Extensions panel → Search "Prettier"
   - Should be installed and enabled

### File Naming Errors

**Problem:** ESLint complains about file names

**Solution:**

```bash
# Wrong: UserProfile.tsx
# Right: user-profile.tsx

# Rename file
mv src/components/UserProfile.tsx src/components/user-profile.tsx

# Update imports in other files
# VS Code will show errors where old import is used
```

---

## ✅ Best Practices

### For All Developers

1. **✅ Always use kebab-case** for files and folders
2. **✅ Run `pnpm run validate`** before pushing
3. **✅ Install VS Code extensions** for real-time feedback
4. **✅ Fix errors immediately** when pre-commit hook fails
5. **✅ Don't bypass quality gates** unless absolutely necessary
6. **✅ Keep errors at 0** - Don't let them accumulate

### Code Style

```typescript
// ✅ Good: Descriptive names, proper types
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

function getUserProfile(userId: string): UserProfile {
  // Implementation
}

// ❌ Bad: Any types, unclear names
function get(id: any): any {
  // Implementation
}
```

### Component Structure

```typescript
// ✅ Good: Clear structure, typed props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// ❌ Bad: No types, unclear structure
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### Import Organization

```typescript
// ✅ Good: Organized imports (auto-sorted by ESLint)
import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

// ❌ Bad: Unorganized imports
import { formatDate } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
```

### Relative vs Absolute Imports

```typescript
// ✅ Good: Use @/ for cross-directory imports
import { Button } from '@/components/ui/button';
import { api } from '@/lib/api-client';

// ✅ Good: Up to 2 levels is OK
import { UserCard } from '../user-card';
import { utils } from '../../lib/utils';

// ❌ Bad: More than 2 levels (not allowed)
import { Button } from '../../../components/ui/button';
```

---

## 📚 Configuration Files

| File                    | Purpose                         |
| ----------------------- | ------------------------------- |
| `eslint.config.mjs`     | ESLint rules and configuration  |
| `tsconfig.json`         | TypeScript strict mode settings |
| `next.config.ts`        | Next.js build configuration     |
| `.prettierrc`           | Code formatting rules           |
| `.husky/pre-commit`     | Pre-commit hook script          |
| `package.json`          | Scripts and dependencies        |
| `.vscode/settings.json` | VS Code workspace settings      |

### Key ESLint Rules

| Rule                                    | What It Does                      |
| --------------------------------------- | --------------------------------- |
| `check-file/filename-naming-convention` | Enforces kebab-case file names    |
| `check-file/folder-naming-convention`   | Enforces kebab-case folder names  |
| `@typescript-eslint/no-unused-vars`     | No unused variables               |
| `no-console`                            | Only `console.warn/error` allowed |
| `jsx-a11y/alt-text`                     | Images must have alt text         |
| `import/order`                          | Organized imports                 |
| `no-restricted-imports`                 | Max 2 levels of relative imports  |
| `prettier/prettier`                     | Code formatting                   |

### TypeScript Strict Checks

| Check                        | What It Does                  |
| ---------------------------- | ----------------------------- |
| `strict: true`               | All strict checks enabled     |
| `noUnusedLocals`             | No unused local variables     |
| `noUnusedParameters`         | No unused function parameters |
| `noUncheckedIndexedAccess`   | Safe array/object access      |
| `noImplicitReturns`          | All code paths must return    |
| `noFallthroughCasesInSwitch` | No fallthrough in switch      |

---

## 🎓 Learning Path for New Developers

### Week 1: Setup & Basics

- [ ] Install all prerequisites
- [ ] Clone repository and install dependencies
- [ ] Install VS Code extensions
- [ ] Create a simple component following naming conventions
- [ ] Make your first commit (experience pre-commit hook)

### Week 2: Understanding Quality Gates

- [ ] Intentionally create ESLint errors and see them caught
- [ ] Try to commit with errors (see it blocked)
- [ ] Run `pnpm run validate` and understand each check
- [ ] Fix TypeScript errors in real-time

### Week 3: Productive Development

- [ ] Build a feature following all conventions
- [ ] Use auto-fix on save effectively
- [ ] Navigate the codebase using `@/` imports
- [ ] Successfully build for production

---

## 💡 Quick Tips

### Speed Up Development

```bash
# Use aliases in your shell
alias dev="pnpm run dev"
alias validate="pnpm run validate"
alias build="pnpm run build"
```

### VS Code Shortcuts

| Shortcut      | Action          |
| ------------- | --------------- |
| `Cmd+Shift+P` | Command Palette |
| `Cmd+P`       | Quick file open |
| `Cmd+Shift+F` | Search in files |
| `F2`          | Rename symbol   |
| `Cmd+.`       | Quick fix       |

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/user-profile

# Make changes, commit often
git add .
git commit -m "Add user profile component"

# Before pushing
pnpm run validate

# Push
git push origin feature/user-profile
```

---

## 🚨 Emergency Procedures

### Need to Bypass Pre-Commit Hook?

```bash
# Use --no-verify (use sparingly!)
git commit --no-verify -m "Emergency fix"

# Remember to fix issues later!
```

### Need to Build Without Validation?

```bash
# Use skip-checks (emergency only!)
pnpm run build:skip-checks

# Remember: This should be rare!
```

### Stuck with TypeScript Errors?

1. Check the error message carefully
2. Hover over the error in VS Code
3. Use `Cmd+.` for quick fixes
4. Ask team for help if stuck
5. Don't use `any` as a workaround!

---

## 🎉 You're Ready!

You now have everything you need to be productive in this codebase. Remember:

✅ **Follow naming conventions** - kebab-case for files/folders  
✅ **Let the tools help you** - Real-time feedback, auto-fix on save  
✅ **Run validation before pushing** - `pnpm run validate`  
✅ **Don't bypass quality gates** - They're there to help  
✅ **Ask for help** - When stuck, ask the team

**Happy coding!** 🚀

---

**Last Updated:** December 2024  
**Questions?** Check the troubleshooting section or ask the team!
