import type { Hook } from "@/types/hook"

type HookCardProps = {
  hook: Hook
}

const categoryColors: Record<string, string> = {
  Security: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  Git: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  Notifications:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Automation:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Validation:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  "Dev Tools":
    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Session: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  Context:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
}

const HookCard = ({ hook }: HookCardProps) => {
  const badgeClass =
    categoryColors[hook.category] ??
    "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"

  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${hook.name} on GitHub`}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:shadow-zinc-800 dark:focus-visible:ring-zinc-100"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-semibold text-zinc-900 dark:text-zinc-50 leading-snug">
          {hook.name}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}
        >
          {hook.category}
        </span>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>
    </a>
  )
}

export default HookCard
