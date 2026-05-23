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

- editing repository files
- implementing code changes
- creating tests
- making small, reviewable commits
- following instructions from project documentation
- reducing manual file-editing work

Codex should be given clear, scoped tasks and should reference existing documentation before making changes.

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

- `docs/PROJECT_VISION.md`
- `docs/AGENT_ROLES.md`
- `docs/DELIVERY_SIMULATION_LOOP.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVLOG.md`
- `docs/ISSUES_LOG.md`
- `docs/AI_WORKFLOW_NOTES.md`
- `.claygentforce/prompts/*.md`

This makes future AI-assisted work easier because tools can be directed to read the relevant files before making changes.

---

## Token-Saving Strategy

A key project workflow is to avoid repeatedly pasting long explanations into AI tools.

Instead, the repository should contain reusable context files that can be referenced by short prompts.

Example:

```text
Read docs/PROJECT_VISION.md, docs/ARCHITECTURE.md, and docs/DELIVERY_SIMULATION_LOOP.md. Then propose the next small implementation task.