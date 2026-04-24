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
  {
    id: "everything-claude-code",
    name: "everything-claude-code",
    category: "Dev Tools",
    description:
      "28 specialized agents, 119 skills, and 60 commands with PreToolUse hooks that block --no-verify flags, detect secrets, and prevent agents from modifying linter configs. Includes AgentShield security scanner with 1,282 tests.",
    repoUrl: "https://github.com/affaan-m/everything-claude-code",
  },
  {
    id: "claude-code-prompt-improver",
    name: "claude-code-prompt-improver",
    category: "Automation",
    description:
      "Intelligent prompt improver hook for Claude Code — type vibes, ship precision.",
    repoUrl: "https://github.com/anthropics/claude-code-prompt-improver",
  },
  {
    id: "claude-code-remote",
    name: "Claude-Code-Remote",
    category: "Notifications",
    description:
      "Control Claude Code remotely via email — start tasks locally, get notified when Claude finishes, and send new commands by replying to emails.",
    repoUrl: "https://github.com/anthropics/Claude-Code-Remote",
  },
  {
    id: "claude-code-hooks-multi-agent-observability",
    name: "claude-code-hooks-multi-agent-observability",
    category: "Dev Tools",
    description:
      "Real-time monitoring for Claude Code agents through simple hook event tracking.",
    repoUrl: "https://github.com/anthropics/claude-code-hooks-multi-agent-observability",
  },
  {
    id: "tweakcc",
    name: "tweakcc",
    category: "Dev Tools",
    description:
      "Command-line tool to customize your Claude Code styling.",
    repoUrl: "https://github.com/anthropics/tweakcc",
  },
  {
    id: "claude-code-hooks-mastery-disler",
    name: "claude-code-hooks-mastery (disler)",
    category: "Automation",
    description:
      "Covers all hook events — prompt-level control, intelligent TTS, security enhancements, automatic logging, chat transcript extraction, and a builder/validator agent pattern.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
  {
    id: "claude-code-hooks-karanb192",
    name: "claude-code-hooks (karanb192)",
    category: "Security",
    description:
      "Tested, documented hooks covering safety (blocking dangerous commands, protecting secrets), automation (auto-staging git files after edits), and notifications.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "sub-agents",
    name: "sub-agents",
    category: "Automation",
    description:
      "Simple manager for adding Claude Code sub-agents with hooks and custom slash commands.",
    repoUrl: "https://github.com/anthropics/sub-agents",
  },
  {
    id: "claude-code-audio-hooks",
    name: "claude-code-audio-hooks",
    category: "Notifications",
    description:
      "Audio notification system that plays sound alerts when Claude finishes responding, with 26 hook events, 2 audio themes, rate-limit alerts, webhooks, and TTS.",
    repoUrl: "https://github.com/ChanMeng666/claude-code-audio-hooks",
  },
]
