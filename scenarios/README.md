# Scenarios

This folder contains Claygentforce simulation scenarios.

Each scenario is designed to help learners practice realistic Salesforce delivery judgment across requirements, architecture, administration, development, QA, security, DevOps, stakeholder review, and retrospective learning.

---

## Scenario Structure

Each scenario should live in its own numbered folder.

Example:

```text
Claygentforce/
  scenarios/
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
      METADATA_BUILD_NOTES.md
      FLOW_DESIGN.md
      SMOKE_TEST_CHECKLIST.md
```

---

## Standard Scenario Files

### SCENARIO_BRIEF.md

Defines the scenario at a high level.

Includes:

- scenario title
- business context
- learner goals
- affected personas
- Salesforce areas involved
- expected learning outcomes
- difficulty level
- scenario boundaries

### STAKEHOLDER_INTAKE.md

Contains the initial stakeholder request.

This should feel realistic and slightly incomplete. It should give enough context to begin discovery, but not enough to safely build without clarification.

### ACCEPTANCE_CRITERIA.md

Tracks clarified requirements, user stories, assumptions, and acceptance criteria.

This file may start incomplete and evolve as the learner asks better questions.

### ARCHITECTURE_DECISION.md

Documents architecture options, tradeoffs, selected approach, risks, and consequences.

This file should connect the business problem to the technical design.

### QA_REVIEW.md

Defines test scenarios, edge cases, regression risks, UAT considerations, and release confidence.

### SECURITY_REVIEW.md

Documents permissions, sharing, field access, reporting exposure, sensitive data concerns, and mitigations.

### DEPLOYMENT_REVIEW.md

Defines deployment scope, metadata dependencies, validation steps, post-deployment checks, and rollback or mitigation plans.

### RETROSPECTIVE.md

Captures learning outcomes, decisions made, mistakes, consequences, and future improvements.

### IMPLEMENTATION_PLAN.md

Converts scenario requirements and architecture into a practical Salesforce build plan.

This file should define candidate metadata, build sequence, Flow or automation approach, visibility requirements, permission assumptions, QA smoke tests, deployment sequence, and unresolved implementation decisions.

It acts as the bridge between simulation artifacts and deployable Salesforce source.

### METADATA_BUILD_NOTES.md

Tracks actual Salesforce metadata work for a scenario.

This file should distinguish between metadata that has been created, metadata that is planned, metadata that is deferred, deployment or validation notes, and Salesforce-specific implementation questions.

It should stay practical and implementation-focused.

### FLOW_DESIGN.md

Documents intended Flow behavior before Salesforce Flow metadata is created.

This file should define Flow purpose, trigger timing, fields used, decision sequence, pseudocode, MVP scope, open Flow decisions, risks, and test scenarios.

It helps keep automation scenario-driven and reviewable before committing to Flow XML.

### SMOKE_TEST_CHECKLIST.md

Validates a scenario implementation in a Salesforce org after metadata is deployed.

This file should define the metadata covered, preconditions, manual smoke test steps, expected results, known MVP limitations, pass/fail notes, and review questions that should inform the next implementation increment.

It is especially useful once a scenario has real Salesforce metadata, UI, permissions, automation, or LWC behavior that must work together.

### SIMULATION_EXECUTION_PROMPT.md

Defines a reusable prompt for running static, artifact-based scenario simulations.

This file should tell an AI assistant what scenario files to read, which delivery roles to simulate, how to produce a Delivery Room transcript, and how to avoid inventing org validation or test results.

---

## Scenario Run Logs

Scenarios may include an optional `runs/` folder.

Run logs capture specific manual, guided, or simulated executions of a scenario without turning the main scenario artifacts into long transcripts.

Example structure:

```text
scenarios/
  001-case-escalation-manager-visibility/
    runs/
      2026-05-23-agent-smoke-test001.md
```

Run logs are useful for:

- agent smoke tests
- manual simulation transcripts
- guided learner sessions
- scenario validation notes
- identifying missing artifacts
- preserving what happened during a specific test run

Run logs should not automatically replace the core scenario files.

A run log may contain candidate requirements, architecture ideas, QA scenarios, security concerns, or stakeholder feedback, but those outputs should only be promoted into canonical scenario artifacts intentionally.

Recommended run log contents:

- run date
- run mode
- goal
- context used
- learner involvement
- stage summaries
- agent outputs
- what worked
- what felt awkward
- missing artifacts
- recommended follow-up changes
- whether core scenario files should be updated

---

## Delivery Room Alignment

Scenario artifacts should be reusable by the static Delivery Room experience.

Each scenario should provide enough structured context to support:

- scenario catalog cards
- delivery role summaries
- learner path steps
- static transcript previews
- future role-agent prompts or run transcripts

Scenario 001 is the implemented MVP example. Scenario 002 should remain a placeholder until its business problem, Salesforce surface, and learning goals are intentionally selected.

---

## Scenario Design Principles

Scenarios should be realistic, not perfect.

A good Claygentforce scenario includes:

- incomplete stakeholder context
- ambiguous terms
- multiple possible solution paths
- declarative vs. programmatic tradeoffs
- security implications
- testing concerns
- deployment considerations
- possible stakeholder feedback
- realistic consequences

Scenarios should avoid being simple quiz questions.

The learner should practice judgment, not memorization.

---

## Scenario Difficulty

Scenarios may use one of three difficulty levels.

### Guided

The scenario provides more hints, structure, and explanation.

### Standard

The scenario provides realistic ambiguity and expects the learner to make decisions.

### Hard

The scenario includes more ambiguity, competing stakeholder priorities, hidden risks, and fewer hints.

---

## First Scenario

The first planned scenario is:

Case Escalation and Manager Visibility

A support team is missing urgent customer Cases. The learner must clarify escalation criteria, choose an automation and visibility approach, consider security and reporting, plan the build, and prepare for deployment.

---

## Guiding Principle

The scenario folder should preserve the full learning path.

Do not only document the final answer.

Document the ambiguity, decisions, tradeoffs, consequences, and lessons learned.
