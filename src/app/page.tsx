export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo/Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            Next.js
            <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Starter
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="mb-12 max-w-2xl text-lg text-zinc-400 animate-fade-in delay-200 sm:text-xl">
          A modern, production-ready Next.js starter template with TypeScript,
          Tailwind CSS, and best practices built-in.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 animate-fade-in delay-300 sm:flex-row">
          <a
            href="https://github.com/akhiljohns/nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-zinc-900 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 z-0 bg-linear-to-r from-purple-400 to-blue-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Documentation
          </a>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-6 animate-fade-in delay-500 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="TypeScript"
            description="Fully typed for better DX and fewer bugs"
          />
          <FeatureCard
            title="Tailwind CSS"
            description="Utility-first styling with v4 support"
          />
          <FeatureCard
            title="ESLint & Prettier"
            description="Pre-configured linting and formatting"
          />
          <FeatureCard
            title="Lucide Icons"
            description="Beautiful, consistent icon library"
          />
          <FeatureCard
            title="Dark Mode Ready"
            description="Built-in dark mode support"
          />
          <FeatureCard
            title="Production Ready"
            description="Optimized and ready to deploy"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-800/50">
      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
}
