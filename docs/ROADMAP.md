# Claygentforce Roadmap

The direction is: **real Salesforce implementation first, simulated delivery-team intelligence second, live agents third**.

The near-term product direction is chat-first: scenario context should appear through delivery-role messages, learner prompts, bounded choices, role pushback, and closeout feedback rather than large always-visible dashboards.

---

1. **Refine the completed Scenario 001 run experience**  
   Keep the active learner path in the main chat flow and use result panels only as compact summaries. Add closeout/run-status treatment only if it improves clarity without creating another dashboard.

2. **Add non-scored decision quality scaffolding**  
   Extend the existing catalog data so future versions can distinguish strong, incomplete, and risky learner paths. Do not label choices as right/wrong or add scoring until the static evaluation model is useful.

3. **Run and complete Scenario 001 manual smoke-test validation when time allows**  
   Use `SMOKE_TEST_CHECKLIST.md` for full end-to-end org testing. `RUN-004-smoke-test-validation.md` currently captures static validation and explicitly defers full manual smoke testing.

4. **Add CI validation eventually**  
   Use GitHub Actions to run linting and later Salesforce validation once credentials/secrets are ready.

5. **Choose Scenario 002**  
   Select the next realistic Salesforce delivery problem only after the Scenario 001 bounded chat-first simulator pattern is stable enough to reuse.

6. **Create Scenario 002 planning artifacts from the reusable template**  
   Define the brief, stakeholder intake, acceptance criteria, architecture decision, QA review, security review, deployment review, retrospective shell, Delivery Room summary, learner path, and static transcript candidates.

7. **Reuse the Scenario 001 vertical-slice pattern for Scenario 002**  
   Build another small slice with fields, automation, layout/list view, permission set, LWC surface, smoke checklist, and run artifacts only when they serve the scenario learning objective.

8. **Add DevOps/release, QA, and Security simulation depth as needed**  
   Expand these areas through scenario-driven chat messages, role pushback, evidence prompts, and validation checklists rather than broad standalone documentation.

9. **Explore Agentforce integration later**  
   Only after the static/bounded interaction pattern is stable. First Agentforce use should generate or select bounded role-specific guidance, not control metadata or make broad decisions.

10. **Add persistence/scoring later**  
    Track saved scenario runs, learner choices, evidence captured, scoring, or reflection only after local chat interactions prove useful.

11. **Add Data Cloud only when there is a real scenario reason**  
    Use it later for customer profile/tier/context enrichment if it supports a real learning objective.

12. **Prototype multi-agent orchestration outside Salesforce first if needed**  
    Test orchestration safely in repo artifacts or local scripts before wiring dynamic behavior into Salesforce UI.

13. **Create portfolio/demo narrative later**  
    After simulator mechanics stabilize, shape Scenario 001 into a concise implementation story for TA/FDE/Agentforce conversations.

14. **Record a short walkthrough later**  
    Eventually capture a concise walkthrough showing Flow behavior, Case panel behavior, launcher/chat simulation, app navigation, learner choice flow, role challenge, and delivery-team interpretation.

15. **Prepare interview/enablement explanations**  
    Turn Claygentforce into a concise explanation artifact for Salesforce TA/FDE/Agentforce discussions.

16. **Keep expanding by vertical slices**  
    The core pattern remains: small scenario, real Salesforce metadata, visible UI, role guidance, bounded learner choices, role pushback, smoke tests, run artifacts, issue lessons, then expand.
