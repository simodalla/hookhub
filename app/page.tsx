import HookGrid from "@/components/HookGrid"
import Hero from "@/components/Hero"
import { hooks } from "@/data/hooks"

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950">
      <Hero />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
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
              aria-label="View hookhub on GitHub"
              className="underline hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:hover:text-zinc-300 dark:focus-visible:ring-zinc-100"
            >
              hookhub on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
