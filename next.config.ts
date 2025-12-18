/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce ESLint during build - blocks build if there are errors
  eslint: {
    // Run ESLint on all directories during build
    dirs: ['src'],
    // Do NOT ignore ESLint errors during build (strict mode)
    ignoreDuringBuilds: false,
  },

  // Enforce TypeScript type checking during build
  typescript: {
    // Do NOT ignore TypeScript errors during build (strict mode)
    ignoreBuildErrors: false,
  },

  // Additional production optimizations
  reactStrictMode: true,

  // Disable powered by header for security
  poweredByHeader: false,
};

export default nextConfig;
