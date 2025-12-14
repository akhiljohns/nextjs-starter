# Next.js Starter Template

A modern, **production**-ready Next.js starter template with TypeScript, Tailwind CSS v4, and comprehensive tooling for building scalable web applications.

## ✨ Features

- ⚡️ **Next.js 16** - Latest version with App Router
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with the latest features
- 📘 **TypeScript** - Full type safety and better developer experience
- 🎭 **React 19** - Latest React with improved performance
- 🔍 **ESLint** - Comprehensive linting with multiple plugins
- 💅 **Prettier** - Consistent code formatting
- 🎯 **Lucide Icons** - Beautiful, consistent icon library
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 📦 **CVA** - Class Variance Authority for component variants
- 🎬 **Animations** - tw-animate-css for smooth animations

## 📦 Important Packages

### Core Dependencies

- **next** (^16.0.10) - React framework for production
- **react** (^19.2.3) - JavaScript library for building user interfaces
- **react-dom** (^19.2.3) - React package for working with the DOM
- **tailwindcss** (^4) - Utility-first CSS framework
- **typescript** (^5) - TypeScript language

### UI & Styling

- **class-variance-authority** (^0.7.1) - CVA for managing component variants
- **clsx** (^2.1.1) - Utility for constructing className strings
- **tailwind-merge** (^3.4.0) - Merge Tailwind CSS classes without conflicts
- **lucide-react** (^0.561.0) - Beautiful & consistent icon library
- **tw-animate-css** (^1.4.0) - Animation utilities for Tailwind

### Development Tools

- **ESLint** (^9) - Linting utility with comprehensive plugins:
  - `@next/eslint-plugin-next` - Next.js specific linting rules
  - `eslint-plugin-react` - React specific linting rules
  - `eslint-plugin-react-hooks` - Rules for React Hooks
  - `eslint-plugin-jsx-a11y` - Accessibility linting
  - `eslint-plugin-import` - Import/export syntax linting
  - `eslint-plugin-prettier` - Prettier integration
  - `eslint-config-prettier` - Disables conflicting ESLint rules
  - `eslint-plugin-check-file` - File naming conventions

- **TypeScript ESLint** (^8.46.0) - TypeScript support for ESLint
- **Prettier** (^3.6.2) - Code formatter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm/bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/akhiljohns/nextjs-starter.git
cd nextjs-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint and auto-fix issues
- `npm run check-types` - Type-check without emitting files
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── ...
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Tailwind CSS

Tailwind CSS v4 is configured with PostCSS. Customize your design system in `tailwind.config.ts`.

### ESLint & Prettier

ESLint is configured with comprehensive rules for React, TypeScript, and Next.js. Customize rules in `.eslintrc.json`.

Prettier configuration can be added in `.prettierrc` or `package.json`.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Learn TypeScript
- [React Documentation](https://react.dev) - Learn React

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/akhiljohns/nextjs-starter)

### Other Platforms

This starter works with any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render
- Docker

Check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

MIT License - feel free to use this starter for your projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js
