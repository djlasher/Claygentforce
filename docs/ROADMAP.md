# Claygentforce Roadmap

The direction is: **real Salesforce implementation first, deterministic local orchestration second, live Agentforce/Data Cloud-backed agents third**.

The near-term product direction remains chat-first: scenario context should appear through delivery-role messages, learner prompts, bounded choices, role pushback, task outcomes, and closeout feedback rather than large always-visible dashboards.

---

## Recently completed

1. **Refined the completed Scenario 001 run experience**  
   The launcher now keeps the active learner path in the main chat flow, includes a visible full-run reset after the run starts, keeps supporting reference context collapsed and secondary, and shows a compact completed-run closeout after challenge response selection.

2. **Added non-scored decision quality scaffolding**  
   Completed Scenario 001 follow-up actions now surface compact Decision Quality Signals that distinguish coverage, evidence gaps, reviewer lens, and future evaluation direction without right/wrong labels or scoring.

3. **Introduced local deterministic orchestration architecture**  
   Scenario 001 now has a local orchestration seam: run state is converted into an explicit task plan, the plan executes through a local adapter, role-agent tasks route through a local role-agent registry, and normalized outputs feed the LWC run model.

4. **Added launcher-only deployment workflow**  
   `manifest/scenario-launcher-package.xml` now supports launcher-only LWC validation/deployment without redeploying the Scenario 001 Flow or consuming additional Flow versions.

---

## Next priorities

1. **Stabilize and simplify the local orchestration model**  
   Keep tightening the local task-plan, adapter, and role-agent registry so the architecture is easy to understand and extend. Avoid adding more visible explanation panels unless they directly improve the learner run.

2. **Run and complete Scenario 001 manual smoke-test validation when time allows**  
   Use `SMOKE_TEST_CHECKLIST.md` for full end-to-end org testing. `RUN-004-smoke-test-validation.md` currently captures static validation and explicitly defers full manual smoke testing. Use `manifest/scenario-launcher-package.xml` for launcher-only iterations and the full Scenario 001 manifest only when full metadata validation is needed.

3. **Add CI validation eventually**  
   Use GitHub Actions to run linting and later Salesforce validation once credentials/secrets are ready. Prefer a launcher-only validation path first, then add full Scenario 001 validation only after Flow version cleanup is handled.

4. **Choose Scenario 002**  
   Select the next realistic Salesforce delivery problem after the Scenario 001 local orchestration pattern is stable enough to reuse.

5. **Create Scenario 002 planning artifacts from the reusable template**  
   Define the brief, stakeholder intake, acceptance criteria, architecture decision, QA review, security review, deployment review, retrospective shell, Delivery Room summary, learner path, local orchestration tasks, and static transcript candidates.

6. **Reuse the Scenario 001 vertical-slice and orchestration pattern for Scenario 002**  
   Build another small slice with fields, automation, layout/list view, permission set, LWC surface, smoke checklist, run artifacts, local task-plan routing, and role-agent outputs only when they serve the scenario learning objective.

7. **Deepen role-agent task behavior without bloating the UI**  
   Add DevOps/release, QA, Security, Product Owner, Architect, Support Manager, and Delivery Coordinator depth through task outputs, role pushback, validation prompts, and decision quality signals. Keep these as orchestrated role-agent tasks, not broad standalone documentation panels.

8. **Prepare the Agentforce replacement seam**  
   Keep the local adapter interface clean so future Agentforce actions can replace selected local role-agent tasks. First Agentforce use should generate or select bounded role-specific guidance, not control metadata or make broad delivery decisions.

9. **Add Data Cloud only when there is a real scenario reason**  
   Use Data Cloud later for customer profile, tier, risk, account history, or context enrichment when it supports a real scenario learning objective. Data Cloud should enrich orchestration context, not become a disconnected demo feature.

10. **Add persistence/reflection later**  
    Track saved scenario runs, learner choices, evidence captured, reflection notes, and eventual scoring only after local orchestrated runs prove useful. Keep scoring deferred until non-scored decision quality is stable.

11. **Create portfolio/demo narrative later**  
    After local orchestration stabilizes, shape Scenario 001 into a concise implementation story for TA/FDE/Agentforce conversations.

12. **Record a short walkthrough later**  
    Eventually capture a concise walkthrough showing Flow behavior, Case panel behavior, launcher/chat simulation, app navigation, learner choice flow, local orchestration plan, role-agent task routing, role challenge, decision quality signals, and delivery-team interpretation.

13. **Prepare interview/enablement explanations**  
    Turn Claygentforce into a concise explanation artifact for Salesforce TA/FDE/Agentforce discussions, emphasizing real Salesforce metadata first and replaceable local orchestration second.

14. **Keep expanding by vertical slices**  
    The core pattern remains: small scenario, real Salesforce metadata, visible UI, deterministic local orchestration, role-agent task outputs, bounded learner choices, role pushback, decision quality signals, smoke tests, run artifacts, issue lessons, then expand.
