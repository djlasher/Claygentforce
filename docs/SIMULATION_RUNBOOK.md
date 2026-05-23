# Simulation Runbook

This runbook explains how to execute a Claygentforce simulation using the repository documentation, scenario artifacts, and role prompt files.

It is the operational guide for turning static scenario files into a repeatable Salesforce delivery learning experience.

---

## Purpose

Claygentforce simulations are designed to help learners practice Salesforce delivery judgment.

A simulation should guide the learner through:

- ambiguous stakeholder intake
- requirements clarification
- product scope decisions
- architecture tradeoffs
- admin and developer implementation planning
- QA review
- security review
- DevOps and deployment planning
- stakeholder feedback
- incident or consequence simulation when appropriate
- retrospective learning

The goal is not to produce the fastest answer.

The goal is to practice how real Salesforce delivery decisions are made, reviewed, challenged, implemented, and learned from.

---

## Simulation Philosophy

A Claygentforce simulation should feel like a realistic Salesforce project, not a quiz.

Good simulations include:

- incomplete business context
- ambiguous stakeholder language
- multiple reasonable solution paths
- scope pressure
- security and sharing implications
- QA and deployment risk
- tradeoffs between simple and sophisticated solutions
- consequences caused by earlier decisions
- retrospectives that preserve learning

The learner should be active.

The AI agents should support, challenge, review, and simulate realistic delivery pressure.

---

## Core Inputs

A simulation uses the following repository inputs.

### Project Context

- docs/PROJECT_VISION.md
- docs/AGENT_ROLES.md
- docs/DELIVERY_SIMULATION_LOOP.md
- docs/ARCHITECTURE.md
- docs/AI_WORKFLOW_NOTES.md

### Role Prompts

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

### Scenario Artifacts

Each scenario should include:

- SCENARIO_BRIEF.md
- STAKEHOLDER_INTAKE.md
- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- QA_REVIEW.md
- SECURITY_REVIEW.md
- DEPLOYMENT_REVIEW.md
- RETROSPECTIVE.md

---

## Core Outputs

A completed simulation should produce or update:

- clarified requirements
- assumptions and open questions
- product scope decision
- architecture decision
- admin configuration plan
- developer implementation plan
- QA test plan
- security review
- deployment review
- stakeholder feedback
- outcome or consequence notes
- retrospective learning notes

Not every simulation needs deployable Salesforce metadata.

Some simulations may remain documentation-only if the goal is architecture, discovery, or delivery planning practice.

---

## Standard Simulation Lifecycle

Use this default lifecycle unless a scenario says otherwise.

1. Scenario Intake
2. Business Analyst Discovery
3. Product Owner Scope Review
4. Technical Architecture Review
5. Salesforce Admin Configuration Review
6. Salesforce Developer Implementation Review
7. QA Review
8. Security Review
9. DevOps / Deployment Review
10. Stakeholder Review or UAT
11. Outcome / Consequence Simulation
12. Retrospective

The sequence may loop.

For example, Security may send the design back to Architecture, or QA may send the implementation back to BA for unclear acceptance criteria.

---

## Role Invocation Order

Use the role prompts at the point where each role naturally participates in the delivery lifecycle.

### 1. Client Stakeholder Agent

Use when starting the scenario or gathering business feedback.

Inputs:

- SCENARIO_BRIEF.md
- STAKEHOLDER_INTAKE.md
- prompts/client-stakeholder-agent.md

Expected outputs:

- initial business request
- clarifying answers
- business constraints
- UAT feedback
- change requests

### 2. Business Analyst Agent

Use after intake and before architecture.

Inputs:

- SCENARIO_BRIEF.md
- STAKEHOLDER_INTAKE.md
- prompts/ba-agent.md

Expected outputs:

- clarified business problem
- personas
- assumptions
- open questions
- user stories
- acceptance criteria

### 3. Product Owner Agent

Use when the scope, priority, MVP, or release tradeoff needs a decision.

Inputs:

- SCENARIO_BRIEF.md
- ACCEPTANCE_CRITERIA.md
- prompts/product-owner-agent.md

Expected outputs:

- MVP scope
- priority decision
- deferred items
- tradeoff acceptance
- release recommendation

### 4. Technical Architect Agent

Use once requirements are clear enough for solution options.

Inputs:

- SCENARIO_BRIEF.md
- ACCEPTANCE_CRITERIA.md
- prompts/architect-agent.md

Expected outputs:

- architecture options
- recommended approach
- tradeoff analysis
- risks
- architecture decision

### 5. Salesforce Admin Agent

Use when evaluating declarative setup and maintainability.

Inputs:

- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- prompts/admin-agent.md

Expected outputs:

- configuration plan
- Flow notes
- page/layout notes
- permission set needs
- reporting/list view recommendations
- admin maintenance concerns

### 6. Salesforce Developer Agent

Use when evaluating implementation, code need, Apex/LWC design, tests, or code review.

Inputs:

- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- prompts/developer-agent.md

Expected outputs:

- implementation plan
- code necessity assessment
- Apex/LWC plan if needed
- test strategy
- development risks
- validation notes

### 7. QA Agent

Use after requirements and implementation approach are defined.

Inputs:

- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- prompts/qa-agent.md

Expected outputs:

- test plan
- test cases
- edge cases
- regression checklist
- UAT readiness notes
- defect questions

### 8. Security Reviewer Agent

Use before implementation is considered production-ready.

Inputs:

- ACCEPTANCE_CRITERIA.md
- ARCHITECTURE_DECISION.md
- prompts/security-agent.md

Expected outputs:

- access review
- sharing review
- CRUD/FLS notes
- reporting exposure risks
- mitigation recommendations
- security readiness decision

### 9. DevOps Agent

Use before deployment or release readiness.

Inputs:

- ARCHITECTURE_DECISION.md
- QA_REVIEW.md
- SECURITY_REVIEW.md
- prompts/devops-agent.md

Expected outputs:

- deployment checklist
- dependency review
- validation plan
- rollback or mitigation plan
- post-deployment validation steps

### 10. Incident Commander Agent

Use only when the scenario includes a production-like issue, failed release, security concern, data problem, or simulated consequence.

Inputs:

- scenario artifacts
- recent decisions
- simulated failure details
- prompts/incident-commander-agent.md

Expected outputs:

- incident summary
- impact assessment
- mitigation plan
- stakeholder communication
- post-incident review
- prevention actions

---

## Artifact Update Rules

Simulation artifacts should be updated as the learner progresses.

Do not treat the initial scenario files as final answers.

Use the files as living records of the delivery process.

### STAKEHOLDER_INTAKE.md

Update only when new stakeholder context, feedback, constraints, or clarifications are introduced.

### ACCEPTANCE_CRITERIA.md

Update when requirements become clearer.

Track:

- user stories
- acceptance criteria
- assumptions
- open questions
- out-of-scope items
- readiness status

### ARCHITECTURE_DECISION.md

Update when the learner evaluates solution options and chooses a direction.

Track:

- options considered
- tradeoffs
- decision
- rationale
- consequences
- risks
- deferred enhancements

### QA_REVIEW.md

Update after acceptance criteria and implementation approach are clear enough to test.

Track:

- test scenarios
- test data
- happy path tests
- negative path tests
- edge cases
- regression risks
- UAT considerations

### SECURITY_REVIEW.md

Update before implementation is considered production-ready.

Track:

- data involved
- intended access
- object access
- field-level security
- record sharing
- reporting exposure
- integration or automation concerns
- mitigations

### DEPLOYMENT_REVIEW.md

Update before release readiness.

Track:

- metadata scope
- dependencies
- validation steps
- deployment order
- post-deployment checks
- rollback or mitigation plan
- release risks

### RETROSPECTIVE.md

Update after the scenario concludes.

Track:

- decisions made
- consequences
- tradeoffs
- mistakes
- future improvements
- learning outcomes

---

## Context Preservation Rules

Claygentforce should preserve context in repository files instead of relying only on chat history.

When running a simulation:

1. Read the scenario brief.
2. Read the current artifact for the active stage.
3. Read the relevant role prompt.
4. Generate the next learner-facing interaction or artifact update.
5. Update the scenario artifact if new durable context was created.
6. Commit meaningful changes when working in the repository.

Important context should not live only in a chat transcript.

If a decision, assumption, issue, or lesson matters later, write it into the scenario files, devlog, issues log, or architecture documentation.

---

## Human-in-the-Loop Rule

The learner owns final judgment.

AI agents may:

- suggest options
- challenge assumptions
- simulate stakeholder behavior
- draft artifacts
- identify risks
- recommend next steps

The learner should:

- ask clarifying questions
- accept or reject assumptions
- choose tradeoffs
- approve scope
- decide when to move to the next stage
- document reasoning
- reflect on consequences

Claygentforce should not hide the decision-making process from the learner.

The learning happens in the decisions, not only in the final artifact.

---

## Prompting Strategy

When using an AI assistant to run or support a simulation, keep prompts scoped.

A good simulation prompt should include:

- the scenario folder path
- the current simulation stage
- the role being invoked
- the relevant role prompt file
- the artifact to read or update
- the expected output
- what not to change

Example:

Read `docs/SIMULATION_RUNBOOK.md`, `prompts/ba-agent.md`, and `scenarios/001-case-escalation-manager-visibility/STAKEHOLDER_INTAKE.md`.

Act as the Business Analyst Agent.

Generate the next set of discovery questions for the learner.

Do not update implementation files.

---

## Stage Transition Rules

A simulation should not automatically advance just because an artifact exists.

Move from one stage to the next only when the current stage has enough clarity.

### Intake to BA Discovery

Move forward when the stakeholder request is understood well enough to ask targeted discovery questions.

### BA Discovery to Product Scope

Move forward when the business problem, personas, and likely acceptance criteria are clear enough to discuss MVP scope.

### Product Scope to Architecture

Move forward when the MVP boundary is clear enough to evaluate solution options.

### Architecture to Admin / Developer Review

Move forward when the architecture decision identifies a recommended approach and implementation boundaries.

### Admin / Developer Review to QA

Move forward when the implementation approach is clear enough to test.

### QA and Security to DevOps

Move forward when the team understands what will be built, what must be protected, and what must be validated.

### DevOps to Stakeholder Review

Move forward when deployment scope, validation steps, and release risks are clear.

### Stakeholder Review to Retrospective

Move forward when the stakeholder has accepted, rejected, or meaningfully reacted to the proposed outcome.

---

## Readiness Gates

Each major stage should produce a readiness assessment.

Examples:

- Ready for Architecture
- Ready with Assumptions
- Needs Clarification
- Rework Required
- Ready for QA
- Ready for UAT
- Ready to Deploy
- Approved with Risks
- Not Ready

When a gate blocks progress, document:

- what is missing
- why it matters
- who should answer it
- the smallest path to unblock

Blocking progress is acceptable if it creates useful learning.

---

## Consequence Simulation

Claygentforce should sometimes simulate consequences from earlier choices.

Consequences should be realistic and connected to prior decisions.

Examples:

- vague acceptance criteria cause QA confusion
- broad report access creates a security concern
- missing permission set updates cause UAT failure
- Flow criteria are too broad and mark too many Cases high-risk
- managers ignore the list view because no adoption plan exists
- deployment fails because a metadata dependency was missed
- stakeholder rejects the solution because the real problem was notification, not reporting

Consequences should not feel random.

They should teach the learner that delivery decisions create downstream effects.

---

## Difficulty Modes

Each scenario may run in one of three difficulty modes.

### Guided

Use Guided mode when the learner is new to the topic.

Behavior:

- provide more hints
- explain why questions matter
- offer suggested next steps
- make tradeoffs explicit
- reduce hidden consequences
- keep the scenario smaller

### Standard

Use Standard mode for realistic practice.

Behavior:

- provide some ambiguity
- require the learner to ask clarifying questions
- include realistic tradeoffs
- allow consequences from weak decisions
- keep feedback constructive

### Hard

Use Hard mode when the learner wants pressure.

Behavior:

- provide less guidance
- include competing priorities
- introduce hidden constraints
- simulate stakeholder disagreement
- make consequences more likely
- require stronger justification for decisions

Hard mode should still be fair.

The goal is challenge, not confusion.

---

## Failure States

Failure states are learning moments.

A simulation may enter a failure state when:

- requirements are too vague to test
- architecture ignores an important constraint
- implementation does not match acceptance criteria
- security review identifies unacceptable access risk
- deployment scope is missing dependencies
- stakeholder rejects the solution
- simulated production behavior fails
- learner cannot justify a tradeoff

When a failure state occurs:

1. Identify the failure clearly.
2. Explain what caused it.
3. Connect it to an earlier decision or missed question.
4. Ask the learner how they want to respond.
5. Offer a small path to recover.
6. Document the lesson in the retrospective.

Failure should not end the simulation automatically.

Failure should create a useful recovery exercise.

---

## Retrospective Workflow

Every completed scenario should end with a retrospective.

The retrospective should answer:

- What was the original business problem?
- What did the learner initially assume?
- What questions changed the understanding of the problem?
- What decisions mattered most?
- What tradeoffs were accepted?
- What risks remained?
- What consequences appeared?
- What would be done differently next time?
- What future enhancements were deferred?
- What Salesforce delivery principle did this scenario reinforce?

The retrospective should preserve the learning path, not just the final answer.

---

## Future Automation Vision

The first version of Claygentforce can be run manually using repository files and AI prompts.

Future versions may automate parts of the simulation.

Possible automation paths:

- script that loads scenario files and role prompts
- local command-line simulation runner
- GitHub issue-based scenario workflow
- Salesforce-native simulator app
- LWC interface for learners
- custom object model for scenarios, decisions, and artifacts
- multi-agent orchestration engine
- scoring and feedback model
- consequence simulation engine
- scenario generation tool

Automation should come after the workflow is understandable.

Do not automate confusion.

---

## Guiding Principle

A Claygentforce simulation should teach delivery judgment.

The learner should finish with better instincts about requirements, scope, architecture, implementation, security, quality, deployment, stakeholder communication, and recovery.

