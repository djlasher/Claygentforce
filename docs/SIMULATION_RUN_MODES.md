# Simulation Run Modes

Claygentforce simulations can be run in different modes depending on the learner’s energy, available time, desired depth, and project goal.

Not every simulation needs to be a full manual walkthrough.

The simulation framework should support both deep learning sessions and lightweight validation passes.

---

## Purpose

This file defines the standard run modes for Claygentforce simulations.

Run modes help determine:

- how active the learner should be
- how much the AI should simulate
- how much detail each agent should provide
- what artifacts should be updated
- whether the goal is learning, validation, documentation, or system testing

---

## Why Run Modes Matter

During early manual testing, the full simulation flow proved useful but potentially tedious if the learner has to type detailed answers for every role and every stage.

That friction matters.

Claygentforce should not require a learner to complete a long written consulting exercise every time they want to test a scenario.

The system should support short, useful passes that validate role behavior without exhausting the learner.

---

## Mode 1: Full Learner Mode

### Purpose

Use Full Learner Mode when the goal is deep practice.

The learner actively responds to each stage, makes decisions, writes clarification questions, chooses solution direction, and owns the final recommendations.

### Best For

- serious interview preparation
- Salesforce architect practice
- CTA-style reasoning practice
- business analyst discovery practice
- architecture decision training
- deeper project simulations
- portfolio-quality scenario transcripts

### Learner Role

The learner should actively answer prompts such as:

- What clarification questions would you ask?
- What MVP scope would you recommend?
- Which architecture option would you choose?
- How would you test this?
- What risks would you document?
- What would you defer?

### AI Role

The AI should:

- act as the active stage role
- challenge weak assumptions
- ask follow-up questions
- provide realistic stakeholder answers
- enforce readiness gates
- preserve ambiguity
- document tradeoffs and consequences

### Output Depth

High.

This mode may produce detailed artifacts and longer transcripts.

### Artifact Updates

Recommended.

Durable decisions, requirements, risks, test scenarios, security findings, deployment notes, and retrospective lessons should be added to the appropriate scenario files.

---

## Mode 2: Guided Learner Mode

### Purpose

Use Guided Learner Mode when the learner wants practice but also wants hints, examples, and coaching.

The learner still participates, but the AI provides more scaffolding.

### Best For

- learning a new Salesforce delivery skill
- practicing unfamiliar architecture areas
- warming up before Full Learner Mode
- explaining why certain questions or risks matter
- helping less experienced learners succeed without giving away everything

### Learner Role

The learner answers smaller prompts and may choose from options.

Examples:

- Pick the best clarification question from these options.
- Choose whether this is visibility, routing, escalation, or reporting.
- Identify which risk is most important.
- Rewrite this vague requirement into acceptance criteria.

### AI Role

The AI should:

- provide hints
- explain why each stage matters
- show examples
- keep prompts short
- reduce intimidation
- still require learner decisions

### Output Depth

Medium.

This mode should create enough useful output to update scenario artifacts, but it should avoid overwhelming the learner.

### Artifact Updates

Optional but encouraged.

The AI should recommend updates only when durable context emerges.

---

## Mode 3: Agent Smoke Test Mode

### Purpose

Use Agent Smoke Test Mode when the goal is to quickly validate that a scenario and its role prompts are functioning correctly.

The AI may simulate reasonable learner responses so the full role chain can be exercised without requiring the learner to type every answer manually.

### Best For

- testing a new scenario
- validating role prompt behavior
- checking whether each agent contributes a distinct perspective
- identifying missing artifacts
- checking for tedious or awkward simulation flow
- quick late-night progress sessions
- improving the simulator itself

### Learner Role

The learner gives permission for the AI to simulate likely answers.

The learner may interrupt, steer, approve, reject, or adjust the simulated path.

The learner does not need to manually answer every stage.

### AI Role

The AI should:

- simulate concise learner answers
- run each role through one small contribution
- keep each stage short
- identify whether the role worked
- identify gaps in the run flow
- recommend artifact updates after the smoke test
- avoid pretending the simulated answers are final user-approved requirements

### Output Depth

Low to medium.

The goal is coverage, not exhaustive detail.

Each role should produce one useful contribution, not a full consulting deliverable.

### Artifact Updates

Recommended, but separate from core scenario artifacts.

Smoke test results should usually be saved in a scenario-specific run log rather than directly overwriting final scenario decisions.

---

## Mode 4: Artifact Review Mode

### Purpose

Use Artifact Review Mode when the goal is to inspect or improve existing scenario files.

Instead of running the simulation interactively, the AI reviews the artifacts for gaps, inconsistencies, missing role perspectives, or weak learning value.

### Best For

- scenario QA
- prompt refinement
- documentation cleanup
- checking whether acceptance criteria are testable
- checking whether architecture decisions connect to requirements
- checking whether QA, security, and deployment reviews are realistic

### Learner Role

The learner asks for review or selects files to inspect.

### AI Role

The AI should:

- read the relevant repository files
- identify gaps
- recommend focused changes
- avoid rewriting everything unnecessarily
- preserve the scenario’s intended ambiguity

### Output Depth

Medium.

### Artifact Updates

Recommended when issues are found.

---

## Recommended Run Log Structure

Manual and simulated test runs should be captured separately from the main scenario artifacts.

Recommended location:

`scenarios/[scenario-id]/runs/`

Example:

`scenarios/001-case-escalation-manager-visibility/runs/2026-05-23-agent-smoke-test.md`

Run logs should capture what happened during a specific execution without turning the core scenario files into long transcripts.

---

## Run Log Template

Each run log should include:

- run date
- scenario ID
- run mode
- goal of the run
- context files used
- stage summary
- agent outputs
- learner involvement
- what worked
- what felt awkward or tedious
- missing artifacts
- recommended follow-up changes
- whether core scenario files should be updated

---

## Choosing a Run Mode

Use this guide:

| Situation | Recommended Mode |
|---|---|
| Learner wants deep practice | Full Learner Mode |
| Learner wants coaching | Guided Learner Mode |
| Learner is tired or short on time | Agent Smoke Test Mode |
| Testing whether agents work | Agent Smoke Test Mode |
| Reviewing repo files | Artifact Review Mode |
| Preparing portfolio-quality output | Full Learner Mode |
| Improving scenario design | Agent Smoke Test Mode or Artifact Review Mode |

---

## Design Principle

The simulator should adapt to the learner’s energy and goal.

A useful short run is better than an abandoned long run.

Claygentforce should support serious deep practice without making every session feel like homework.