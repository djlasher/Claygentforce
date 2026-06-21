# Delivery Simulation Loop

Claygentforce is built around a repeatable Salesforce delivery learning loop.

The purpose of the loop is to help learners practice how real Salesforce work moves from an unclear business problem to a designed, implemented, tested, deployed, supported, and reviewed solution.

---

## Core Loop

A Claygentforce scenario should generally move through these stages:

1. **Scenario Intake** — a realistic business problem with incomplete context.
2. **Requirements Clarification** — personas, process, acceptance criteria, assumptions, and open questions.
3. **Product Scope Review** — MVP boundary, business value, release pressure, and deferrals.
4. **Architecture and Tradeoff Review** — solution options, platform fit, risks, and rationale.
5. **Implementation Planning** — metadata scope, build sequence, permissions, validation approach, and dependencies.
6. **Build** — Salesforce metadata, configuration, automation, UI, or code as needed by the scenario.
7. **QA Review** — positive paths, negative paths, edge cases, regression risk, and UAT readiness.
8. **Security Review** — CRUD/FLS, sharing, permissions, sensitive data, and exposure risk.
9. **DevOps and Release Review** — manifest/package scope, validation, deployment order, rollback, and post-deploy checks.
10. **Stakeholder/UAT Review** — whether the solution solves the original business problem.
11. **Outcome and Consequence Feedback** — how decisions affected delivery risk, rework, confidence, or adoption.
12. **Retrospective and Learning Notes** — what the learner should carry forward.

The loop can be shortened for small exercises or expanded for advanced simulations.

---

## Current Scenario 001 Loop Shape

Scenario 001 currently implements a compact local version of the loop in the launcher:

1. Support Manager scenario moment
2. bounded first learner decision
3. local role-agent follow-up
4. Delivery Coordinator task
5. bounded follow-up action
6. role-agent outcome and Team Review
7. Team Challenge / role pushback
8. bounded challenge response
9. delivery-room reaction
10. Session Result, Decision Quality Signals, closeout, and validation checklist

This is intentionally not a full consulting exercise every time. The launcher is a bounded practice loop for implementation judgment.

---

## Run Modes

Claygentforce should support different levels of depth.

| Mode | Purpose | Output Depth |
|---|---|---|
| Full Learner Mode | Deep practice where the learner actively answers each stage and owns the final recommendation. | High |
| Guided Learner Mode | Practice with hints, examples, and bounded choices. | Medium |
| Agent Smoke Test Mode | Quick validation of scenario/role behavior where AI may simulate concise learner responses. | Low to medium |
| Artifact Review Mode | Review existing scenario files for gaps, inconsistencies, and weak learning value. | Medium |

A useful short run is better than an abandoned long run.

---

## Role Behavior

Roles should participate where they naturally add delivery value:

- Business Analyst clarifies requirements before design hardens.
- Product Owner resolves priority, scope, and release tradeoffs.
- Architect evaluates solution options and consequences.
- Admin evaluates declarative configuration and maintainability.
- Developer evaluates implementation details and test strategy.
- QA validates requirements, positive/negative paths, and regression risk.
- Security reviews access and exposure before release readiness.
- DevOps reviews package completeness, validation, and deployment risk.
- Stakeholders react to whether the solution solves the business problem.
- Incident Commander appears only for production-like failure or consequence scenarios.

Agents should not simply approve everything. Realistic pushback is part of the learning loop.

---

## Scenario Artifacts

Scenario folders should preserve the learning path, not only the final answer.

Core artifacts may include:

- `SCENARIO_BRIEF.md`
- `STAKEHOLDER_INTAKE.md`
- `ACCEPTANCE_CRITERIA.md`
- `ARCHITECTURE_DECISION.md`
- `IMPLEMENTATION_PLAN.md`
- `QA_REVIEW.md`
- `SECURITY_REVIEW.md`
- `DEPLOYMENT_REVIEW.md`
- `SMOKE_TEST_CHECKLIST.md`
- `RETROSPECTIVE.md`
- run logs under `runs/`

Run logs should capture a specific execution without automatically rewriting canonical scenario artifacts.

---

## Consequence Feedback

Consequence feedback should be realistic and connected to earlier decisions.

Examples:

- vague acceptance criteria cause QA confusion
- missing permission review delays UAT
- incomplete negative-path testing creates release risk
- broad visibility creates a security concern
- deployment fails because metadata dependencies are missing
- stakeholder rejects the feature because the real problem was misunderstood

Consequences should teach the learner that delivery decisions create downstream effects.

---

## Design Principle

Do not skip the loop.

Even when the implementation is small, Claygentforce should preserve the delivery flow:

> problem → requirements → architecture → build → review → release → consequences → learning

That flow is the product.
