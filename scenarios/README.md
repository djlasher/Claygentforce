# Scenarios

This folder contains Claygentforce simulation scenarios.

Each scenario is designed to help learners practice realistic Salesforce delivery judgment across requirements, architecture, administration, development, QA, security, DevOps, stakeholder review, and retrospective learning.

---

## Scenario Structure

Each scenario should live in its own numbered folder.

Example:

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