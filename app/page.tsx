import Hero from "@/components/Hero"
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

      <Hero />

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
