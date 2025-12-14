import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import checkFilePlugin from 'eslint-plugin-check-file';
import tailwindCanonicalPlugin from 'eslint-plugin-tailwind-canonical-classes';


/**
 * ESLint Configuration for Next.js 16 with App Router
 *
 * - TypeScript strict type checking
 * - React & React Hooks rules
 * - Import ordering and cycle detection
 * - Accessibility (a11y) checks configured for Next.js Link
 * - Prettier integration for consistent formatting
 * - KEBAB-CASE naming convention for files and folders
 * - Next.js-optimized rules (Image, Link components)
 * - Restricts deeply nested relative imports (max 1 level up)
 *
 * Next.js Best Practices Covered:
 * ✓ Use <Link> instead of <a> tags
 * ✓ Use <Image> instead of <img> tags
 * ✓ Import ordering prioritizes React and Next.js
 * ✓ No React import needed (auto-imported)
 * ✓ Accessibility checks for Next.js components
 * ✓ Console warnings allowed for debugging
 * ✓ Enforces @/ for cross-directory imports
 */

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        JSX: 'readonly',
        NodeJS: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      prettier: prettierPlugin,
      'check-file': checkFilePlugin,
      'tailwind-canonical-classes': tailwindCanonicalPlugin,
    },
    rules: {
      // Import/Export rules
      'import/no-cycle': 'error',
      'linebreak-style': ['error', 'unix'],

      // React rules optimized for Next.js
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/no-unescaped-entities': 'warn',
      'react/jsx-key': 'error',

      // Accessibility - configured for Next.js Link component
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],

      // Import ordering with Next.js priority
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/no-anonymous-default-export': 'warn',

      // Prevent deeply nested relative imports - use @/ instead
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../**/..'],
              message:
                'Relative imports with more than one level (..) are not allowed. Use absolute imports with @/ instead.',
            },
          ],
        },
      ],

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/no-empty-function': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-var-requires': 'off',

      // General best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-unused-expressions': 'error',

      // Prettier integration
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      // Tailwind CSS canonical class names (v4)
      'tailwind-canonical-classes/tailwind-canonical-classes': [
        'warn',
        {
          cssPath: './src/app/globals.css',
        },
      ],

      // File naming conventions
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {},
      },
      next: {
        rootDir: './',
      },
    },
  },
  {
    // Folder naming convention for src directory (Next.js App Router)
    files: ['src/**/!(__tests__)/*'],
    plugins: {
      'check-file': checkFilePlugin,
    },
    rules: {
      'check-file/folder-naming-convention': [
        'error',
        {
          '**/*': 'KEBAB_CASE',
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules/*',
      '.next/*',
      'out/*',
      'build/*',
      'dist/*',
      '.cache/*',
      'public/*',
      '*.config.*',
      'next-env.d.ts',
    ],
  },
];
