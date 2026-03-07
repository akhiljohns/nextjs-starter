# Next.js Starter

A modern, opinionated Next.js starter with strict TypeScript, Tailwind CSS v4, Base UI components, and enforced code quality.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript 5.9** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Base UI React** - headless component primitives
- **shadcn/ui** (Nova style, Olive theme) - pre-built UI components in `src/components/ui/`
- **ESLint 9** (flat config) + **Prettier** - code quality and formatting
- **Lucide React** - icon library

## Getting Started

```bash
git clone <repository-url>
cd nextjs-starter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Start dev server                                 |
| `npm run build`      | Validate + production build                      |
| `npm run start`      | Start production server                          |
| `npm run validate`   | Run all checks (lint + types + format)           |
| `npm run lint`       | ESLint with auto-fix                             |
| `npm run lint:check` | ESLint strict check (0 warnings)                 |
| `npm run check-types`| TypeScript type checking                         |
| `npm run format`     | Prettier auto-format                             |
| `npm run format:check`| Prettier check                                  |

## Project Structure

```
src/
  app/              # Next.js App Router (pages, layouts)
  components/       # Reusable components
    ui/             # shadcn/ui components (Base UI + cva + Tailwind)
  lib/              # Utilities (cn() for class merging)
```

## Conventions

- **File/folder naming**: kebab-case only (enforced by ESLint)
- **Imports**: use `@/` for cross-directory imports; deeply nested relative imports are forbidden
- **Import order**: React -> Next.js -> external -> internal (`@/`) -> relative
- **Console**: only `console.warn` and `console.error` allowed
- **Commits**: `scope: description` format (see `docs/COMMIT_GUIDELINES.md`)

## Adding UI Components

```bash
npx shadcn@latest add <component>
```

Components are configured via `components.json` (base-nova style, olive theme, lucide icons).

## VS Code

Recommended extensions are in `.vscode/extensions.json`. The workspace is pre-configured with ESLint auto-fix on save, Prettier formatting, and Tailwind CSS IntelliSense.

## License

MIT
