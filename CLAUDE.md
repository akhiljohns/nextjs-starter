# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev              # Start dev server (Turbopack)
npm run build            # Validate (lint + types + format) then build
npm run start            # Start production server
npm run validate         # Run all checks: lint:check + check-types + format:check
npm run lint             # ESLint with auto-fix
npm run lint:check       # ESLint strict (0 warnings allowed)
npm run check-types      # TypeScript type checking only
npm run format           # Prettier auto-format src/
npm run format:check     # Prettier check (no fix)
```

Always use **npm** (never pnpm or yarn).

## Architecture

- **Next.js 16** with App Router, React 19, TypeScript strict mode
- **Tailwind CSS v4** via `@tailwindcss/postcss` (not the old tailwind.config.js setup)
- **Base UI React** (`@base-ui/react`) as headless component primitives — all UI components wrap these
- **shadcn-style components** in `src/components/ui/` using `class-variance-authority` (cva) for variants
- **`cn()` utility** in `src/lib/utils.ts` — always use this for merging Tailwind classes (combines clsx + tailwind-merge)
- Theme defined via CSS custom properties in oklch color space in `src/app/globals.css`
- shadcn CSS (data-attribute variants, accordion keyframes, no-scrollbar utility) is inlined in `globals.css` — not imported from the shadcn package
- `components.json` configures shadcn CLI (`npx shadcn@latest add <component>`) — base-nova style, olive theme

## Key Conventions

### File & Folder Naming
- **KEBAB_CASE enforced** by ESLint (`eslint-plugin-check-file`) for all `.ts/.tsx/.js/.jsx` files and all folders under `src/`
- Next.js special files are exempt: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `template.tsx`, `default.tsx`, `route.ts`

### Imports
- Use `@/` absolute imports for cross-directory references — deeply nested relative imports (`../../..`) are forbidden
- Import order enforced: React -> Next.js -> external libs -> internal (`@/`) -> relative
- Imports alphabetized within groups, newlines between groups

### TypeScript
- Strict mode with `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`, `noImplicitReturns` all enabled
- Prefix unused variables/params with `_`
- Target: ES2020, path alias: `@/*` -> `./src/*`

### Linting
- `no-console` — only `console.warn` and `console.error` allowed
- Import cycle detection enabled (`import/no-cycle: error`)
- Tailwind canonical classes enforced (`tailwind-canonical-classes` plugin)
- Accessibility checks via `jsx-a11y` (configured for Next.js `<Link>` and `<Image>`)
- ESLint flat config format (v9+) in `eslint.config.mjs` — uses unified `typescript-eslint` package

## Commit Message Rules

**Format:** `scope: short description` (NOT conventional commits)

```
config: Update ESLint rules
bug: Fix memory leak in data table
user-profile: Add avatar upload
```

- Scope must be lowercase kebab-case
- Forbidden scope keywords: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert
- Short description: present tense verb, under 72 chars, no trailing period
- **Do NOT add `Co-Authored-By` footers to commits**
- See `docs/COMMIT_GUIDELINES.md` for full reference

## Component Patterns

- Interactive components need `'use client'` directive
- UI components use `cva()` for variant definitions with typed props via `VariantProps<typeof variantFn>`
- Components use `data-slot` attributes for external styling hooks
- shadcn data-attribute custom variants available: `data-open`, `data-closed`, `data-checked`, `data-unchecked`, `data-selected`, `data-disabled`, `data-active`, `data-horizontal`, `data-vertical`
