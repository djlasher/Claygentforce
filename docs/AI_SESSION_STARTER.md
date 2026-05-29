# AI Session Starter

This file is the first file an AI assistant should read before helping with Claygentforce.

Its purpose is to reduce repeated prompting, preserve project direction, and prevent future sessions from confusing Claygentforce with earlier sandbox projects.

---

## Project Identity

Claygentforce is a Salesforce delivery team simulation and enablement project.

It is not primarily a game, toy chatbot, or generic AI demo.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice:

- requirements discovery
- architecture decisions
- implementation planning
- admin configuration
- DevOps workflows
- QA review
- security review
- stakeholder tradeoffs
- deployment readiness
- incident response
- retrospective learning

The project should help learners practice Salesforce delivery judgment, not just memorize Salesforce syntax.

---

## Important Context

This repository is:

`djlasher/Claygentforce`

Do not confuse it with:

`djlasher/Multi-Agent-Volume-1-RPG`

The Multi-Agent Volume 1 RPG repo was an earlier Godot/roguelite learning sandbox.

Claygentforce is the more strategically important career-leverage project focused on Salesforce delivery simulation, AI-assisted enablement, and cross-role Salesforce project execution.

---

## Current Repository Type

Claygentforce is a Salesforce DX project with a documentation-first simulation framework.

The repository now includes both durable simulation context and the first small Salesforce metadata increment.

The project intentionally started with:

- project vision
- architecture documentation
- delivery simulation process
- role-based AI prompts
- reusable scenario templates
- scenario artifacts
- devlog and issue log
- AI workflow notes

Salesforce metadata should still be added only when it directly supports a scenario learning or implementation objective.

---

## Documentation Cleanup Status

A repository documentation cleanup pass was completed on 2026-05-29.

Key corrections made:

- shifted project framing away from a technical-architect-only simulator toward a full Salesforce delivery team simulator
- updated repository structure examples to match actual files more closely
- added missing Scenario 001 artifacts to documentation references
- converted major repository structure sections to fenced text blocks so GitHub renders them correctly
- aligned roadmap language with the current org-validation-first approach

When updating docs in the future:

- verify file lists against the actual repository
- avoid leaving placeholder roadmap items after they are completed
- prefer fenced `text` blocks for folder structures
- keep project framing aligned with the full-team simulation vision

---

## Current Best Next Task

Do not continue large documentation-only expansion right now.

The highest-value next milestone is:

1. Authenticate or connect a Salesforce org.
2. Validate `manifest/scenario-001-package.xml`.
3. Fix validation issues.
4. Retrieve or deploy metadata in small scenario-driven increments.
5. Build and review Flow behavior in an org before committing large Flow XML changes.

The project has enough foundational documentation to begin validating the simulator against real Salesforce implementation work.
