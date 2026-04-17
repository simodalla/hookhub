export type HookCategory =
  | "Security"
  | "Git"
  | "Notifications"
  | "Automation"
  | "Validation"
  | "Dev Tools"
  | "Session"
  | "Context"

export type Hook = {
  id: string
  name: string
  category: HookCategory
  description: string
  repoUrl: string
}
