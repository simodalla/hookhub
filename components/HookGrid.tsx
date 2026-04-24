import type { Hook } from "@/types/hook"
import HookCard from "@/components/HookCard"

type HookGridProps = {
  hooks: Hook[]
}

const HookGrid = ({ hooks }: HookGridProps) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {hooks.map((hook, i) => (
      <HookCard key={hook.id} hook={hook} index={i} />
    ))}
  </div>
)

export default HookGrid
