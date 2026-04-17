import React from "react";

interface Hero3Props {
  eyebrow?: string;
  headline?: string | string[];
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function Hero3({
  eyebrow = "Claude Code · Open Source",
  headline = ["Hooks for", "Claude Code"],
  subheadline = "A curated registry of open-source hooks for Claude Code. Extend, automate, and supercharge your AI-assisted workflow.",
  primaryLabel = "Browse Hooks",
  primaryHref = "#hooks",
  secondaryLabel = "Contribute",
  secondaryHref = "https://github.com",
}: Hero3Props) {
  const headlineLines = Array.isArray(headline) ? headline : [headline];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {/* Eyebrow badge */}
        <p className="text-sm font-medium uppercase tracking-widest text-[#c84b31] mb-6">
          <span className="border border-[#c84b31]/30 rounded-full px-3 py-1 inline-block">
            {eyebrow}
          </span>
        </p>

        {/* Decorative rule between eyebrow and headline */}
        <div className="w-12 h-px bg-[#c84b31] mx-auto mb-6" />

        {/* Headline */}
        <h1 className="text-5xl font-bold tracking-tight text-[#f5f0eb] sm:text-6xl leading-tight mb-6">
          {headlineLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < headlineLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-[#8a8a8a] leading-relaxed mb-6">
          {subheadline}
        </p>

        {/* Decorative rule between subheadline and CTAs */}
        <div className="w-12 h-px bg-[#2a2a2a] mx-auto mb-8" />

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#c84b31] text-white font-medium text-sm tracking-wide transition-colors hover:bg-[#b04028] focus:outline-none focus:ring-2 focus:ring-[#c84b31] focus:ring-offset-2 focus:ring-offset-black"
          >
            {primaryLabel}
          </a>

          {/* Secondary ghost CTA */}
          <a
            href={secondaryHref}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-[#2a2a2a] text-[#f5f0eb] font-medium text-sm tracking-wide transition-colors hover:border-[#444444] hover:bg-[#444444]/10 focus:outline-none focus:ring-2 focus:ring-[#2a2a2a] focus:ring-offset-2 focus:ring-offset-black"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
