import HookGrid from "@/components/HookGrid"
import { hooks } from "@/data/hooks"

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-[#0a0a0a] text-[#f5f0eb]">
      <header className="border-b border-[#2a2a2a]">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-base font-medium tracking-tight text-[#f5f0eb]">
            hookhub
          </span>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8a8a8a] hover:text-[#f5f0eb] transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[#c84b31] mb-6">
            Claude Code · Open Source
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-[#f5f0eb] sm:text-6xl leading-tight">
            Hooks for<br />Claude Code
          </h2>
          <p className="mt-6 text-lg text-[#8a8a8a] leading-relaxed max-w-xl mx-auto">
            Discover and share open-source hooks that extend Claude Code with custom behaviors, automations, and integrations.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <a
              href="#hooks"
              className="rounded-full bg-[#c84b31] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#b04028] transition-colors"
            >
              Browse Hooks
            </a>
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#2a2a2a] px-6 py-2.5 text-sm font-medium text-[#f5f0eb] hover:border-[#444] transition-colors"
            >
              Submit a Hook
            </a>
          </div>
        </div>
      </section>

      <main id="hooks" className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <HookGrid hooks={hooks} />
      </main>

      <footer className="border-t border-[#2a2a2a] mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-[#5a5a5a]">
            Built with Next.js &middot;{" "}
            <a
              href="https://github.com/anthropics/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8a8a8a] transition-colors"
            >
              hookhub on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
