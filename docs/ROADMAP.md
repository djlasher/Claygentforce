# Claygentforce Roadmap

The direction is: **real Salesforce implementation first, simulated delivery-team intelligence second, live agents third**.

The near-term product direction is now chat-first: scenario context should appear through delivery-role messages, learner prompts, and bounded choices rather than large always-visible dashboards.

---

1. **Clean up and refactor the chat-first launcher code**  
   Refactor `scenarioLauncher` after rapid iteration. Keep behavior the same while improving component structure, data access, naming, CSS organization, and maintainability.

2. **Keep compacting the Delivery Room toward a one-screen demo**  
   Preserve the mini simulation session as the primary surface and reduce supporting dashboard content so the eventual experience resembles a focused chat window with minimal scrolling.

3. **Expand bounded local interactivity**  
   Add more predefined learner choices, follow-up messages, validation notes, and phase transitions without adding Apex, persistence, external AI, or live Agentforce behavior.

4. **Run and complete Scenario 001 manual smoke-test validation when time allows**  
   Use `SMOKE_TEST_CHECKLIST.md` for full end-to-end org testing. `RUN-004-smoke-test-validation.md` currently captures static validation and explicitly defers full manual smoke testing.

5. **Add CI validation eventually**  
   Use GitHub Actions to run linting and later Salesforce validation once credentials/secrets are ready.

6. **Choose Scenario 002**  
   Select the next realistic Salesforce delivery problem only after the Scenario 001 chat-first simulator pattern is cleaner and stable.

7. **Create Scenario 002 planning artifacts from the reusable template**  
   Define the brief, stakeholder intake, acceptance criteria, architecture decision, QA review, security review, deployment review, retrospective shell, Delivery Room summary, learner path, and static transcript candidates.

8. **Reuse the Scenario 001 vertical-slice pattern for Scenario 002**  
   Build another small slice with fields, automation, layout/list view, permission set, LWC surface, smoke checklist, and run artifacts only when they serve the scenario learning objective.

9. **Add DevOps/release, QA, and Security simulation depth as needed**  
   Expand these areas through scenario-driven chat messages, evidence panels, and validation prompts rather than broad standalone documentation.

10. **Explore Agentforce integration later**  
    Only after the static/bounded interaction pattern is stable. First Agentforce use should generate or select bounded role-specific guidance, not control metadata or make broad decisions.

11. **Add persistence/scoring later**  
    Track saved scenario runs, learner choices, evidence captured, scoring, or reflection only after local chat interactions prove useful.

12. **Add Data Cloud only when there is a real scenario reason**  
    Use it later for customer profile/tier/context enrichment if it supports a real learning objective.

13. **Prototype multi-agent orchestration outside Salesforce first if needed**  
    Test orchestration safely in repo artifacts or local scripts before wiring dynamic behavior into Salesforce UI.

14. **Create portfolio/demo narrative later**  
    After simulator mechanics stabilize, shape Scenario 001 into a concise implementation story for TA/FDE/Agentforce conversations.

15. **Record a short walkthrough later**  
    Eventually capture a concise walkthrough showing Flow behavior, Case panel behavior, launcher/chat simulation, app navigation, learner choice flow, and delivery-team interpretation.

16. **Prepare interview/enablement explanations**  
    Turn Claygentforce into a concise explanation artifact for Salesforce TA/FDE/Agentforce discussions.

17. **Keep expanding by vertical slices**  
    The core pattern remains: small scenario, real Salesforce metadata, visible UI, role guidance, bounded learner choices, smoke tests, run artifacts, issue lessons, then expand.
