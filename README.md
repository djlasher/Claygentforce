# Claygentforce

Claygentforce is a Salesforce technical architect simulation and enablement project.

The goal is to build a realistic, AI-assisted Salesforce delivery simulator that helps learners practice architecture decisions, implementation planning, DevOps workflows, QA review, security review, stakeholder tradeoffs, and incident response in a safe sandbox environment.

This project is intentionally starting with documentation, role prompts, and reusable project context before building complex Salesforce metadata or automation.

---

## What This Is

Claygentforce simulates a Salesforce delivery team using role-based AI agents.

Each agent represents a different delivery perspective, including:

- Business Analyst
- Technical Architect
- Salesforce Admin
- Salesforce Developer
- QA Engineer
- DevOps Engineer
- Security Reviewer
- Product Owner
- Client Stakeholder
- Incident Commander

The learner interacts with these roles while working through realistic Salesforce delivery scenarios.

The purpose is to practice Salesforce delivery judgment, not just Salesforce syntax.

---

## Why This Exists

Salesforce professionals can learn platform features through documentation, Trailhead, certifications, and project experience.

However, many of the hardest skills are learned through real delivery pressure:

- interpreting unclear requirements
- asking better stakeholder questions
- choosing between imperfect architecture options
- balancing declarative and programmatic solutions
- managing scope and business value
- understanding security and sharing implications
- validating QA and UAT readiness
- planning deployments and rollback
- responding to production incidents
- documenting decisions and lessons learned

Claygentforce is designed to make those experiences repeatable, inspectable, and safe.

---

## Current Project Status

Current status: Phase 0 / early Phase 1.

The project currently includes:

- Salesforce DX project structure
- manifest support
- documentation scaffold
- expanded role prompt set
- issue and development logs
- AI workflow notes
- architecture and simulation loop documentation

The project does not yet contain a full Salesforce application or automated simulator UI.

That is intentional.

The current focus is building a strong foundation before adding metadata or automation.

---

## Repository Structure

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
    admin-agent.md
    architect-agent.md
    ba-agent.md
    client-stakeholder-agent.md
    developer-agent.md
    devops-agent.md
    incident-commander-agent.md
    product-owner-agent.md
    qa-agent.md
    security-agent.md
    simulation-runner.md
  scenarios/
    README.md
    TEMPLATE_SCENARIO/
      README.md
      SCENARIO_BRIEF.md
      STAKEHOLDER_INTAKE.md
      ACCEPTANCE_CRITERIA.md
      ARCHITECTURE_DECISION.md
      QA_REVIEW.md
      SECURITY_REVIEW.md
      DEPLOYMENT_REVIEW.md
      RETROSPECTIVE.md
    001-case-escalation-manager-visibility/
      SCENARIO_BRIEF.md
      STAKEHOLDER_INTAKE.md
      ACCEPTANCE_CRITERIA.md
      ARCHITECTURE_DECISION.md
      QA_REVIEW.md
      SECURITY_REVIEW.md
      DEPLOYMENT_REVIEW.md
      RETROSPECTIVE.md
      IMPLEMENTATION_PLAN.md
  sfdx-project.json
  README.md

---

## Documentation

The docs folder is the project memory layer.

Start here:

- docs/AI_SESSION_STARTER.md — first-read context for future AI-assisted sessions
- docs/PROJECT_VISION.md — product vision and long-term direction
- docs/AGENT_ROLES.md — role definitions for the simulated delivery team
- docs/DELIVERY_SIMULATION_LOOP.md — repeatable delivery simulation flow
- docs/SIMULATION_RUNBOOK.md — operational guide for running simulations
- docs/SIMULATION_RUN_MODES.md — supported simulation modes and run log guidance
- docs/TEMPLATE_STRATEGY.md — strategy for creating and maintaining reusable scenario templates
- docs/ARCHITECTURE.md — repository and conceptual architecture
- docs/AI_WORKFLOW_NOTES.md — how AI tools are used in the project workflow
- docs/ISSUES_LOG.md — setup problems, tool friction, and fixes
- docs/DEVLOG.md — development progress and milestones

---

## Agent Prompt Files

The prompts folder contains reusable role prompts for AI-assisted Salesforce delivery simulations.

Current prompt files:

- prompts/admin-agent.md
- prompts/architect-agent.md
- prompts/ba-agent.md
- prompts/client-stakeholder-agent.md
- prompts/developer-agent.md
- prompts/devops-agent.md
- prompts/incident-commander-agent.md
- prompts/product-owner-agent.md
- prompts/qa-agent.md
- prompts/security-agent.md
- prompts/simulation-runner.md

These prompts define each role’s responsibilities, review concerns, expected outputs, readiness gates, tone, and simulation behavior.

---

## Current Simulation Concept

The initial Claygentforce simulation loop is:

1. Scenario Intake
2. Requirements Clarification
3. Architecture and Tradeoff Review
4. Implementation Planning
5. Build
6. QA Review
7. Security Review
8. DevOps and Release Review
9. Stakeholder / UAT Review
10. Outcome and Consequence Feedback
11. Retrospective and Learning Notes

The first candidate scenario is:

Case Escalation and Manager Visibility

A support team is missing urgent customer Cases. The learner must clarify escalation criteria, choose an automation and visibility approach, consider security and reporting, plan the build, and prepare for deployment.

---

## Scenario Templates

Claygentforce includes a reusable scenario template folder:

- scenarios/TEMPLATE_SCENARIO/

New scenarios should be created by copying this folder, renaming it with the standard scenario naming pattern, and replacing the placeholder content.

The template system helps preserve a consistent delivery lifecycle across scenarios while still allowing each scenario to contain realistic ambiguity, tradeoffs, risks, and consequences.

Template strategy is documented in:

- docs/TEMPLATE_STRATEGY.md

---

## AI-Assisted Workflow

This project uses AI tools intentionally as planning, documentation, implementation, and review assistants.

Important project context is stored in repository files so future AI-assisted sessions can use shorter prompts and avoid repeated explanation.

The workflow favors:

- documentation-first setup
- small commits
- manual review
- issue logging
- scoped AI prompts
- human ownership of final decisions

AI output should not be accepted blindly.

---

## Local Setup

This repository is a Salesforce DX project.

Basic commands:

- git status
- git pull
- git push
- sf project deploy start --manifest manifest/package.xml
- sf project retrieve start --manifest manifest/package.xml

Salesforce org authentication and deployment details will be added later when the first scenario requires metadata work.

---

## Development Notes

Known setup and workflow issues are tracked in:

- docs/ISSUES_LOG.md

Development milestones are tracked in:

- docs/DEVLOG.md

A major early lesson: large AI-generated Markdown files should be copied in smaller chunks or verified after pushing, especially if they contain code block formatting.

---

## Near-Term Roadmap

Next likely work:

1. Create a simulation execution prompt that tells an AI assistant how to run a scenario using the runbook, role prompts, and scenario artifacts.
2. Run the first manual simulation using `001-case-escalation-manager-visibility`.
3. Capture lessons from the first simulation run in the scenario retrospective and devlog.
4. Identify which parts of the manual simulation should be automated first.
5. Add Salesforce metadata only when it directly supports a scenario learning objective.
6. Explore lightweight orchestration options for loading scenario context and invoking role prompts.

---

## Guiding Principle

Claygentforce is not trying to be flashy first.

It is trying to make Salesforce delivery judgment easier to practice, inspect, and improve.