const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d1117]" style={{ minHeight: "85vh" }}>
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Green ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#2ea043]/8 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#2ea043]/5 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2ea043]/30 bg-[#2ea043]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#3fb950]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3fb950]" />
          Open Source · Claude Code Ecosystem
        </div>

        {/* Headline */}
        <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
          <span className="block text-[#e6edf3]">Hook</span>
          <span className="block bg-gradient-to-r from-[#3fb950] via-[#56d364] to-[#2ea043] bg-clip-text text-transparent leading-tight">
            Hub
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-center text-lg leading-relaxed text-[#8b949e] sm:text-xl">
          Discover and share open-source hooks that extend, automate, and supercharge your{" "}
          <span className="font-semibold text-[#e6edf3]">Claude Code</span> workflow.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#2ea043] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3fb950] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3fb950]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Star on GitHub
          </a>
          <a
            href="#hooks"
            className="inline-flex items-center gap-2 rounded-md border border-[#30363d] bg-[#161b22] px-6 py-2.5 text-sm font-semibold text-[#e6edf3] transition-colors hover:border-[#8b949e] hover:bg-[#1c2128] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b949e]"
          >
            Browse Hooks
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Code block */}
        <div className="mt-16 w-full max-w-2xl rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 border-b border-[#30363d] bg-[#161b22] px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-[#8b949e]">.claude/settings.json</span>
          </div>
          <pre className="overflow-x-auto p-6 text-sm font-mono leading-7">
            <span className="text-[#8b949e]">{"{"}</span>{"\n"}
            {"  "}<span className="text-[#79c0ff]">"hooks"</span><span className="text-[#8b949e]">: {"{"}</span>{"\n"}
            {"    "}<span className="text-[#79c0ff]">"PreToolUse"</span><span className="text-[#8b949e]">: [{"{"}</span>{"\n"}
            {"      "}<span className="text-[#79c0ff]">"matcher"</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">"Bash"</span><span className="text-[#8b949e]">,</span>{"\n"}
            {"      "}<span className="text-[#79c0ff]">"hooks"</span><span className="text-[#8b949e]">: [{"{"}</span>{"\n"}
            {"        "}<span className="text-[#79c0ff]">"type"</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">"command"</span><span className="text-[#8b949e]">,</span>{"\n"}
            {"        "}<span className="text-[#79c0ff]">"command"</span><span className="text-[#8b949e]">: </span><span className="text-[#a5d6ff]">"./hooks/safety-check.sh"</span>{"\n"}
            {"      "}<span className="text-[#8b949e]">{"}"}]</span>{"\n"}
            {"    "}<span className="text-[#8b949e]">{"}"}]</span>{"\n"}
            {"  "}<span className="text-[#8b949e]">{"}"}</span>{"\n"}
            <span className="text-[#8b949e]">{"}"}</span>
          </pre>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 border-t border-[#21262d] pt-10">
          {[
            { value: "100%", label: "Open Source" },
            { value: "8", label: "Categories" },
            { value: "5", label: "Hook Events" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-[#e6edf3]">{value}</div>
              <div className="mt-0.5 text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1117] to-transparent" />
    </section>
  )
}

export default Hero
