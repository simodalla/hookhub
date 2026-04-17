import HookGrid from "@/components/HookGrid"
import { hooks } from "@/data/hooks"

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            hookhub
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            A directory of cool open-source Claude Code hooks.
          </p>
        </div>
      </header>

      <section className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Supercharge Claude Code
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Discover and share open-source hooks that extend Claude Code with custom behaviors, automations, and integrations.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#hooks"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow hover:bg-zinc-100 transition-colors"
            >
              Browse Hooks
            </a>
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-600 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-400 transition-colors"
            >
              Submit a Hook
            </a>
          </div>
        </div>
      </section>

      <main id="hooks" className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <HookGrid hooks={hooks} />
      </main>

      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
            Built with Next.js &middot;{" "}
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              hookhub on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
