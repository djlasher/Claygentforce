# Architecture

Claygentforce is an SFDX-based Salesforce project and documentation-driven AI simulation framework.

The current architecture is intentionally lightweight. The project should first establish reusable documentation, role definitions, simulation flow, and AI prompt structure before adding complex Salesforce metadata or application automation.

---

## Architecture Goals

Claygentforce should support three architecture goals:

1. Maintain a valid Salesforce DX project structure.
2. Preserve reusable context for humans and AI tools.
3. Enable repeatable Salesforce delivery simulations through documented agents, prompts, scenarios, and review loops.

The initial architecture prioritizes clarity and iteration speed over platform complexity.

---

## Current Repository Structure

```text
Claygentforce/
  force-app/
  manifest/
  docs/
    PROJECT_VISION.md
    AGENT_ROLES.md
    DELIVERY_SIMULATION_LOOP.md
    ARCHITECTURE.md
    DEVLOG.md
    ISSUES_LOG.md
  .claygentforce/
    prompts/
      architect-agent.md
      ba-agent.md
      qa-agent.md
      devops-agent.md
      security-agent.md
  sfdx-project.json
  README.md
  .gitignore