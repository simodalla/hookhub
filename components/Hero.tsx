const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Coral orbs */}
      <div className="animate-hero-orb-1 absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#CC785C]/25 blur-[96px]" />
      <div className="animate-hero-orb-2 absolute top-0 right-[-10%] h-[360px] w-[360px] rounded-full bg-[#CC785C]/15 blur-[80px]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-28 sm:px-6 sm:pt-28 sm:pb-36 lg:px-8">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CC785C]/30 bg-[#CC785C]/10 px-3.5 py-1 text-xs font-medium tracking-wide text-[#CC785C]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CC785C]" />
            Claude Code Ecosystem
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block">the hook</span>
          <span className="block bg-gradient-to-r from-[#CC785C] via-[#E8956D] to-[#F0B896] bg-clip-text text-transparent">
            directory.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          Open-source hooks that extend, automate, and supercharge your{" "}
          <span className="text-zinc-200">Claude Code</span> workflow.
        </p>

        {/* Stats row */}
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          {[
            { value: "100%", label: "open source" },
            { value: "8", label: "categories" },
            { value: "5", label: "hook events" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-3xl font-bold text-white">{value}</span>
              <span className="text-sm text-zinc-500">{label}</span>
            </div>
          ))}
          <div className="ml-auto hidden items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 sm:flex">
            <span className="font-mono text-xs text-zinc-500">hooks/</span>
            <span className="font-mono text-xs text-[#CC785C]">PreToolUse</span>
            <span className="font-mono text-xs text-zinc-600">·</span>
            <span className="font-mono text-xs text-[#CC785C]">PostToolUse</span>
            <span className="font-mono text-xs text-zinc-600">·</span>
            <span className="font-mono text-xs text-[#CC785C]">Stop</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
