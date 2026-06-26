# AI Session Starter

This file is for ChatGPT session rehydration.

Read this first before helping with Claygentforce so the assistant remembers the current project state, avoids repeating completed setup work, and does not confuse Claygentforce with earlier sandbox projects.

---

## Current Product Direction

Claygentforce has pivoted.

Do **not** treat it primarily as a Salesforce metadata-building simulator anymore.

The current product is best understood as:

> A multi-perspective Salesforce consulting judgment simulation platform.

Core concept:

> Trailhead teaches implementation. Claygentforce teaches consulting judgment.

The primary learner experience is now the **Salesforce Delivery War Room**, where a learner experiences a realistic consulting engagement through a selected professional perspective, makes bounded decisions, watches the room react, and receives a professional assessment.

Current architecture:

> Scenario → Professional Perspective → Decision Tree → Dynamic Team Reactions → War Room Assessment

Scenario 001 remains the active proving ground. The Case fields, Flow, list view, permission set, Case panel, and other Salesforce artifacts are now grounding/reference material and proof-of-concept assets, not the main product surface.

---

## Repository / Environment

Repository:

`djlasher/Claygentforce`

Do not confuse it with:

`djlasher/Multi-Agent-Volume-1-RPG`

Local repo path used by the user:

`D:\Github Repos\Claygentforce`

Salesforce org alias:

`Claygentforce`

Launcher-only validation/deployment manifest:

`manifest/scenario-launcher-package.xml`

Use the full Scenario 001 manifest only for full metadata work:

`manifest/scenario-001-package.xml`

Avoid using the full manifest for launcher-only work because it includes the Flow and can hit the org Flow version limit.

---

## Current MVP State

Primary UI:

**Salesforce Delivery War Room** in the `scenarioLauncher` LWC.

Current playable perspectives:

- Technical Architect
- QA Lead

Future role cards are visible but disabled/collapsible, including roles such as:

- Business Analyst
- Security Reviewer
- DevOps Engineer
- Delivery Coordinator
- Solution Architect
- Enterprise Architect
- Data Architect
- Agentforce Engineer
- OmniStudio Developer
- Product Owner
- Client Executive

The same Scenario 001 engagement can now be experienced through different professional lenses. Do not add Scenario 002 yet unless explicitly asked; the near-term priority is more perspectives on Scenario 001.

---

## Current Working Features

The War Room currently includes:

- stakeholder/client ask that starts the conversation
- delayed chat transcript rendering
- typing indicators
- professional participant names and role titles
- grouped/collapsible role selection
- playable Technical Architect perspective
- playable QA Lead perspective
- perspective-specific decision options
- professional learner decision phrasing
- dynamic participant reactions based on choices
- reaction states: Positive, Concerned, Neutral, Blocked
- perspective-specific assessment dimensions
- War Room metadata header
- War Room Assessment with delivery confidence, team consensus, risk level, team sentiment, strengths, risk areas, recommended next action, and numeric score
- reset/restart behavior
- classic bounded run retained as secondary/collapsible reference
- supporting context retained as secondary/collapsible reference

Important UX lessons from 2026-06-26:

- The War Room visual is now demo-ready.
- Chat pacing currently feels good; do not change timing unless explicitly asked.
- Gray inset educational/note boxes inside War Room chat bubbles were removed because they broke immersion.
- The Architecture Reviewer label was removed from the Technical Architect path because even that felt like a duplicate TA. When the learner owns a role, that role should not appear as another active NPC.

---

## Role Ownership Rule

If the learner owns a role, that role must not appear as a duplicate NPC in the active War Room transcript.

Examples:

Technical Architect learner:

- You = Technical Architect
- No separate Technical Architect NPC should appear
- No Architecture Reviewer replacement is currently needed unless future design explicitly calls for a mentor/reviewer

QA Lead learner:

- You = QA Lead
- Technical Architect can appear normally as an NPC participant

Future Security Reviewer learner:

- You = Security Reviewer
- Security Reviewer NPC should not appear
- Technical Architect and QA Lead can appear normally as NPC participants

This rule is foundational for future perspectives.

---

## Current Launcher / Bundle Files

Current launcher bundle:

`force-app/main/default/lwc/scenarioLauncher/`

Important files:

- `scenarioLauncher.html`
- `scenarioLauncher.js`
- `scenarioLauncher.css`
- `scenarioLauncher.js-meta.xml`
- `scenarioCatalog.js`
- `deliveryRoomOrchestrator.js`
- `deliveryRoomAgents.js`
- `deliveryRoomPlan.js`
- `deliveryRoomAdapter.js`
- `deliveryRoomChatDemo.js`

`deliveryRoomChatDemo.js` now contains much of the War Room demo model, including role options, role profiles, perspective-specific decision data, reaction data, timing helpers, transcript normalization, and assessment summary logic.

`scenarioLauncher.js` should remain mostly a renderer/controller: local UI state, reset/selection handlers, transcript queueing, and run-model getters.

---

## Current Scenario 001 Grounding Artifacts

Scenario 001:

`Case Escalation and Manager Visibility`

Current Salesforce implementation includes:

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`
- `Case.High_Risk_Override__c`
- `Case.Customer_Tier__c`
- `Open High-Risk Cases` list view
- `Case-Case Layout` with the `Claygentforce Scenario 001` section
- `Claygentforce Support Manager` permission set
- `Scenario001_Case_High_Risk_Flagging` before-save Case Flow
- `Case_Record_Page` FlexiPage with the Scenario 001 Case risk panel
- `scenario001CaseRiskPanel` Lightning Web Component
- `scenarioPreviewSection` child Lightning Web Component
- `scenarioLauncher` exposed Lightning Web Component
- `Claygentforce` custom application
- `Claygentforce_Home` FlexiPage and custom tab
- Scenario 001 smoke-test and run artifacts

These remain valuable, but do not re-center the product on demonstrating the Flow or Case-object build unless explicitly asked.

---

## Workflow Convention

The user often completes local work, validates/deploys, commits, pushes, and then sends:

`k`

When the user sends `k`:

1. Inspect the repository through GitHub.
2. Verify the relevant commit/files.
3. Do not update docs unless the user asks or the change is a clear milestone.
4. Do not ask for obvious file paths.
5. Do not create a devlog entry for every small change.
6. Prefer milestone-oriented documentation updates.

Documentation ownership:

- Codex focuses on implementation work.
- ChatGPT updates `DEVLOG.md`, `ROADMAP.md`, `AI_SESSION_STARTER.md`, and roadmap-style docs when needed or when the user asks.
- Do not ask Codex to maintain docs unless the task is explicitly documentation-only.
- No issue-log update is needed unless there is real friction, a deployment problem, or a lesson worth preserving.

User command preference:

- Provide copyable command blocks.
- Do not include `cd` commands; user is already in `D:\Github Repos\Claygentforce`.
- Split commands into three blocks: validation, deploy, git.
- Do not include standalone `git status` in standard command blocks.

---

## Near-Term Priorities

1. Add Security Reviewer perspective on Scenario 001.
2. Add Business Analyst perspective on Scenario 001.
3. Add DevOps perspective on Scenario 001.
4. Deepen dynamic disagreement patterns.
5. Track participant confidence across multiple decisions.
6. Add adaptive participant follow-up questions.
7. Keep Scenario 002 deferred until the multi-perspective model is stronger.

Do not prioritize new Salesforce metadata unless it directly improves the War Room simulation or scenario grounding.

---

## Do Not Reintroduce

Avoid shifting the project back toward:

- metadata-building demos
- Flow-building walkthroughs
- object-configuration walkthroughs
- broad static dashboards
- generic chatbot behavior
- unbounded freeform chat input
- live AI calls without a bounded simulation contract

The War Room simulation is now the product.

---

## Latest Stable Demo State

As of the end of the 2026-06-26 session, the user considered the War Room demo:

> AMAZING and PERFECT

The latest accepted behavior:

- Technical Architect perspective works.
- QA Lead perspective works.
- Dynamic War Room reactions work.
- War Room Assessment works.
- The Architecture Reviewer replacement was removed, and that is preferred.
- The demo is ready to show.

Next session should resume from this state without re-explaining the pivot.