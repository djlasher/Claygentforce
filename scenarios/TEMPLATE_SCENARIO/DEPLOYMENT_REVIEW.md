# Deployment Review: [Scenario Title]

## Scenario

[Scenario Title]

---

## Status

[Draft Deployment Review / Ready to Validate / Ready to Deploy / Ready with Risks / Not Ready]

---

## Deployment Summary

[Summarize what is being deployed and why deployment review matters.]

Include:

- expected metadata scope
- deployment complexity
- validation concerns
- rollback or mitigation concerns

---

## Potential Deployment Scope

Potential metadata in scope:

- [metadata item 1]
- [metadata item 2]
- [metadata item 3]
- [metadata item 4]

Potential metadata out of scope:

- [metadata item 1]
- [metadata item 2]
- [metadata item 3]
- [metadata item 4]

---

## Metadata Dependency Review

Before deployment, verify dependencies.

### Object and Field Dependencies

Confirm:

- [dependency check 1]
- [dependency check 2]
- [dependency check 3]

### Automation Dependencies

Confirm:

- [dependency check 1]
- [dependency check 2]
- [dependency check 3]

### Permission Dependencies

Confirm:

- [dependency check 1]
- [dependency check 2]
- [dependency check 3]

### Reporting / UI Dependencies

Confirm:

- [dependency check 1]
- [dependency check 2]
- [dependency check 3]

---

## Pre-Deployment Checklist

Before deployment:

1. [check 1]
2. [check 2]
3. [check 3]
4. [check 4]
5. [check 5]

---

## Suggested Validation Commands

Potential Salesforce CLI validation commands:

sf project deploy validate --manifest manifest/package.xml

sf project deploy start --manifest manifest/package.xml --dry-run

sf project deploy start --manifest manifest/package.xml

Use the appropriate command based on the actual org, CLI version, and release process.

---

## Deployment Order

Recommended order:

1. [deployment step 1]
2. [deployment step 2]
3. [deployment step 3]
4. [deployment step 4]

If deployment order does not matter, explain why.

---

## Post-Deployment Validation

After deployment:

1. [validation step 1]
2. [validation step 2]
3. [validation step 3]
4. [validation step 4]

---

## Rollback or Mitigation Plan

Preferred mitigation:

- [mitigation 1]
- [mitigation 2]
- [mitigation 3]

Full rollback considerations:

- [rollback consideration 1]
- [rollback consideration 2]
- [rollback consideration 3]

---

## Release Risks

Known risks:

- [risk 1]
- [risk 2]
- [risk 3]
- [risk 4]

---

## Deployment Readiness

Current assessment: [Ready to Validate / Ready to Deploy / Ready with Risks / Needs Fixes / Not Ready]

Explain whether deployment is ready to proceed.

If blocked, document the smallest path to unblock release readiness.

---

## Guiding Principle

[Write the deployment lesson for this scenario.]