# Hero Component Spec

## Goal

Introduce hookhub to first-time visitors and funnel them toward two actions: browsing the hook directory and submitting a new hook. It is the first thing users see below the site header, so it must communicate value immediately and feel consistent with the Anthropic brand.

## Content structure

The hero contains four elements, in order:

1. **Eyebrow** — a short, all-caps label that anchors the product in its ecosystem (e.g. "Claude Code · Open Source"). Styled as a small, coral-colored overline.
2. **Headline** — the primary value proposition, two lines max. Large, tight tracking, off-white.
3. **Subheadline** — one or two sentences expanding on the headline. Muted gray, comfortable line-height, constrained width so lines don't run too long.
4. **CTA group** — exactly two buttons/links side by side:
   - **Primary CTA**: solid coral fill, links to `#hooks` (the hook grid on the same page).
   - **Secondary CTA**: ghost style (transparent background, dark border), links to the GitHub repo to submit a hook. Opens in a new tab.

## Visual guidelines

- **Background**: transparent — the parent page sets the background (`#0a0a0a`).
- **Palette**: off-white `#f5f0eb` for headings, muted gray `#8a8a8a` for body, coral `#c84b31` for the eyebrow and primary CTA (hover: `#b04028`), dark border `#2a2a2a` for the ghost CTA (hover: `#444444`).
- **Layout**: horizontally centered, `max-w-3xl` container, generous vertical padding (`py-24`).
- **Typography**: `font-semibold` headline at `5xl`/`6xl` responsive, `tracking-tight`. Eyebrow uses `uppercase tracking-widest text-sm`.
- **Buttons**: fully rounded (`rounded-full`), `px-6 py-2.5`, `text-sm font-medium`, smooth `transition-colors` on hover.

## Constraints

- No images, illustrations, or background graphics — keep it typographic.
- No animations beyond CSS `transition-colors` on interactive elements.
- Must render correctly without JavaScript (no client-side state).
- All links must be accessible: descriptive text, `rel="noopener noreferrer"` on external links.
- Do not hardcode copy in the component if a variation needs dynamic content — accept it as props instead.

## Variations

When implementing a new variation, preserve:
- The four-element content structure (eyebrow → headline → subheadline → CTAs).
- The two-CTA pattern (primary solid + secondary ghost).
- The Anthropic-aligned color palette.

Variations may experiment with:
- Layout (centered vs. left-aligned).
- Headline size or weight.
- Additional decorative elements (subtle gradients, separators) as long as they stay minimal.
- Props-driven content to make the component reusable across pages.
