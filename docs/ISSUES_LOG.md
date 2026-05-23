# Issues Log

This file tracks setup problems, tool friction, confusing errors, and the fixes/workarounds used while building Claygentforce.

---

# 2026-05-23 — GitHub credential popup / Windows Credential Manager failure

## Symptoms

- VS Code and Codex/Git operations repeatedly triggered GitHub authentication popups.
- GitHub Desktop also showed a memory/resource-related error.
- Repository itself was healthy:
  - `git status` clean
  - branch `main`
  - up to date with `origin/main`
- Remote used HTTPS.

## Diagnosis

`git credential-manager diagnose` reported:

```text
[FAIL] Credential storage
Failed to write item to store. [0x8]
Not enough memory resources are available to process this command
```

---

# 2026-05-23 — Markdown copy/paste truncation from nested code fences

## Symptoms

Several Markdown files appeared to be saved successfully but were actually cut off partway through the content.

The issue affected files that were manually copied from ChatGPT responses containing large Markdown blocks with nested fenced examples.

Confirmed truncated files:

- docs/ARCHITECTURE.md
- docs/AI_WORKFLOW_NOTES.md
- prompts/architect-agent.md
- prompts/ba-agent.md

The issue was caught during repository review when file endings did not match the expected final sections.

## Cause

The chat UI treated nested Markdown code fences inside a larger copy block as the end of the copyable block.

This caused the visible response to continue after the copy block, but the copied file content stopped early.

## Fix

The affected files were repaired by replacing or appending content in smaller chunks.

For future manual copy/paste work:

- avoid nested Markdown code fences inside large copy blocks
- use plain text examples instead of fenced examples
- chunk large files into smaller sections
- verify file endings after pushing
- scan repaired files from GitHub before continuing

## Lesson Learned

When using AI to generate repository documentation, the output format matters as much as the content.

Large documentation updates should be chunked and verified before moving on.

GitHub Connector Behavior Notes

- GitHub access may appear to disconnect during long sessions.
- Reconnection now occurs through Add Sources and the GitHub App flow.
- The repository itself remains unaffected.
- The ChatGPT Codex Connector GitHub App may need repository access granted manually.
- Repo context may not persist identically across long-running conversations.