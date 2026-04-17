interface Hero4Props {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function Hero4({
  eyebrow = "Introducing HookHub",
  headline = "Webhooks that just work",
  subheadline = "Receive, inspect, and replay webhooks in real time. Build integrations faster with instant visibility into every event.",
  primaryLabel = "Get started free",
  primaryHref = "#",
  secondaryLabel = "View the docs",
  secondaryHref = "#",
}: Hero4Props) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:gap-12 md:items-center md:text-left">
          {/* Left column: eyebrow + headline */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#c84b31]">
              {eyebrow}
            </p>
            <h1 className="text-6xl font-bold leading-tight tracking-tight text-[#f5f0eb] sm:text-7xl">
              {headline}
            </h1>
          </div>

          {/* Right column: subheadline + CTA group */}
          <div className="flex flex-col items-center gap-8 md:items-start">
            <p className="text-lg leading-relaxed text-[#8a8a8a]">
              {subheadline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href={primaryHref}
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#c84b31] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b04028]"
              >
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-[#2a2a2a] px-6 py-3 text-sm font-semibold text-[#f5f0eb] transition-colors hover:border-[#444444] hover:bg-[#444444]"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
