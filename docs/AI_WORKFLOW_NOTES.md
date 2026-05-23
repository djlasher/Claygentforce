# AI Workflow Notes

Claygentforce is being built with AI-assisted planning, documentation, development, and review.

This file documents how AI tools are used in the project so the process is repeatable, inspectable, and useful for future sessions.

The goal is not to hide AI usage. The goal is to use AI intentionally, document the workflow, and preserve important context in the repository.

---

## Purpose

AI tools are used in Claygentforce to help:

- plan the project structure
- scaffold documentation
- define role-based agent behavior
- create reusable prompts
- reduce repeated context setup
- assist with Salesforce architecture thinking
- draft implementation plans
- troubleshoot setup issues
- review tradeoffs
- support future code and metadata generation

This project treats AI as a delivery assistant, not an autopilot.

Human review remains required for project direction, architecture, security, and implementation decisions.

---

## Current AI Tooling Pattern

The current workflow uses multiple AI-assisted tools for different purposes.

### ChatGPT

Used for:

- project planning
- documentation drafting
- architecture discussion
- debugging support
- prompt design
- simulation design
- troubleshooting Git/GitHub/SFDX setup
- deciding what should be built next

ChatGPT is especially useful for broad reasoning, sequencing work, and creating reusable project context.

### Codex

Intended for:

- editing repository files when intentionally used
- implementing code changes
- creating tests
- making small, reviewable commits
- following instructions from project documentation
- reducing manual file-editing work

Codex should be given clear, scoped tasks and should reference existing documentation before making changes.

Codex is optional for this project workflow. Manual file editing is preferred when the goal is to preserve tokens, avoid unnecessary tool usage, or keep the human builder closely involved in project setup.

### GitHub Copilot

Intended for:

- in-editor code completion
- local development support
- small refactors
- Apex/LWC assistance
- test scaffolding
- syntax help

Copilot should be treated as an assistant inside the IDE, not as the final reviewer.

### GitHub

Used for:

- source control
- commit history
- repository documentation
- project visibility
- future issue tracking
- future pull request review workflows

---

## Documentation-First AI Workflow

Claygentforce intentionally stores important project context inside the repository.

This reduces the need to repeatedly explain the same project details in every AI session.

Instead of relying only on chat history, the project keeps durable context in files such as:

- docs/PROJECT_VISION.md
- docs/AGENT_ROLES.md
- docs/DELIVERY_SIMULATION_LOOP.md
- docs/ARCHITECTURE.md
- docs/DEVLOG.md
- docs/ISSUES_LOG.md
- docs/AI_WORKFLOW_NOTES.md
- prompts/*.md

This makes future AI-assisted work easier because tools can be directed to read the relevant files before making changes.

---

## Token-Saving Strategy

A key project workflow is to avoid repeatedly pasting long explanations into AI tools.

Instead, the repository should contain reusable context files that can be referenced by short prompts.

Example prompt:

Read docs/PROJECT_VISION.md, docs/ARCHITECTURE.md, and docs/DELIVERY_SIMULATION_LOOP.md. Then propose the next small implementation task.

This is better than re-explaining the entire Claygentforce concept each time.

The project should continue creating reusable files for:

- role instructions
- scenario templates
- architecture decisions
- coding conventions
- troubleshooting notes
- validation commands
- release checklists

---

## Manual Setup Workflow

Early project setup used ChatGPT to generate the documentation structure, file contents, troubleshooting notes, and next-step sequencing.

This workflow was useful because it allowed the project to build durable repository context before spending implementation time or Codex tokens.

The pattern:

1. Use ChatGPT to plan the file structure.
2. Manually create or edit files locally.
3. Commit small pieces frequently.
4. Push to GitHub.
5. Have ChatGPT inspect the repository through GitHub.
6. Continue with the next small file or repair.
7. Document issues immediately when they appear.

This keeps the process interactive and reviewable.

It also prevents the project from depending entirely on one AI tool or one long chat context.

---

## Prompt Design Principles

Prompts used for this project should be:

- specific
- scoped
- grounded in repository files
- clear about expected output
- clear about what not to change
- small enough to review
- written so changes can be committed cleanly

Good prompt pattern:

Read specific files. Update one specific file. Do not modify Salesforce metadata. Keep the change documentation-only. Summarize what changed and list validation steps.

Poor prompt pattern:

Build the whole simulator.

The project should favor small, reviewable tasks.

---

## Recommended Prompt Header

When asking an AI tool to work on Claygentforce, start with a short context header:

You are helping build Claygentforce, a Salesforce technical architect simulation and enablement project.

Before making changes, read:
- docs/PROJECT_VISION.md
- docs/ARCHITECTURE.md
- docs/DELIVERY_SIMULATION_LOOP.md
- docs/AGENT_ROLES.md

Make the smallest useful change and explain what changed.

---

## Suggested Codex Task Pattern

Use Codex only when it is useful for file-based work with clear boundaries.

Example:

Read docs/PROJECT_VISION.md, docs/ARCHITECTURE.md, and docs/AGENT_ROLES.md.

Create a new file at scenarios/001-case-escalation/SCENARIO_BRIEF.md.

The scenario should follow the delivery loop in docs/DELIVERY_SIMULATION_LOOP.md and focus on Case escalation and manager visibility.

Do not modify force-app yet.

This gives Codex enough context while preventing it from overbuilding.

---

## Suggested ChatGPT Task Pattern

Use ChatGPT for planning, sequencing, review, and documentation support.

Example:

Review the current Claygentforce docs and suggest the next three smallest commits. Keep the plan focused on documentation and prompt scaffolding before Salesforce metadata.

ChatGPT is useful for deciding what to do next before asking another tool to make repository changes.

---

## Suggested GitHub Copilot Pattern

Use Copilot inside VS Code for local development assistance.

Best uses:

- generating small Apex snippets
- completing test methods
- helping with LWC syntax
- refactoring repetitive code
- explaining syntax
- assisting with comments or README edits

Copilot output should still be reviewed against:

- requirements
- architecture notes
- Salesforce limits
- security expectations
- test coverage needs

---

## Human Review Rule

No AI-generated output should be accepted blindly.

Before committing AI-assisted work, check:

- Does it support the project vision?
- Does it follow the architecture?
- Is it appropriately scoped?
- Did it modify files it should not have modified?
- Is the documentation accurate?
- Are assumptions called out?
- Does the implementation make Salesforce sense?
- Are security and deployment implications considered?

---

## Repository Context as Project Memory

The repository is the source of truth for durable project context.

Chat sessions are useful, but they are temporary and can become long, expensive, or difficult to search.

The repo should hold:

- what the project is
- why decisions were made
- what issues occurred
- what work was completed
- what comes next
- how AI tools should be used
- how future contributors should understand the system

This is especially important because Claygentforce itself is an AI-assisted learning simulator.

The build process should model the same discipline the product is trying to teach.

---

## Current Workflow Lessons

Early setup showed several useful lessons:

1. Create repo context before implementation.
2. Keep documentation files at the root-level docs/ folder, not inside force-app.
3. Keep AI prompt files outside Salesforce metadata.
4. Track setup issues immediately.
5. Prefer small commits.
6. Use the repo to reduce repeated prompting.
7. Validate Git/SFDX basics before building features.
8. Do not let tooling friction disappear from memory.
9. Avoid nested Markdown fences when manually copying large files from chat.
10. Chunk large documentation updates when manual copy/paste is preferred.

---

## Known Tooling Issues

A Windows Credential Manager / Git Credential Manager issue caused repeated GitHub authentication popups and credential write failures.

The workaround is documented in:

docs/ISSUES_LOG.md

A Markdown copy/paste issue caused some files to be truncated when large Markdown blocks included nested code fences.

The fix is to use one of these safer approaches:

- chunk large files into smaller sections
- avoid nested code fences inside copy blocks
- use plain text examples instead of fenced examples
- manually verify file endings after pushing
- optionally use Codex or local file scripts when appropriate

---

## Future Improvements

Potential future improvements:

- create reusable prompt headers
- create Codex instruction templates
- create scenario generation prompts
- create review prompts for each agent role
- create pull request review checklists
- create architecture decision record templates
- create validation command snippets
- define a standard commit workflow
- explore whether selected AI prompts should become part of the simulator itself

---

## Guiding Principle

AI should reduce friction without removing ownership.

Claygentforce should use AI to accelerate learning, documentation, implementation, and review while keeping the learner responsible for judgment, tradeoffs, and final decisions.