# Agent Roles

Claygentforce uses delivery-role perspectives to create realistic Salesforce project pressure.

This file is the high-level role model. Detailed reusable role prompts live in `prompts/`. Local Scenario 001 role-agent task routing currently lives in `force-app/main/default/lwc/scenarioLauncher/deliveryRoomAgents.js`.

---

## Current Role Model

Role agents should help learners practice delivery judgment by surfacing realistic concerns, tradeoffs, validation needs, and consequences.

They are not meant to replace human judgment or become generic chat personas.

Each role should have:

- a clear responsibility
- a distinct point of view
- concrete review concerns
- bounded task outputs
- realistic Salesforce delivery behavior

Agents should sometimes agree, disagree, or ask for clarification. The goal is realistic delivery tension, not maximum helpfulness at every step.

---

## Core Delivery Roles

| Role | Primary Concern | Common Use In Simulation |
|---|---|---|
| Business Analyst | Requirements clarity, personas, acceptance criteria, assumptions. | Discovery questions, unclear requirements, testability gaps. |
| Product Owner | Business value, MVP scope, release tradeoffs, stakeholder priority. | Scope pressure, deferral decisions, release readiness. |
| Technical Architect | Solution options, tradeoffs, platform fit, maintainability. | Flow vs Apex decisions, data model/security implications, review gates. |
| Salesforce Admin | Declarative configuration, Flow maintainability, layouts, permissions, reports/list views. | Admin-friendly design, setup checklists, configuration risk. |
| Salesforce Developer | Implementation quality, code need, LWC/Apex boundaries, test strategy. | Build planning, code review, maintainability concerns. |
| QA | Acceptance criteria coverage, positive/negative paths, regression risk. | Test plans, missing evidence, validation checklists. |
| Security Reviewer | CRUD/FLS, sharing, access assumptions, sensitive data exposure. | Permission concerns, least privilege, blocked release risks. |
| DevOps | Metadata completeness, validation, deployment order, rollback, post-deploy checks. | Release readiness, manifest/package gaps, deployment risk. |
| Support Manager | Operational support pressure, Case visibility, escalation usefulness. | Scenario 001 stakeholder pressure and manager visibility needs. |
| Delivery Coordinator / Simulator | Keeps the local run bounded, prompts the next action, summarizes state. | Local coordinator task messages and compact run progression. |
| Client Stakeholder | Business request, feedback, UAT reaction, operational constraints. | Scenario intake, stakeholder ambiguity, UAT acceptance/rejection. |
| Incident Commander | Triage, impact, communication, mitigation, lessons learned. | Production-like consequence or incident simulations. |

---

## Scenario 001 Local Role-Agent Scope

Scenario 001 currently uses deterministic local role-agent tasks, not live agents.

The launcher task flow is:

1. learner selects a first response
2. local role-agent follow-up is produced
3. Delivery Coordinator provides bounded next-step guidance
4. learner selects a follow-up action
5. local role-agent response, Team Review, Decision Quality Signals, and Team Challenge are produced
6. learner responds to the Team Challenge
7. local role-agent reaction and closeout summary are produced

Important rule:

Interactive choices belong only to the prompt that owns the interaction. Role feedback messages should not accidentally carry choice arrays such as `challengeResponses`.

---

## Learner Role

The learner is not passive.

The learner should:

- ask clarifying questions
- make design decisions
- choose tradeoffs
- review role recommendations
- respond to simulated pushback
- document decisions and unresolved risks
- learn from consequences

Claygentforce should help the learner become the person who can guide a Salesforce project through ambiguity, implementation, release, and support.

---

## Future Direction

Local deterministic role-agent tasks are the current safe stand-in.

Future versions may replace selected local task handlers with Agentforce/Data Cloud/server-backed behavior, but only after the local orchestration shape is stable and the bounded learning loop is useful.
