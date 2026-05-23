# Security Review: [Scenario Title]

## Scenario

[Scenario Title]

---

## Status

[Draft Security Review / Approved / Approved with Risks / Needs Clarification / Rework Required]

---

## Security Summary

[Summarize the main security concern for this scenario.]

Include:

- data involved
- users involved
- visibility or sharing concerns
- automation or integration concerns
- reporting exposure concerns

---

## Data Involved

Potential data involved:

- [object/record/data item 1]
- [object/record/data item 2]
- [object/record/data item 3]
- [object/record/data item 4]

Potential sensitive data:

- [sensitive data item 1]
- [sensitive data item 2]
- [sensitive data item 3]

---

## Intended Access

[Persona or user group] should be able to:

- [access behavior 1]
- [access behavior 2]
- [access behavior 3]

[Persona or user group] should not be able to:

- [restricted behavior 1]
- [restricted behavior 2]
- [restricted behavior 3]

---

## Key Security Questions

Before implementation, answer:

- Who should view the data?
- Who should create the data?
- Who should edit the data?
- Who should delete the data, if anyone?
- Who should report on or export the data?
- Does record sharing match the business process?
- Are sensitive fields exposed through reports, dashboards, pages, APIs, or notifications?
- Does automation or Apex run in a context that could bypass user expectations?

---

## Object Access Review

Review:

- object read access
- object create access
- object edit access
- object delete access
- permission set needs
- whether broad profile changes are avoidable

Recommended approach:

- [recommendation 1]
- [recommendation 2]
- [recommendation 3]

---

## Field-Level Security Review

Review FLS for:

- [field 1]
- [field 2]
- [field 3]
- [field 4]

Recommended approach:

- [recommendation 1]
- [recommendation 2]
- [recommendation 3]

---

## Record Access and Sharing Review

Review:

- org-wide defaults
- ownership model
- role hierarchy behavior
- sharing rules
- teams, queues, territories, or manual sharing
- external or community user access if relevant

Recommended approach:

- [recommendation 1]
- [recommendation 2]
- [recommendation 3]

---

## Reporting and Dashboard Review

Review:

- report folder access
- dashboard running user
- report filters
- export risk
- sensitive fields in reports
- whether reporting visibility matches record access expectations

Recommended approach:

- [recommendation 1]
- [recommendation 2]
- [recommendation 3]

---

## Automation / Apex / Integration Security Review

If automation, Apex, or integrations are involved, review:

- execution context
- CRUD and FLS behavior
- sharing behavior
- integration user access
- connected app permissions
- error handling
- sensitive data in logs or messages

---

## Security Risks

Known risks:

- [risk 1]
- [risk 2]
- [risk 3]
- [risk 4]

---

## Mitigations

Recommended mitigations:

- [mitigation 1]
- [mitigation 2]
- [mitigation 3]
- [mitigation 4]

---

## Security Readiness

Current assessment: [Approved / Approved with Risks / Needs Clarification / Rework Required]

Explain whether security review is ready to proceed.

If blocked, document the smallest path to unblock review.

---

## Guiding Principle

[Write the security lesson for this scenario.]