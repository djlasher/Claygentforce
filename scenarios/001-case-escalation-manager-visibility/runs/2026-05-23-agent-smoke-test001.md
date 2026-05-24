# Agent Smoke Test Run

## Run Date

2026-05-23

## Scenario ID

001-case-escalation-manager-visibility

## Run Mode

Agent Smoke Test Mode

## Goal

Validate whether the first Claygentforce scenario can exercise each major simulated delivery role with one small, useful contribution per agent.

This run was intentionally lightweight.

The goal was not to produce a final implementation plan. The goal was to verify that the scenario, role prompts, and simulation flow can produce distinct Salesforce delivery perspectives without requiring the learner to type long answers at every stage.

---

## Context Used

- `docs/SIMULATION_RUNBOOK.md`
- `prompts/simulation-runner.md`
- `scenarios/001-case-escalation-manager-visibility/SCENARIO_BRIEF.md`
- `scenarios/001-case-escalation-manager-visibility/STAKEHOLDER_INTAKE.md`
- relevant role prompts by stage

---

## Learner Preference Observed

The learner did not want to manually type long responses for every stage.

The learner requested that the AI simulate likely answers and show the resulting outputs in a compact pass.

This revealed a need for a lightweight run mode that validates agent behavior without making the simulation feel tedious.

---

## Stage Results

### 1. Client Stakeholder Agent

Input:

The stakeholder wants urgent customer Cases to stop getting missed.

Output:

Support managers need one reliable place to see risky Cases. The first version should focus on visibility with light notification, not a full escalation engine.

Result:

Passed.

The stakeholder perspective produced business pain without forcing implementation details.

---

### 2. Business Analyst Agent

Input:

High-risk Cases may involve top-tier customers, severe issues, or stale Cases.

Output:

Draft MVP requirement:

As a Support Manager, I want Salesforce to identify and surface high-risk Cases so I can review urgent customer issues before they are missed or delayed.

Potential MVP criteria:

1. Case is from a top-tier customer.
2. Case severity is marked severe or critical.
3. Case has had no meaningful update within the agreed time threshold.

Open questions:

- Where does customer tier come from?
- Who owns severity accuracy?
- What counts as a meaningful update?

Result:

Passed.

The BA perspective converted vague stakeholder language into testable requirement shape and open questions.

---

### 3. Product Owner Agent

Input:

The BA identified several possible high-risk criteria.

Output:

MVP scope should include:

- high-risk indicator on Case
- manager list view for high-risk open Cases
- lightweight notification for newly high-risk Cases
- basic reporting on high-risk volume

Deferred items:

- complex SLA engine
- Omni-Channel routing
- AI classification
- Customer Success manager workflow
- automatic reassignment

Result:

Passed.

The Product Owner perspective protected MVP scope and prevented overbuilding.

---

### 4. Technical Architect Agent

Input:

MVP needs high-risk identification, manager visibility, and light notification.

Output:

Recommended architecture:

- declarative-first solution
- Case fields for high-risk status and reason if needed
- record-triggered Flow to evaluate high-risk criteria
- list views, reports, or dashboards for manager visibility
- custom notification or email only for high-priority threshold events
- avoid Apex unless criteria become complex or external/system logic is needed

Tradeoff:

Flow is maintainable and appropriate for MVP, but criteria must be explicit and testable to avoid false positives or noisy notifications.

Result:

Passed.

The Architect perspective made a Salesforce-native tradeoff decision without jumping to code unnecessarily.

---

### 5. Salesforce Admin Agent

Input:

The Architect recommended a declarative-first MVP.

Output:

Admin configuration plan:

- add or reuse Case fields
- consider `High Risk`, `High Risk Reason`, and `Last Meaningful Update Date`
- create a “High-Risk Open Cases” list view
- create report or dashboard visibility for managers
- review page layout or Dynamic Forms placement
- avoid adding too many required fields for agents

Result:

Passed.

The Admin perspective translated architecture into maintainable configuration.

---

### 6. Salesforce Developer Agent

Input:

The current solution appears declarative.

Output:

No Apex is needed for MVP if:

- customer tier is already available on Account or Case
- severity is a reliable Case field
- stale Case logic can be evaluated by Flow
- notification rules are simple

Developer involvement may be needed later for:

- complex meaningful-update logic
- external enrichment
- custom UI
- Flow test strategy support

Result:

Passed.

The Developer perspective did not force code and showed appropriate restraint.

---

### 7. QA Agent

Input:

MVP uses fields, Flow, list view, notification, and reporting.

Output:

QA smoke scenarios:

1. Top-tier customer Case becomes high-risk.
2. Critical severity Case becomes high-risk.
3. Stale Case becomes high-risk after threshold.
4. Normal Case does not become high-risk.
5. Closed Case does not appear in the open high-risk view.
6. Manager can see the high-risk list view.
7. Non-manager access follows expected permissions.

Risk:

Acceptance criteria must define exact thresholds before QA can fully validate stale Case behavior.

Result:

Passed.

The QA perspective identified useful test coverage and exposed a requirement gap.

---

### 8. Security Reviewer Agent

Input:

Managers need visibility into high-risk Cases.

Output:

Security review:

- confirm managers should only see Cases within their support scope
- do not broaden Case org-wide defaults just to support visibility
- prefer permission sets, sharing rules, queues, or report folder access based on the existing security model
- validate whether high-risk reason exposes sensitive customer or product information
- confirm Customer Success visibility is deferred or separately permissioned

Concern:

“Manager visibility” must not accidentally become “all managers can see all Cases.”

Result:

Passed.

The Security perspective introduced realistic Salesforce sharing and visibility concerns.

---

### 9. DevOps Agent

Input:

MVP includes fields, Flow, list view, reporting, notifications, and permissions.

Output:

Deployment review:

Likely metadata:

- Case custom fields
- Flow
- permission set updates
- list view
- report or dashboard artifacts if deployable and stable
- possibly custom notification type

Deployment notes:

- deploy to sandbox first
- validate Flow activation state
- confirm permissions after deployment
- run post-deployment smoke test with manager user
- rollback option should include deactivating Flow and disabling notification path if noisy

Result:

Passed.

The DevOps perspective caught realistic release and rollback concerns.

---

### 10. Client Stakeholder / UAT Agent

Input:

MVP demo shows high-risk Cases in a manager view with light notification.

Output:

Stakeholder feedback:

The single manager review list is useful. Notifications should be limited to avoid noise. For the first release, notify only for critical top-tier Cases.

Result:

Passed.

The Stakeholder/UAT perspective reacted to business usefulness rather than metadata details.

---

### 11. Outcome / Consequence Simulation

Input:

The learner path chose declarative-first visibility with light notification.

Output:

Positive outcomes:

- managers have one place to review high-risk Cases
- MVP avoids overbuilt escalation logic
- admins can maintain criteria

Tradeoffs:

- vague stale Case criteria could cause false positives or false negatives
- broad notification rules could cause alert fatigue
- poorly scoped sharing could create security risk

Result:

Passed.

Consequences connected to earlier decisions instead of appearing randomly.

---

### 12. Retrospective Agent

Input:

Manual smoke test completed.

Output:

Lessons:

- the simulation flow works better as a guided role review than as a long typing exercise
- the learner should not have to manually answer every stage in detail
- a smoke test mode should exist for validating agents quickly
- Scenario 001 is strong enough to test all major roles
- lightweight run logs should exist separately from core scenario artifacts

Result:

Passed.

The retrospective produced a concrete project improvement: define simulation run modes and store run outputs separately.

---

## Overall Result

Passed.

Scenario 001 successfully exercised the major Claygentforce delivery roles in a compact pass.

Each agent contributed a distinct and useful Salesforce delivery perspective.

---

## What Worked

- The first scenario is broad enough to involve BA, PO, Architect, Admin, Developer, QA, Security, DevOps, Stakeholder, and Retrospective roles.
- Declarative vs. programmatic tradeoffs emerged naturally.
- Security and DevOps concerns were meaningful, not bolted on.
- The stakeholder request was ambiguous enough to support discovery.
- The simulation produced realistic consequences connected to earlier decisions.
- The smoke test revealed a real product need: multiple run modes.

---

## What Felt Awkward or Tedious

- Full manual learner input for every stage would be too much for a short session.
- The simulation needs a compact mode for tired learners or quick validation.
- Long transcripts should not be placed directly into core scenario files.
- The project needs a clear place to store run logs.

---

## Missing Artifacts Identified

Recommended additions:

- `docs/SIMULATION_RUN_MODES.md`
- `scenarios/001-case-escalation-manager-visibility/runs/`
- `scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test.md`

Optional future additions:

- run log template
- scenario execution checklist
- compact learner response template
- agent smoke test checklist

---

## Recommended Follow-Up Changes

1. Add `docs/SIMULATION_RUN_MODES.md`.
2. Add this run log under the scenario-specific `runs/` folder.
3. Update README to reference simulation run modes.
4. Update scenario README or root scenario documentation to mention run logs.
5. Update devlog.
6. Update `docs/AI_SESSION_STARTER.md` at end of session with latest state.

---

## Should Core Scenario Files Be Updated?

Not yet.

This was a smoke test, not a final learner-approved solution.

The run produced useful candidate requirements and design direction, but those should not overwrite core scenario artifacts until the project intentionally decides how simulated run outputs should graduate into canonical scenario files.