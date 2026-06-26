# Claygentforce Project Vision

Claygentforce is a Salesforce delivery team simulation and enablement project.

The goal is to help learners practice Salesforce delivery judgment in a safe sandbox: requirements discovery, architecture decisions, implementation planning, admin configuration, DevOps workflows, QA review, security review, stakeholder tradeoffs, deployment readiness, and incident response.

Claygentforce is not a generic chatbot, quiz app, or simple Salesforce demo. It is a guided delivery-room simulator where learners experience the ambiguity, constraints, review pressure, tradeoffs, and consequences that happen on real Salesforce projects.

---

## Product Direction

The product direction is:

1. **Real Salesforce implementation first**  
   Scenarios should include realistic metadata, automation, permissions, layouts, validation, and deployment discipline when those things support the learning objective.

2. **Deterministic local orchestration second**  
   Scenario runs should be driven by local state, explicit task plans, bounded learner choices, local role-agent task outputs, and compact closeout feedback before introducing dynamic agents.

3. **Agentforce/Data Cloud-backed role agents later**  
   After the local orchestration pattern is stable, selected local role-agent tasks can be replaced or enriched by Agentforce, Data Cloud context, Apex, persistence, or other server-backed behavior.

The current learner experience should stay chat-first. Scenario context should appear through delivery-role messages, learner prompts, bounded choices, role pushback, decision quality signals, and closeout summaries rather than large always-visible dashboards.

---

## Current Status

Scenario 001, **Case Escalation and Manager Visibility**, is the active implemented vertical slice.

It currently includes:

- Salesforce DX project structure and manifests
- Case high-risk fields
- before-save Case Flow with precedence paths
- Case layout/list view/permission set support
- read-only Case risk panel LWC
- source-controlled Claygentforce app/home tab/launcher page
- chat-first `scenarioLauncher` LWC
- deterministic local orchestration modules inside the launcher bundle
- non-scored Decision Quality Signals
- local role-agent task routing
- launcher-only deployment manifest
- scenario artifacts, run logs, smoke checklist, devlog, roadmap, and issue log

The current architecture is intentionally local and deterministic. It has no Apex, persistence, external AI calls, live Agentforce invocation, Data Cloud integration, freeform chat input, async streaming, randomization, or scoring.

---

## Guiding Principle

Claygentforce should make Salesforce delivery judgment easier to practice, inspect, and improve.

If a feature does not improve that learning loop, defer it.
