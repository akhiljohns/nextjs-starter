# ESLint & Prettier Setup for Next.js

---

## 📦 Installed Packages

### ESLint & Plugins

- `eslint` - Core linting engine
- `@typescript-eslint/eslint-plugin` - TypeScript rules
- `@typescript-eslint/parser` - TypeScript parser
- `eslint-plugin-import` - Import/export validation
- `eslint-plugin-react` - React rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-jsx-a11y` - Accessibility rules
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-check-file` - File/folder naming conventions
- `@next/eslint-plugin-next` - Next.js specific rules

### Prettier

- `prettier` - Code formatter
- `eslint-config-prettier` - Disables ESLint rules that conflict with Prettier

---

## 🎯 Key Features

### 1. **Next.js Optimizations**

- ✅ Configured for App Router (`app/` directory)
- ✅ Link component accessibility checks
- ✅ Image component recommendations
- ✅ Import ordering prioritizes React and Next.js modules
- ✅ No React import needed (disabled `react-in-jsx-scope`)

### 2. **Code Quality**

- ✅ TypeScript strict checking
- ✅ Unused variable detection (with `_` prefix support)
- ✅ Import cycle detection
- ✅ Console statement warnings (allows `warn` and `error`)
- ✅ Prefer `const` over `let`
- ✅ **Restricted deeply nested relative imports** (max 1 level up)

### 3. **Naming Conventions**

- ✅ Files: KEBAB-CASE (e.g., `user-profile.tsx`)
- ✅ Folders: KEBAB-CASE (e.g., `api-routes/`)
- ✅ Applied to `app/` directory

### 4. **Accessibility (a11y)**

- ✅ Anchor tag validation for Next.js `<Link>`
- ✅ Alt text checking for images
- ✅ Keyboard navigation support

### 5. **Import Organization**

```typescript
// Automatically organized as:
// 1. React
import React from 'react';

// 2. Next.js modules
import Link from 'next/link';
import Image from 'next/image';

// 3. External packages
import { clsx } from 'clsx';

// 4. Internal modules (using @/ alias)
import { Button } from '@/components/ui/button';

// 5. Relative imports (same directory or one level up only)
import { UserData } from './types';
import { Layout } from '../layout';
```

---

## 🚫 Import Restrictions (Enforced by ESLint)

### **Allowed Import Patterns**

| Pattern              | Example                  | Status           |
| -------------------- | ------------------------ | ---------------- |
| **Same directory**   | `./component`            | ✅ Allowed       |
| **One level up**     | `../component`           | ✅ Allowed       |
| **Absolute with @/** | `@/components/component` | ✅ Recommended   |
| **Two levels up**    | `../../component`        | ❌ **Forbidden** |
| **Three+ levels up** | `../../../component`     | ❌ **Forbidden** |

### **Why Restrict Deep Relative Imports?**

```typescript
// ❌ FORBIDDEN - Hard to maintain, breaks when moving files
import { Button } from '../../../components/ui/button';
import { utils } from '../../../../lib/utils';

// ✅ RECOMMENDED - Clear, refactor-safe, industry standard
import { Button } from '@/components/ui/button';
import { utils } from '@/lib/utils';
```

**Error message when violated:**

```
Relative imports with more than one level (..) are not allowed.
Use absolute imports with @/ instead.
```

### **Import Decision Tree**

```
Need to import a file?
│
├─ Is it in the same directory?
│  └─ YES → Use ./filename
│
├─ Is it in the parent directory (one level up)?
│  └─ YES → Use ../filename
│
└─ Is it anywhere else?
   └─ YES → Use @/path/to/filename (REQUIRED)
```

---

## 📋 Real-World Import Examples

### **Example 1: Page Component**

```typescript
// src/app/dashboard/users/page.tsx

// ✅ Same directory
import { UserList } from './user-list';

// ✅ One level up (parent)
import { DashboardLayout } from '../dashboard-layout';

// ✅ Absolute imports for cross-directory
import { Button } from '@/components/ui/button';
import { fetchUsers } from '@/lib/api-client';
import { User } from '@/types/user';
```

### **Example 2: Component with Utilities**

```typescript
// src/components/forms/user-form.tsx

import { useState } from 'react';

// ✅ Same directory
import { FormField } from './form-field';

// ✅ Absolute imports
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { User } from '@/types/user';
```

### **Example 3: API Route**

```typescript
// src/app/api/users/route.ts

import { NextResponse } from 'next/server';

// ✅ Absolute imports
import { getUsersFromDB } from '@/lib/database';
import { validateAuth } from '@/lib/auth';
```

### **How to Fix Import Violations**

**❌ BEFORE (Will error):**

```typescript
// src/app/dashboard/users/user-profile.tsx
import { Button } from '../../../components/ui/button';
import { cn } from '../../../../lib/utils';
```

**✅ AFTER (Fixed):**

```typescript
// src/app/dashboard/users/user-profile.tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

---

## 🚀 Available Scripts

```bash
# Lint and auto-fix code
pnpm lint

# Format code with Prettier
pnpm format

# Type check TypeScript
pnpm check-types

# Run all checks (recommended before commits)
pnpm lint && pnpm format && pnpm check-types
```

---

## 📋 Configuration Files

### `.prettierrc`

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf"
}
```

### `.prettierignore`

Excludes:

- `node_modules/`
- `.next/`
- `out/`
- `build/`
- Lock files
- Environment files

### `eslint.config.mjs`

Comprehensive flat config with:

- TypeScript support
- React & Next.js rules
- Import ordering
- Accessibility checks
- Prettier integration
- File naming conventions

---

## 🎨 Prettier Settings

| Setting         | Value  | Purpose                        |
| --------------- | ------ | ------------------------------ |
| `singleQuote`   | `true` | Use single quotes for strings  |
| `trailingComma` | `all`  | Add trailing commas everywhere |
| `printWidth`    | `80`   | Wrap lines at 80 characters    |
| `tabWidth`      | `2`    | Use 2 spaces for indentation   |
| `endOfLine`     | `lf`   | Unix-style line endings        |

---

## 🔍 Next.js Best Practices Enforced

### 1. Use Next.js Components

```tsx
// ❌ Avoid
<a href="/about">About</a>
<img src="/logo.png" alt="Logo" />

// ✅ Use
<Link href="/about">About</Link>
<Image src="/logo.png" alt="Logo" width={200} height={50} />
```

### 2. Import Organization

```tsx
// Imports are automatically organized by groups
// with React and Next.js at the top, alphabetically sorted
```

### 3. TypeScript Unused Variables
```tsx
// ✅ Prefix unused params with underscore
function Component({ _unusedProp, usedProp }: Props) {
  return <div>{usedProp}</div>;
}
```

### 5. Console Statements

```tsx
// ❌ Avoid
console.log('debug');

// ✅ Allowed for errors and warnings
console.warn('Warning message');
console.error('Error message');
```

---

## 🌍 Global Coding Standards

This configuration follows industry best practices from:

- **Airbnb Style Guide** - Restricts relative imports beyond 2 levels
- **Google JavaScript Style Guide** - Prefers absolute imports for shared code
- **Next.js Official Docs** - Recommends `@/` alias usage
- **React Best Practices** - Encourages path aliases for scalability
- **TypeScript Community** - Uses path mapping extensively

---

## 📝 IDE Integration

### VS Code

Install these extensions:

1. **ESLint** - `dbaeumer.vscode-eslint`
2. **Prettier** - `esbenp.prettier-vscode`

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

**This will automatically:**

- Format code on save with Prettier
- Fix ESLint errors (including import violations)
- Organize imports automatically

---

## 🛠️ Troubleshooting Import Violations

When ESLint catches a deep relative import:

```bash
$ pnpm lint

src/app/dashboard/page.tsx
  5:1  error  Relative imports with more than one level (..) are not
              allowed. Use absolute imports with @/ instead.
              no-restricted-imports

✖ 1 problem (1 error, 0 warnings)
```

**How to fix:**

1. Replace `../../` or `../../../` with `@/`
2. Run `pnpm lint` again
3. Or enable auto-fix on save in VS Code

---

## 🎯 Summary

Your project enforces:

- ✅ **TypeScript** with strict mode
- ✅ **ESLint + Prettier** with auto-formatting
- ✅ **Tailwind CSS** for styling
- ✅ **`src/` directory** structure
- ✅ **App Router** (Next.js 16)
- ✅ **`@/` alias** pointing to `src/`
- ✅ **Import restrictions** preventing deep relative paths
- ✅ **Industry standards** following global best practices

All configurations are production-ready and follow modern development standards! 🚀
