# Metadata Build Notes: Case Escalation and Manager Visibility

## Scenario

001-case-escalation-manager-visibility

---

## Purpose

This file tracks actual Salesforce metadata work for Scenario 001.

It should distinguish between:

- metadata that has been created
- metadata that is planned
- metadata that is intentionally deferred
- deployment or validation notes
- Salesforce-specific implementation questions

This file should stay practical and implementation-focused.

---

## Current Metadata Status

Status: Initial metadata started

The project now includes the first Salesforce metadata for Scenario 001.

---

## Metadata Created

### Case Fields

Created fields:

| Metadata | Purpose | Status |
|---|---|---|
| `Case.High_Risk__c` | Checkbox indicating whether the Case is high-risk for manager review | Created |
| `Case.High_Risk_Reason__c` | Picklist explaining why the Case is high-risk | Created |

Source paths:

- `force-app/main/default/objects/Case/fields/High_Risk__c.field-meta.xml`
- `force-app/main/default/objects/Case/fields/High_Risk_Reason__c.field-meta.xml`

---

## Package Manifest

`manifest/package.xml` currently includes:

- `Case.High_Risk__c`
- `Case.High_Risk_Reason__c`

under `CustomField`.

Note:

The manifest still includes wildcard entries for some metadata types from the initial Salesforce DX project scaffold.

A tighter scenario-specific manifest may be useful later to reduce deploy/retrieve noise.

Scenario-specific manifest added:

- `manifest/scenario-001-package.xml`

This manifest currently includes only Scenario 001 metadata and should be preferred for focused validation/deployment once a Salesforce org is authenticated.

---

## Metadata Deferred

The following metadata is intentionally deferred:

- record-triggered Flow
- list view
- report
- dashboard
- permission set
- custom notification type
- `High_Risk_Override__c`
- `Last_Meaningful_Update__c`

Reason:

The initial metadata increment should stay small until the field foundation is validated.

---

## Open Metadata Questions

Before building more metadata, confirm:

- Should `High_Risk_Reason__c` remain a restricted picklist?
- Are the current picklist values sufficient?
- Should `High_Risk_Override__c` be included in MVP?
- Should stale Case logic be deferred?
- Where does customer tier come from?
- Does Case already have a reliable severity or priority field?
- Should manager visibility be handled by list view only, report only, or both?
- Should field-level security be explicitly added through permission sets?
- Should the next increment be list view metadata or Flow design documentation?

---

## Suggested Validation Command

Use a validation-only deploy before deploying to any org:

```bash
sf project deploy validate --manifest manifest/package.xml
```

If targeting a specific org alias:

```bash
sf project deploy validate --manifest manifest/package.xml --target-org YOUR_ORG_ALIAS
```

---

## Suggested Deploy Command

When ready to deploy:

```bash
sf project deploy start --manifest manifest/package.xml
```

If targeting a specific org alias:

```bash
sf project deploy start --manifest manifest/package.xml --target-org YOUR_ORG_ALIAS
```

---

## Post-Deploy Smoke Check

After deployment, verify:

1. `High Risk` field exists on Case.
2. `High Risk Reason` field exists on Case.
3. Picklist values are available:
   - Top-Tier Customer
   - Critical Severity
   - Stale Case
   - Manual Review
4. Fields are visible only to intended users.
5. Fields are available for list views or reports if needed.
6. No unexpected deployment errors occurred.

---

## Next Recommended Metadata Increment

Recommended next increment:

1. Add a manager-facing list view for open high-risk Cases, if deployable cleanly.
2. Or document Flow logic in detail before creating Flow metadata.

Preferred next step:

Document Flow logic first, then build list view/automation in small increments.

---

## Guiding Principle

Metadata should follow the scenario.

Do not add Salesforce components unless they support a documented learning or implementation objective.

