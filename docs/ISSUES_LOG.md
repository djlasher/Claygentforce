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

The repository was not the root problem. Git operations could see the repo state, but the local Git Credential Manager / Windows Credential Manager flow could not reliably store or retrieve credentials.

## Cause

The likely cause was a local Windows Credential Manager or Git Credential Manager storage failure, not a GitHub repository permission problem.

Because the remote used HTTPS, Git needed a valid stored credential or fresh authentication token. When credential storage failed, GitHub authentication prompts repeated even though the repository, branch, and remote configuration were otherwise correct.

## Fix

The immediate workaround was to continue repository work through tools that still had working GitHub access, including GitHub Desktop, manual pushes when available, and ChatGPT/GitHub connector edits once the connector was working.

Recommended local fixes if the problem returns:

1. Restart Windows to clear temporary credential-manager or memory-resource issues.
2. Open Windows Credential Manager and remove stale GitHub/Git credentials if they appear corrupted.
3. Re-authenticate GitHub Desktop or VS Code.
4. Run `git credential-manager diagnose` again to confirm credential storage passes.
5. Consider switching the repository remote from HTTPS to SSH if HTTPS credential storage continues to fail.

## Lesson Learned

Repeated GitHub login prompts do not always mean the repo, remote, or GitHub permissions are wrong.

When Git operations can read repository state but cannot persist authentication, check the local credential manager before rebuilding project setup or changing repository configuration.

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

---

# 2026-05-23 — GitHub connector appeared disconnected after app installation

## Symptoms

During a long documentation and repository setup session, ChatGPT temporarily lost the ability to browse the Claygentforce repository even though GitHub had previously been connected.

The ChatGPT UI showed GitHub under Apps, but the app status appeared as setup incomplete or did not clearly show the repository as attached to the current chat.

The user could still push commits locally, but ChatGPT could not reliably fetch repository files until the connector was reattached.

## Cause

The issue appeared to involve two separate connection layers:

- account-level GitHub App installation and authorization
- conversation-level repository/source attachment

The GitHub App was installed correctly, but the active chat session did not immediately expose repository browsing tools until the connector state refreshed and the Claygentforce repository was selected again.

## Fix

The user reconnected through the newer GitHub connector flow:

1. Open ChatGPT settings.
2. Go to Apps.
3. Select GitHub.
4. Install or configure the ChatGPT Codex Connector in GitHub.
5. Grant repository access.
6. Select the `djlasher/Claygentforce` repository.
7. Return to the chat and confirm ChatGPT can fetch repository files again.

After reconnecting, ChatGPT confirmed access to:

- `djlasher/Claygentforce`
- default branch `main`
- repository permissions including read and write access

## Lesson Learned

GitHub App installation and active chat source attachment are related but not always the same thing.

In long sessions, connector state may need to be refreshed or reattached even if the GitHub App is already installed correctly.

When repository visibility seems unavailable, verify both:

- the GitHub App is installed and has repository access
- the current chat can actively fetch files from the intended repository
