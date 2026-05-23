# Retrospective: Case Escalation and Manager Visibility

## Scenario

Case Escalation and Manager Visibility

---

## Status

Draft Retrospective

This retrospective captures what the learner, delivery team, and stakeholders should learn from the first Claygentforce scenario.

The goal is not only to document the final solution, but also the reasoning, ambiguity, tradeoffs, risks, and future improvements identified during the simulation.

---

## Original Business Problem

Support managers were struggling to consistently identify urgent or high-risk customer Cases.

The existing process depended heavily on agents manually updating Case Priority or verbally escalating issues. Leadership lacked confidence that important customer Cases were being reviewed quickly enough.

The stakeholder initially requested automatic identification of important Cases and better visibility for managers.

---

## What the Learner Should Discover

The initial stakeholder request was intentionally incomplete.

The learner should discover that:

- urgent and high-risk are ambiguous business terms
- visibility and notification are different problems
- the business first needs reliable visibility before advanced escalation logic
- declarative automation may be sufficient for the MVP
- reporting and sharing considerations matter as much as automation
- manager access and adoption are critical to success
- overbuilding the first release creates unnecessary complexity

---

## Key Decisions

### Decision: Prioritize Visibility Before Complex Escalation

The MVP focused on helping managers reliably identify high-risk Cases before introducing advanced notification or escalation workflows.

Reasoning:

- lower implementation complexity
- easier admin maintenance
- faster release path
- simpler QA and security review
- lower deployment risk

---

### Decision: Use Declarative Automation

The recommended MVP architecture used a record-triggered Flow and a high-risk Case indicator.

Reasoning:

- easier for admins to maintain
- avoids unnecessary Apex
- supports reporting and list views
- sufficient for the initial business need

---

### Decision: Avoid Premature Apex

The Developer role determined Apex was not justified for the MVP.

Reasoning:

- business logic remained simple
- no advanced integrations required
- no proven Flow limitations yet
- lower deployment complexity
- lower long-term maintenance burden

---

### Decision: Treat Sharing Separately from Visibility

The Security review identified that improving visibility should not automatically expand record access.

Reasoning:

- high-risk Cases may contain sensitive customer information
- reports and dashboards can accidentally expose data broadly
- managers may need scoped visibility rather than global visibility

---

## Important Tradeoffs

### Simplicity vs. Automation

A simple visibility solution is easier to maintain but may not proactively notify managers.

### Declarative vs. Programmatic

Flow is easier to maintain for the MVP, but future complexity could eventually justify Apex or custom metadata.

### Speed vs. Precision

A quick first release may use simpler high-risk criteria that are not perfect initially.

### Visibility vs. Security

Making Cases easier to find increases the risk of exposing information too broadly if reports, dashboards, or sharing are not carefully reviewed.

---

## Risks Identified

Known risks included:

- unclear high-risk criteria
- managers expecting real-time notifications
- report or dashboard overexposure
- future Flow complexity growth
- inconsistent data quality
- manager adoption of the visibility workflow
- changing stakeholder expectations after release

---

## QA Learnings

QA should validate not only the happy path, but also:

- recalculation behavior
- incomplete Case data
- sharing behavior
- report visibility
- existing automation conflicts
- manager and non-manager experiences

The scenario demonstrates that small Salesforce changes can still create meaningful regression risk.

---

## Security Learnings

The Security review highlighted several important Salesforce delivery concepts:

- reports can expose sensitive data unexpectedly
- dashboards require careful running-user configuration
- visibility improvements should not silently expand access
- permission sets are preferable to broad profile changes
- automation changes should still follow least-privilege thinking

---

## DevOps Learnings

The deployment review demonstrated that even a small Flow-based change can involve multiple metadata dependencies:

- custom fields
- Flow metadata
- layouts
- permission sets
- reports
- list views
- package.xml updates

The scenario also reinforces the importance of:

- validation deployments
- post-deployment smoke testing
- rollback planning
- safe Flow activation strategy

---

## Stakeholder Learnings

The stakeholder initially described symptoms rather than precise requirements.

The learner should recognize that:

- business users often describe pain, not implementation
- stakeholders may use ambiguous language
- stakeholders may not know whether they need a report, dashboard, queue, Flow, or notification
- successful delivery requires clarification and translation

---

## Product Ownership Learnings

The Product Owner perspective reinforced:

- solving the smallest useful version first
- avoiding unnecessary scope expansion
- separating MVP from future enhancements
- prioritizing maintainability and adoption
- preserving future extensibility without overengineering

---

## Potential Future Enhancements

Future versions could introduce:

- manager notifications
- SLA tracking
- escalation history
- queue reassignment
- dashboard analytics
- custom metadata-driven criteria
- incident workflows
- AI-assisted risk classification
- omni-channel routing enhancements

These should only be added if the business proves the MVP visibility layer is insufficient.

---

## Simulation Outcome Examples

Possible successful outcomes:

- managers identify urgent Cases more reliably
- leadership gains confidence in visibility
- reporting foundation improves
- support agents avoid extra manual work
- admins can maintain criteria safely

Possible failure outcomes:

- criteria are poorly defined
- managers ignore the list view
- security exposure occurs through reporting
- Flow becomes overly complex
- stakeholder expectations expand beyond MVP scope

---

## Retrospective Questions

The learner should reflect on:

- Did the solution address the real business problem?
- Was the first release appropriately scoped?
- Was declarative automation sufficient?
- Were security implications considered early enough?
- Did the QA plan cover realistic edge cases?
- Was deployment risk minimized?
- Did the architecture preserve future flexibility?
- What assumptions remain risky?
- What would justify introducing Apex later?
- What would improve the next version?

---

## Guiding Principle

Good Salesforce delivery is not about building the most complex solution.

It is about understanding the business problem, choosing an appropriately scoped approach, protecting maintainability and security, and creating a foundation that can evolve safely over time.