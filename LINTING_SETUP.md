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

// 4. Internal modules
import { Button } from '@/components/ui/button';

// 5. Relative imports
import { UserData } from './types';
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

| Setting | Value | Purpose |
|---------|-------|---------|
| `singleQuote` | `true` | Use single quotes for strings |
| `trailingComma` | `all` | Add trailing commas everywhere |
| `printWidth` | `80` | Wrap lines at 80 characters |
| `tabWidth` | `2` | Use 2 spaces for indentation |
| `endOfLine` | `lf` | Unix-style line endings |

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
// with React and Next.js at the top
```

### 3. TypeScript Unused Variables
```tsx
// ✅ Prefix unused params with underscore
function Component({ _unusedProp, usedProp }: Props) {
  return <div>{usedProp}</div>;
}
```

### 4. Console Statements
```tsx
// ❌ Avoid
console.log('debug');

// ✅ Allowed
console.warn('Warning message');
console.error('Error message');
```

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
  }
}
```