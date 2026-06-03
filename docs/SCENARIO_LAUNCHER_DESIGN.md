# Scenario Launcher Design Note

## Purpose

The Scenario Launcher is a future static Salesforce LWC that gives learners a simple home surface for available Claygentforce scenarios.

The first version should help users understand what Scenario 001 demonstrates, where the implementation lives, and what scenario may come next. It should not become a generic chatbot or orchestration layer.

Project principle:

1. Real Salesforce implementation first.
2. Simulated delivery-team intelligence second.
3. Live agents third.

---

## MVP Scope

The first launcher should be a static, read-only Lightning Web Component.

It can later be placed on a Lightning App Page, utility page, or home-style page, but the MVP should only display scenario information. It should not navigate, launch flows, record progress, score learners, or call services.

---

## What It Should Display

- Page title and short product framing
- Static Scenario 001 card
- Placeholder/readiness card for Scenario 002
- Clear implementation status
- Short learner focus summary
- Small note that current simulations are static and read-only

---

## Initial Scenario 001 Card Fields

- Scenario name: `Scenario 001: Case Escalation and Manager Visibility`
- Status: `Implemented MVP`
- Salesforce surface: `Case record page`
- Core metadata: `Case fields, before-save Flow v3, list view, permission set, LWC`
- Skill focus: `Escalation criteria, manager visibility, delivery tradeoffs`
- Simulation layers: `Delivery Team Channel, Outcome and Risk, Decision Paths, Learning Checkpoints`
- Current entry point: `Open a Case record with the Scenario 001 Risk Review panel`

---

## Future Scenario 002 Readiness

The launcher should leave room for a second scenario card without needing a layout rewrite.

The Scenario 002 card can initially show:

- Scenario name: `Scenario 002: To Be Defined`
- Status: `Planned`
- Skill focus: `TBD`
- Salesforce surface: `TBD`
- Implementation status: `Not yet implemented`

---

## What It Should Not Do Yet

- No navigation logic
- No buttons or click handlers
- No persistence
- No scoring
- No Apex
- No external AI calls
- No Agentforce or orchestration
- No learner session tracking
- No dynamic scenario loading

---

## Implementation Constraints

- Keep the LWC read-only and static.
- Use SLDS and scoped CSS only.
- Avoid Salesforce internal styling hooks and `force:*` tokens.
- Do not require new objects, records, Apex, Flow changes, or external services.
- Keep copy concise enough for a home/launcher surface.
- Treat the launcher as an orientation surface, not the simulation engine.
