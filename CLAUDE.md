# CLAUDE.md

## Isolated copies (git worktrees)

When you need an isolated copy, create git worktrees ONLY under
`/Users/emad/Documents/Dev/Emad/_worktrees/medicalrep/<repo>-<branch>` (here:
`medicalrep-react-<branch>`). After the branch is pushed and merged, remove the worktree
(`git worktree remove`) in the same session. Never create copies inside the medicalrep folder.
