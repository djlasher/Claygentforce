# ADR-002: Keep the Scenario 001 LWC Read-Only

## Status

Accepted

## Context

Scenario 001 includes a Case record page LWC, `scenario001CaseRiskPanel`, that displays risk status, scenario signals, delivery-team guidance, and outcome/risk notes.

The long-term product direction is a simulated Salesforce delivery-team channel experience. The current implementation is still an early vertical slice.

## Decision

Keep the Scenario 001 LWC read-only.

The component should display scenario context and static role guidance, but it should not:

- edit Case data
- provide chat input
- persist learner decisions
- orchestrate live agents
- call external AI services

## Rationale

The first LWC should help learners understand the Salesforce implementation and its delivery consequences without introducing a second interaction model.

Static role guidance is enough for the current slice. It lets the UI feel like the beginning of a delivery-team channel while keeping the behavior predictable, inspectable, and easy to deploy.

Avoiding chat and persistence also keeps ownership clear. Salesforce metadata handles the scenario state, and the LWC explains that state.

## Consequences

- The component remains safe to place on Case record pages.
- There is no Apex or external service dependency.
- The UI can evolve toward richer simulation patterns without committing too early to an orchestration design.
- Future interactive features should be introduced only after the static scenario model proves useful.
