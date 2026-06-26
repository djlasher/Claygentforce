# Issues Log

This file tracks setup problems, tool friction, confusing errors, and the fixes/workarounds used while building Claygentforce.

---

# 2026-06-21 — Launcher-only deploy validation hit Flow version limit

## Symptoms

A deployment validation for launcher/orchestration-only work failed with:

`Error in Scenario001_Case_High_Risk_Flagging - We couldn't create a new flow version because you reached the maximum number of versions for this flow.`

The active work only changed the `scenarioLauncher` Lightning Web Component bundle and local orchestration JavaScript modules. The Flow was not being intentionally changed.

## Cause

The validation command used the full Scenario 001 manifest:

`manifest/scenario-001-package.xml`

That manifest includes `Scenario001_Case_High_Risk_Flagging`. Even when the current work is launcher-only, validating or deploying a manifest that includes the Flow attempts to create another Flow version. The org had already reached the maximum number of versions for that Flow.

## Fix

A launcher-only manifest was added:

`manifest/scenario-launcher-package.xml`

It includes only:

- `LightningComponentBundle: scenarioLauncher`

Launcher-only validation and deployment should use:

`sf project deploy validate --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce`

`sf project deploy start --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce`

The full Scenario 001 manifest remains available for full scenario deployments, but should not be used for normal launcher-only LWC iterations.

## Lesson Learned

Do not validate or deploy the full Scenario 001 manifest for launcher-only work.

Use the narrowest manifest that matches the work being changed. Flow metadata is versioned during deployment, so including a Flow in routine validations can consume Flow versions and eventually block deployment even when the Flow behavior is not changing.

When Flow work is actually needed again, clean up old Flow versions in the org before attempting another Flow deployment.

---

# 2026-06-21 — Local role-agent Team Challenge rendered duplicate challenge buttons

## Symptoms

During visual testing of the Scenario 001 launcher, the Team Challenge message rendered the challenge response choices twice:

- once as raw/default buttons inside the Team Challenge bubble
- once as the intended styled buttons inside the dedicated challenge response prompt

The UI also still showed a `Simulation note`, which felt like fake LWC content rather than a role-agent output, and some challenge-response wording made the intended path feel unclear.

## Cause

The local role-agent orchestration refactor spread the full `rolePushback` object into the Team Challenge message. That object included `challengeResponses`.

The template renders response buttons whenever a chat message has `challengeResponses`, so the Team Challenge bubble accidentally received interactive response choices. The dedicated challenge prompt also received the same response choices, causing duplicate rendering.

Separately, the coordinator guidance still used simulation-note labeling even though the architecture had moved toward local role-agent task routing.

## Fix

The role-agent message builder now strips `challengeResponses` from the Team Challenge message before rendering it. Challenge response choices remain only on the dedicated challenge response prompt.

The former simulation note is now routed through the local coordinator role-agent task and displays as `Delivery Coordinator` with a `Local coordinator task` label.

The challenge response copy was tightened so the two response paths are clearer:

- `Add targeted validation` means turn the challenge into a concrete validation step now.
- `Capture follow-up risk` means record the unresolved risk, owner, and trigger for release review rather than treating it as validated.

## Lesson Learned

Interactive options should be attached only to the prompt that owns the interaction, not to role feedback messages.

As orchestration grows, role-agent outputs need normalized message shapes that separate:

- message content
- task metadata
- interactive choices
- follow-up state

This prevents future local-agent or Agentforce-backed responses from accidentally rendering controls in the wrong place.

---

# 2026-06-02 — Lightning App Page tab did not appear in custom app navigation

## Symptoms

After adding the `scenarioLauncher` LWC, `Claygentforce_Home` FlexiPage, and `Claygentforce` custom application, the Claygentforce app opened successfully but still showed the default Salesforce Home page instead of the custom launcher page.

The custom Lightning Page tab existed and pointed to the correct `Claygentforce_Home` page, but it did not initially appear as a visible navigation item in the Claygentforce app. Profile tab visibility also needed adjustment before the custom tab could be used normally.

## Cause

Creating or deploying a FlexiPage does not automatically replace the standard Salesforce Home tab for a Lightning app.

The launcher needed an explicit Lightning Page custom tab and the app navigation needed to include that tab. Some of the required app navigation state was easiest to establish through the Salesforce UI, then retrieve back into source control.

## Fix

The custom launcher page was stabilized by:

- creating/source-controlling `Claygentforce_Home.tab-meta.xml`
- confirming the tab points to the `Claygentforce_Home` FlexiPage
- setting the tab visible for the System Administrator profile
- adding the `Claygentforce Home` tab through the app navigation UI
- retrieving the updated app metadata back into source control
- confirming `Claygentforce.app-meta.xml` includes `Claygentforce_Home` between `standard-home` and `standard-Case`
- adding `Claygentforce_Home` as a `CustomTab` member in `manifest/scenario-001-package.xml`

After the retrieve, the deploy validation succeeded with:

`sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce`

## Lesson Learned

For Lightning App Page launcher surfaces, source control should include all three pieces when possible:

- the FlexiPage
- the Lightning Page custom tab
- the custom application navigation entry

If an app page is created but not visible in the app, check tab visibility and app navigation before assuming the LWC or FlexiPage failed.

---

# 2026-05-31 - Flow metadata clearing values failed deployment

## Symptoms

Scenario 001 Flow deployments failed when the Flow metadata tried to clear `High_Risk_Reason__c` using Salesforce global constants:

- `$GlobalConstant.EmptyString`
- `$GlobalConstant.Null`

The failures appeared during metadata deployment even though the intended Flow behavior was simple field clearing.

## Cause

Salesforce Flow metadata handling for clearing field values can be inconsistent when assignments reference those global constants directly. The issue affected the generated Flow XML rather than the scenario logic.

## Fix

For Flow field-clearing assignments, use an explicit empty string value in the metadata:

`<stringValue></stringValue>`

This preserves the clearing behavior without relying on global constant references that can fail deployment.

## Lesson Learned

For future Flow metadata work, avoid `$GlobalConstant.EmptyString` and `$GlobalConstant.Null` in field-clearing assignments. Prefer explicit empty `<stringValue></stringValue>` assignments when the goal is to clear string or picklist-like values through Flow XML.

---

# 2026-05-29 — Salesforce DX, Codex, and AI workflow friction

## Symptoms

Several unrelated setup and workflow issues appeared during the first real Scenario 001 implementation session:

- `sf` was not recognized by Windows or VS Code.
- Node and npm were not initially available.
- PowerShell blocked npm because script execution was disabled.
- `npm run lint` failed before project dependencies were installed.
- Codex generated LWC changes in its own `work/Claygentforce` checkout instead of the user's active local repository.
- AI guidance started repeating too much project setup, command, and workflow context across prompts and docs.
- ChatGPT briefly conflated different repository states instead of checking the repo first.

## Cause

This was a combination of local environment setup gaps and AI workflow drift.

The local machine needed Salesforce CLI, Node/npm, PowerShell execution policy adjustment, and npm dependency installation before the Salesforce DX/LWC workflow was smooth.

Separately, Codex operated in a separate workspace, which made it look like files were edited even though the user's active local checkout did not contain the changes.

The documentation process also began duplicating context across multiple AI-facing files instead of keeping each file focused on a specific audience.

## Fix

The local environment was stabilized:

- Salesforce CLI was installed and verified.
- The Claygentforce org was authorized successfully.
- Node and npm were installed and verified.
- PowerShell execution policy was updated for the current user.
- `npm install` was run successfully.
- `npm run lint` completed successfully.

The AI workflow docs were refocused:

- `docs/AI_SESSION_STARTER.md` is now ChatGPT's project rehydration and current-state memory file.
- `docs/AI_COMMANDS_AND_WORKFLOWS.md` is now Codex/task-execution guidance.
- No new redundant Codex context file was created.
- Future Codex prompts should stay short and point to the existing task guidance file plus the specific files being edited.

The Codex workspace issue remains important:

- If Codex edits a separate workspace, the changed files must be copied back into `D:\Github Repos\Claygentforce` before validation, deployment, commit, and push.
- Repository inspection through GitHub should be used to verify what actually landed on `main`.

## Lesson Learned

AI assistance needs the same kind of architecture discipline as Salesforce metadata.

Keep AI-facing documentation separated by purpose:

- ChatGPT memory/current state belongs in `AI_SESSION_STARTER.md`.
- Codex implementation conventions belong in `AI_COMMANDS_AND_WORKFLOWS.md`.
- Devlog entries should be milestone-oriented, not one entry per tiny file change.
- Issues should capture real friction, but not every transient hiccup.

Before assuming work is complete, verify which workspace was edited and whether the intended files actually reached the repository.

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
