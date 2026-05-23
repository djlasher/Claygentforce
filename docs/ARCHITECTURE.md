# Architecture

Claygentforce is an SFDX-based Salesforce project and documentation-driven AI simulation framework.

The current architecture is intentionally lightweight. The project should first establish reusable documentation, role definitions, simulation flow, and AI prompt structure before adding complex Salesforce metadata or application automation.

---

## Architecture Goals

Claygentforce should support three architecture goals:

1. Maintain a valid Salesforce DX project structure.
2. Preserve reusable context for humans and AI tools.
3. Enable repeatable Salesforce delivery simulations through documented agents, prompts, scenarios, and review loops.

The initial architecture prioritizes clarity and iteration speed over platform complexity.

---

## Current Repository Structure

Claygentforce/
  force-app/
  manifest/
  docs/
    PROJECT_VISION.md
    AGENT_ROLES.md
    DELIVERY_SIMULATION_LOOP.md
    ARCHITECTURE.md
    DEVLOG.md
    ISSUES_LOG.md
    AI_WORKFLOW_NOTES.md
  prompts/
    architect-agent.md
    ba-agent.md
    qa-agent.md
    devops-agent.md
    security-agent.md
  sfdx-project.json
  README.md
  .gitignore

---

## Root-Level Structure

### force-app/

Contains Salesforce source metadata.

This should be reserved for deployable Salesforce metadata, such as:

- Apex classes
- Lightning Web Components
- Flows
- Custom Objects
- Permission Sets
- Custom Metadata
- Reports or Dashboards if needed
- Other Salesforce metadata required by scenarios

Non-deployable planning documents should not be placed inside force-app.

### manifest/

Contains package manifests used for Salesforce deployment and retrieval.

The project was initialized as an SFDX project with manifest support. This is useful for controlled retrieval, deployment, and validation as the project grows.

### docs/

Contains human-readable project documentation.

This folder acts as the project memory layer. It stores vision, architecture, delivery process, agent roles, issue history, AI workflow notes, and future design decisions.

The docs folder should be treated as a first-class part of the project, not an afterthought.

### prompts/

Contains Claygentforce-specific AI workflow assets.

This folder is for internal project guidance, reusable prompt files, role instructions, scenario seeds, and future AI orchestration notes.

It is intentionally separate from force-app because these files are not Salesforce metadata.

---

## Documentation Architecture

The documentation layer is the first major system component.

It provides stable context for:

- the human builder
- ChatGPT
- Codex
- GitHub Copilot
- future AI agents
- future contributors
- portfolio reviewers

The documentation layer reduces repeated prompting and helps future AI tools understand the project quickly.

### Current Documentation Files

| File | Purpose |
|---|---|
| docs/PROJECT_VISION.md | Defines the product idea, why it exists, learning goals, principles, and long-term direction. |
| docs/AGENT_ROLES.md | Defines the simulated Salesforce delivery roles and their responsibilities. |
| docs/DELIVERY_SIMULATION_LOOP.md | Defines the repeatable delivery learning loop. |
| docs/ARCHITECTURE.md | Defines the repository and system architecture. |
| docs/DEVLOG.md | Tracks development progress and project milestones. |
| docs/ISSUES_LOG.md | Tracks setup issues, tool problems, errors, and fixes. |
| docs/AI_WORKFLOW_NOTES.md | Documents how AI tools are used in the project workflow. |

---

## AI Context Architecture

Claygentforce is designed to work well with AI-assisted development.

The project should store enough context in files that future AI tools can operate with shorter, more precise prompts.

Instead of repeatedly explaining the entire project in chat, the repository should contain:

- project vision
- agent role definitions
- simulation loop
- architecture notes
- issue history
- AI workflow notes
- prompt files
- coding conventions
- scenario templates
- development logs

This creates a durable project memory that is independent of any single chat session.

### Intended AI Tool Roles

| Tool Type | Intended Use |
|---|---|
| ChatGPT | Planning, architecture, documentation, scenario design, debugging support, prompt refinement. |
| Codex | Code implementation, file edits, test scaffolding, repository updates when intentionally used. |
| GitHub Copilot | In-editor code completion, refactoring assistance, local development support. |
| Future agents | Role-based simulation, scenario orchestration, automated review, feedback generation. |

---

## Simulation Architecture

At the conceptual level, a simulation contains:

Scenario
  -> Stakeholder Intake
  -> Requirements Clarification
  -> Architecture Review
  -> Implementation Plan
  -> Build Task
  -> QA Review
  -> Security Review
  -> DevOps Review
  -> UAT / Stakeholder Review
  -> Outcome Feedback
  -> Retrospective

Each simulation should produce artifacts that can be reviewed later.

Potential simulation artifacts include:

- scenario brief
- user stories
- acceptance criteria
- architecture decision record
- metadata change list
- QA test plan
- security review notes
- deployment checklist
- release notes
- incident report
- retrospective notes
---

## Agent Architecture

Agents are currently prompt-defined roles.

In the first phase, an agent is simply a reusable prompt file that describes:

- role purpose
- responsibilities
- review concerns
- expected outputs
- boundaries
- interaction style

Later, agents may become more automated.

Possible future implementations:

- individual prompt files invoked manually
- local scripts that assemble prompts
- GitHub issue templates that simulate scenarios
- Salesforce records representing scenarios and decisions
- custom metadata defining scenario stages
- LWC interface for running simulations
- external orchestration framework
- multi-agent workflow engine

The project should not prematurely commit to one orchestration model.

---

## Salesforce Metadata Architecture

Salesforce metadata should be added only when it supports a simulation or learning goal.

The first metadata examples should be small and realistic.

Suggested first scenario metadata:

- Case fields
- Case escalation criteria
- Flow or Apex automation
- permission set
- report or list view
- test class if Apex is used
- deployment manifest entries

The project should avoid building random metadata that does not serve the simulator.

---

## Scenario Data Model Concept

Future versions may define a lightweight scenario model.

Potential objects or conceptual records:

| Concept | Purpose |
|---|---|
| Scenario | The top-level simulated business problem. |
| Stage | A step in the delivery loop. |
| Agent Response | Feedback or guidance from a simulated role. |
| Learner Decision | A decision made by the learner. |
| Artifact | A generated output such as user story, ADR, test plan, or deployment checklist. |
| Consequence | Simulated outcome caused by earlier choices. |
| Retrospective Note | Learning summary after the scenario. |

This does not need to be implemented immediately. It is a conceptual architecture for later design.

---

## Review Gates

Each simulation should eventually support review gates.

Suggested gates:

1. Requirements Ready
2. Architecture Ready
3. Build Ready
4. QA Ready
5. Security Ready
6. Deployment Ready
7. Stakeholder Accepted
8. Retrospective Complete

A gate should not simply be a checkbox. It should represent a meaningful review moment where agents may identify gaps or risks.

---

## Error and Issue Tracking

Project issues should be documented as they occur.

Use docs/ISSUES_LOG.md for:

- setup errors
- credential/auth problems
- tool failures
- confusing behavior
- environment problems
- workarounds
- follow-up actions

This keeps project friction visible and reusable.

---

## Development Logging

Use docs/DEVLOG.md for development progress.

The devlog should record:

- dates
- milestones
- files added
- major decisions
- validation steps
- next actions

This helps preserve momentum and makes the project easier to resume after breaks.

---

## Initial Architecture Boundary

For the initial phase, Claygentforce should remain mostly documentation and prompt driven.

Do not rush into:

- complex custom objects
- full UI
- automated multi-agent orchestration
- unnecessary Apex
- large scenario libraries
- packaging decisions
- managed package concerns

The first goal is a clear, reusable foundation.

---

## Near-Term Architecture Roadmap

### Phase 0 — Project Foundation

- SFDX project created
- GitHub repo created
- documentation scaffold created
- issues log created
- project vision defined
- agent roles defined
- simulation loop defined
- architecture documented

### Phase 1 — Prompt and Scenario Foundation

- fill role prompt files
- define first scenario
- create scenario template
- create architecture decision record template
- create QA/security/devops review templates
- create AI workflow notes

### Phase 2 — First Salesforce Scenario

- implement a small Case escalation scenario
- define metadata changes
- add validation steps
- document build/review/release path
- simulate outcome feedback

### Phase 3 — Interactive Simulator Concept

- evaluate whether to build a Salesforce-native UI, external UI, or prompt-driven workflow
- define scenario state model
- define learner decision tracking
- define scoring or feedback approach
- explore agent orchestration options

---

## Guiding Principle

Architecture should serve the learning loop.

Every technical decision should answer this question:

Does this make Salesforce delivery judgment easier to practice, inspect, and improve?

If the answer is no, defer it.