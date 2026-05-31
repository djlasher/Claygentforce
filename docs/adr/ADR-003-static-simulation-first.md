# ADR-003: Build Static Simulation Slices Before Live Agent Orchestration

## Status

Accepted

## Context

Claygentforce is intended to become a Salesforce delivery team simulation, not a generic chatbot. The product should eventually feel like a delivery room where roles such as Support Manager, Architect, QA, Security, Product Owner, and Client Stakeholder react to scenario context.

Scenario 001 is the first real Salesforce implementation slice.

## Decision

Build real Salesforce implementation behavior first, then layer static simulation guidance on top before introducing live agent orchestration.

For Scenario 001, that means:

- real Case fields
- a real record-triggered Flow
- a real list view and permission model
- a real read-only LWC
- static role guidance and outcome/risk notes driven by record state

Do not introduce Agentforce, live multi-agent orchestration, or external AI calls yet.

## Rationale

Static simulation keeps the project grounded in Salesforce delivery practice. Learners can see actual metadata behavior and then read role-style guidance that explains consequences, tradeoffs, and validation concerns.

This creates a useful vertical slice without premature orchestration complexity. It also makes the project easier to validate, deploy, and explain.

## Consequences

- The first slices stay small and reviewable.
- The simulator can improve through concrete Salesforce behavior instead of abstract conversation design.
- Future agent work can be based on proven scenario states and delivery artifacts.
- Live orchestration remains an option, but only after the static patterns show what information the agents should react to.
