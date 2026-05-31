# RUN-001: Manager Override Path

## Scenario

Scenario 001: Case Escalation and Manager Visibility

This run simulates a support manager manually flagging a Case that does not match the normal priority-based escalation rule.

## Starting Case State

| Field              | Value    |
| ------------------ | -------- |
| Status             | New      |
| Priority           | Medium   |
| High Risk Override | Enabled  |
| Customer Tier      | Standard |

## Flow Path

Flow v3 evaluates the Case in this order:

1. The Case is not closed, so clearing for closed status does not apply.
2. `High_Risk_Override__c` is true.
3. The Flow sets `High_Risk__c` to true.
4. The Flow sets `High_Risk_Reason__c` to `Manual Review`.
5. Strategic customer and priority criteria are skipped because manual override takes precedence.

## Resulting System Behavior

- The Case is flagged as high-risk.
- The high-risk reason is `Manual Review`.
- The Case appears in the `Open High-Risk Cases` list view.
- The Scenario 001 LWC shows the state as `Manual Override`.
- The Scenario Signals strip shows `Override precedence`.

## Simulated Delivery-Team Observations

### Support Manager

The manual override gives managers a practical path when the formal criteria are too narrow. This is useful for operational judgment, especially early in the scenario when requirements are still being tested.

### Product Owner

Manual override protects urgent exceptions without expanding automation too quickly. The team should watch whether managers use it occasionally or start depending on it as the main escalation path.

## Simulated QA Observations

- Test a Medium priority Case with override enabled.
- Confirm the Case becomes high-risk with reason `Manual Review`.
- Confirm disabling the override causes Flow v3 to clear high-risk values unless another criterion matches.
- Confirm a closed overridden Case is cleared and removed from active escalation tracking.

## Simulated Architecture Observations

Manual override is intentionally first after closed-case clearing. That keeps human escalation explicit and predictable.

This avoids adding more fields or custom code before the team proves the escalation model needs them. If override usage becomes common, the criteria should be revisited rather than relying on manual review as a permanent workaround.

## Outcome and Risk Notes

Current outcome: Manager visibility is ensured through manual escalation.

Risk if shipped as-is: Overuse of manual overrides could reduce signal quality.

## Run Result

Pass for the current vertical slice. The manual override path is understandable, testable, and aligned with the read-only LWC guidance.
