/** @type {import('next').NextConfig} */
const nextConfig = {
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
