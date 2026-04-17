interface CtaLink {
  label: string
  href: string
}

interface Hero2Props {
  eyebrow?: string
  headline?: string
  subheadline?: string
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
}

export default function Hero2({
  eyebrow = "Claude Code · Open Source",
  headline = "Hooks for\nClaude Code",
  subheadline = "Discover and share open-source hooks that extend Claude Code with custom behaviors, automations, and integrations.",
  primaryCta = { label: "Browse Hooks", href: "#hooks" },
  secondaryCta = { label: "Submit a Hook", href: "https://github.com/anthropics/claude-code" },
}: Hero2Props) {
  const isExternal = (href: string) => href.startsWith("http://") || href.startsWith("https://")

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="border-l-2 border-[#c84b31] pl-6">
          <p className="text-sm font-medium uppercase tracking-widest text-[#c84b31] mb-6">
            {eyebrow}
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-[#f5f0eb] sm:text-6xl leading-tight whitespace-pre-line">
            {headline}
          </h2>
          <p className="mt-6 text-lg text-[#8a8a8a] leading-relaxed max-w-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex gap-3">
            <a
              href={primaryCta.href}
              {...(isExternal(primaryCta.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full bg-[#c84b31] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#b04028] transition-colors"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              {...(isExternal(secondaryCta.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full border border-[#2a2a2a] px-6 py-2.5 text-sm font-medium text-[#f5f0eb] hover:border-[#444444] transition-colors"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
