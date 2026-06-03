# Claygentforce Roadmap

The direction is: **real Salesforce implementation first, simulated delivery-team intelligence second, live agents third**.

That keeps Claygentforce grounded and portfolio-worthy instead of becoming a flashy chatbot shell.

---

1. **Run and complete Scenario 001 smoke-test validation**  
   Execute the hardened checklist end-to-end, capture results in `RUN-004-smoke-test-validation.md`, and log any remaining org quirks.

2. **Choose Scenario 002**  
   Select the next realistic Salesforce delivery problem, likely something like “Entitlement SLA breach visibility” or “Experience Cloud access request triage.”

3. **Create Scenario 002 planning artifacts**  
   Copy the scenario template, define the brief, stakeholder intake, acceptance criteria, architecture decision, QA review, security review, deployment review, and retrospective shell.

4. **Reuse the Scenario 001 vertical-slice pattern for Scenario 002**  
   Build another small slice with fields, automation, layout/list view, permission set, LWC surface, smoke checklist, and run artifacts only when they serve the scenario learning objective.

5. **Add static simulated delivery-room views outside Case context**  
   Create a generalized delivery-room experience that is not tied only to a single Case record page.

6. **Add role-specific prompt files for Scenario 001**  
   Create focused prompts for BA, Architect, QA, Security, DevOps, Support Manager, Product Owner, and Client Stakeholder.

7. **Add agent run transcripts as repo artifacts**  
   Let AI roles review Scenario 001 and store outputs into `runs/` before integrating anything live.

8. **Create first multi-role static simulation flow**  
   Use stored role outputs to show how different delivery roles react to the same implementation decision.

9. **Add DevOps/release simulation artifacts**  
   Include deployment plans, rollback plans, validation expectations, and post-deploy smoke-test simulation.

10. **Add QA simulation artifacts**  
    Generate expected test cases, edge cases, regression risks, and UAT observations.

11. **Add Security simulation artifacts**  
    Capture sharing, permission set, field visibility, and data exposure concerns.

12. **Add GitHub issue templates or scenario task templates**  
    Make it easier to track future scenario increments as implementation work.

13. **Add CI validation eventually**  
    Use GitHub Actions to run linting and later Salesforce validation once credentials/secrets are ready.

14. **Add scratch org or dev org setup documentation**  
    Make it possible to recreate the MVP from source without relying on memory.

15. **Package or deployment-plan cleanup**  
    Decide whether the project remains source-deploy only or eventually becomes unlocked-package friendly.

16. **Explore Agentforce integration later**  
    Only after the static simulation pattern is stable and bounded.

17. **Use Agentforce for bounded role responses**  
    First Agentforce use should generate or select role-specific guidance, not control metadata or make broad decisions.

18. **Add Data Cloud only when there is a real scenario reason**  
    Use it later for customer profile/tier/context enrichment if it supports a real learning objective.

19. **Add multi-agent orchestration outside Salesforce first if needed**  
    Prototype orchestration safely in repo artifacts or local scripts before wiring anything into Salesforce UI.

20. **Connect agents to scenario artifacts**  
    Agents should read scenario brief, acceptance criteria, architecture notes, QA/security reviews, and current metadata state.

21. **Create delivery-room orchestration**  
    The eventual experience is multiple delivery roles collaborating dynamically, not one chatbot answering questions.

22. **Add learner scoring or reflection systems**  
    Track whether the learner identified risks, asked clarifying questions, chose safe implementation paths, and tested edge cases.

23. **Add progressive difficulty modes**  
    Guided mode gives hints, standard mode gives less, hard mode introduces ambiguity and consequences.

24. **Create portfolio/demo narrative later**  
    After the simulator mechanics stabilize, shape Scenario 001 into a concise implementation story for TA/FDE/Agentforce conversations.

25. **Record a short walkthrough later**  
    Eventually capture a concise walkthrough showing Flow behavior, simulation layers, launcher, app navigation, and delivery-team interpretation.

26. **Prepare interview/enablement explanations**  
    Turn Claygentforce into a concise explanation artifact for Salesforce TA/FDE/Agentforce discussions.

27. **Keep expanding by vertical slices**  
    The core pattern remains: small scenario, real Salesforce metadata, visible UI, role guidance, smoke tests, run artifacts, issue lessons, then expand.
