import type { Hook } from "@/types/hook"

export const hooks: Hook[] = [
  {
    id: "bash-command-validator",
    name: "bash-command-validator",
    category: "Validation",
    description:
      "Official Anthropic example that validates shell commands before Claude runs them.",
    repoUrl:
      "https://github.com/anthropics/claude-code/tree/main/examples/hooks",
  },
  {
    id: "claude-code-hooks-mastery",
    name: "claude-code-hooks-mastery",
    category: "Automation",
    description:
      "Comprehensive reference suite covering every lifecycle event with runnable examples.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
  {
    id: "dangerous-command-blocker",
    name: "dangerous-command-blocker",
    category: "Security",
    description:
      "PreToolUse hook that blocks destructive bash commands before they reach the shell.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "slack-notifier",
    name: "slack-notifier",
    category: "Notifications",
    description:
      "Posts Claude's Notification events to a Slack channel via webhook.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "auto-stage-git",
    name: "auto-stage-git",
    category: "Git",
    description:
      "Automatically git adds files Claude edits after a successful PostToolUse.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "awesome-claude-code",
    name: "awesome-claude-code",
    category: "Dev Tools",
    description:
      "Curated index of community hooks, subagents, and workflows.",
    repoUrl: "https://github.com/hesreallyhim/awesome-claude-code",
  },
]
