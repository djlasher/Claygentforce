# Claygentforce

Claygentforce is a Salesforce delivery team simulation and enablement project.

The goal is to help learners practice Salesforce delivery judgment: requirements discovery, architecture decisions, implementation planning, admin configuration, DevOps workflows, QA review, security review, stakeholder tradeoffs, deployment readiness, and incident response.

Claygentforce is not a generic chatbot, quiz app, or simple Salesforce demo. It is a scenario-driven Salesforce learning environment where realistic metadata and local role-agent orchestration help learners practice delivery decisions safely.

---

## Current Project Status

Current status: Scenario 001 implemented as a real Salesforce vertical slice with a chat-first local orchestration prototype.

Scenario 001 is:

**Case Escalation and Manager Visibility**

The project currently includes:

- Salesforce DX project structure
- full Scenario 001 deployment manifest
- launcher-only deployment manifest
- Case high-risk fields
- before-save Case Flow with precedence paths
- Case layout/list view/permission set support
- read-only Case risk panel LWC
- source-controlled Claygentforce app/home tab/launcher page
- chat-first `scenarioLauncher` LWC
- deterministic local orchestration modules in the launcher bundle
- reusable scenario template and Scenario 001 artifacts
- smoke checklist and run logs
- devlog, issue log, roadmap, architecture, and AI workflow guidance

The current launcher architecture is:

```text
run state
  -> orchestration plan
  -> local adapter
  -> role-agent registry
  -> normalized task outputs
  -> run model
  -> LWC renderer
```

Current implementation remains local and deterministic: no Apex, persistence, external AI calls, live Agentforce invocation, Data Cloud integration, freeform chat input, async streaming, randomization, or scoring.

---

## Repository Structure

```text
Claygentforce/
  force-app/
    main/default/
      applications/
      flexipages/
      flows/
      layouts/
      lwc/
        scenario001CaseRiskPanel/
        scenarioLauncher/
      objects/
      permissionsets/
      tabs/
  manifest/
    package.xml
    scenario-001-package.xml
    scenario-launcher-package.xml
  docs/
    AI_SESSION_STARTER.md
    AI_COMMANDS_AND_WORKFLOWS.md
    PROJECT_VISION.md
    ARCHITECTURE.md
    AGENT_ROLES.md
    DELIVERY_SIMULATION_LOOP.md
    ROADMAP.md
    DEVLOG.md
    ISSUES_LOG.md
    adr/
  prompts/
  scenarios/
    README.md
    TEMPLATE_SCENARIO/
    001-case-escalation-manager-visibility/
      runs/
  sfdx-project.json
  README.md
```

---

## Key Docs

Start here:

- `docs/AI_SESSION_STARTER.md` — current project state for future ChatGPT sessions
- `docs/AI_COMMANDS_AND_WORKFLOWS.md` — Codex and implementation workflow guidance
- `docs/PROJECT_VISION.md` — product direction and current status
- `docs/ARCHITECTURE.md` — current system/repository architecture
- `docs/AGENT_ROLES.md` — high-level delivery role model
- `docs/DELIVERY_SIMULATION_LOOP.md` — delivery learning loop and run modes
- `docs/ROADMAP.md` — active priorities and future direction
- `docs/DEVLOG.md` — milestone-oriented development history
- `docs/ISSUES_LOG.md` — meaningful setup/tooling/deployment issues and lessons
- `docs/adr/` — architecture decision records

Scenario-specific guidance lives under `scenarios/` instead of separate duplicate docs.

---

## Current Deployment Manifests

For full Scenario 001 metadata validation/deployment:

```bash
sf project deploy validate --manifest manifest/scenario-001-package.xml --target-org Claygentforce
sf project deploy start --manifest manifest/scenario-001-package.xml --target-org Claygentforce
```

For normal launcher-only LWC/orchestration iterations:

```bash
sf project deploy validate --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce
sf project deploy start --manifest manifest/scenario-launcher-package.xml --target-org Claygentforce
```

Use the launcher-only manifest for launcher work so the Scenario 001 Flow is not redeployed unnecessarily.

---

## Scenario 001

Scenario 001 teaches the learner to evaluate Case escalation and manager visibility tradeoffs.

It currently includes:

- real Salesforce metadata for high-risk Case visibility
- Flow precedence behavior for closed cases, manual override, strategic customer escalation, stale escalation, priority escalation, and clean/no-match clearing
- read-only Case risk review panel
- chat-first launcher with local role-agent task routing
- bounded learner choices
- Team Challenge pushback
- Decision Quality Signals
- compact closeout and validation checklist

Full manual smoke/regression testing remains tracked through the Scenario 001 smoke checklist.

---

## Guiding Principle

Claygentforce should make Salesforce delivery judgment easier to practice, inspect, and improve.

If a feature does not improve that learning loop, defer it.
