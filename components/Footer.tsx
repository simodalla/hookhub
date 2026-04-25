const AnthropicMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.397-3.504h6.827l-1.374-3.456H6.57l2.227-5.593 1.376 3.458z" />
  </svg>
)

const NAV_LINKS = [
  { label: "Claude Code", href: "https://claude.ai/code" },
  { label: "Docs", href: "https://docs.anthropic.com/en/docs/claude-code/hooks" },
  { label: "GitHub", href: "https://github.com/anthropics/claude-code" },
  { label: "Privacy", href: "https://www.anthropic.com/privacy" },
  { label: "Terms", href: "https://www.anthropic.com/legal/consumer-terms" },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-100 transition-colors hover:text-[#CC785C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C] rounded"
              aria-label="Anthropic"
            >
              <AnthropicMark className="h-5 w-5 shrink-0" />
              <span className="text-sm font-semibold tracking-tight">Anthropic</span>
            </a>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              AI safety company building reliable, interpretable, and steerable AI systems.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC785C] rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            &copy; {year} Anthropic, PBC. All rights reserved.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CC785C]/25 bg-[#CC785C]/10 px-3 py-1 text-xs font-medium text-[#CC785C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CC785C]" aria-hidden="true" />
            Built with Claude Code
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
