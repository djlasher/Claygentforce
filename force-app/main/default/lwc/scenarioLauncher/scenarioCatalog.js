const LEARNER_CHOICE_DETAILS = [
  {
    id: "flow-precedence",
    label: "Flow precedence",
    learnerMessage: "I would validate Flow precedence next.",
    followUp: {
      speaker: "QA",
      role: "QA",
      text: "Start by proving each precedence path in order: closed clearing, manual override, Strategic customer, stale escalation, then priority.",
      learningNote:
        "Evidence: a focused test matrix showing expected High Risk and High Risk Reason outcomes for each path."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture evidence that each Flow branch wins in the expected order before claiming the automation is release-ready."
    },
    validationEvidence: {
      recommendedEvidence:
        "A compact test matrix covering closed clearing, manual override, Strategic customer, stale escalation, priority, and clean paths.",
      whyItMatters:
        "Precedence bugs can make the right Case visible for the wrong reason or leave stale high-risk values behind.",
      whatNotToClaimYet:
        "Do not claim full smoke-test completion until the paths are manually verified in the org."
    },
    followUpActions: [
      {
        id: "build-precedence-matrix",
        label: "Build precedence matrix",
        learnerMessage: "I would build a precedence matrix for the Flow paths.",
        response: {
          speaker: "QA",
          role: "QA",
          text: "Good. Include closed Case clearing, manual override, Strategic customer, stale escalation, priority, and the clean path in one readable matrix.",
          learningNote:
            "The matrix should show expected High Risk, High Risk Reason, and Open High-Risk Cases visibility."
        },
        outcome: {
          label: "Precedence evidence clarified",
          summary:
            "The team can see which Flow branch should win before manual testing begins.",
          consequence:
            "Missed precedence rows can hide stale values or incorrect High Risk Reason outcomes.",
          recommendedNextStep:
            "Use the matrix to drive focused org smoke testing."
        },
        validationChecklist: [
          "Create needed test Cases with Case Origin = Phone.",
          "Verify closed Case clearing runs before every escalation path.",
          "Confirm Manual Review, Strategic Customer, Stale Escalation, and Critical Severity reasons are set by the expected branch.",
          "Check High Risk and High Risk Reason on each Case after save.",
          "Confirm only active high-risk Cases appear in Open High-Risk Cases."
        ],
        teamReview: {
          role: "QA",
          summary:
            "Useful precedence-focused path. The team can see how each Flow branch should behave before org testing starts.",
          strength:
            "Connects High Risk, High Risk Reason, and list visibility to one validation matrix.",
          watchOut:
            "Do not let the matrix replace manual checks in the Salesforce org.",
          futureEvaluationType: "precedence-coverage"
        },
        rolePushback: {
          role: "QA",
          speaker: "QA",
          challenge:
            "The matrix is useful, but how do we know update transitions behave correctly after a Case has already been flagged?",
          riskIfIgnored:
            "The Flow may look correct on create while stale High Risk values or reasons remain after later changes.",
          suggestedResponse:
            "Pair the precedence matrix with transition tests for override, Customer Tier, Priority, stale conditions, and closed Case clearing."
        },
        evaluationPlaceholder:
          "Future evaluation can compare whether the learner chose broad precedence coverage before release claims."
      },
      {
        id: "test-clean-path-clearing",
        label: "Test clean-path clearing",
        learnerMessage:
          "I would test that clean-path Cases clear high-risk values.",
        response: {
          speaker: "AR",
          role: "Architect",
          text: "That is the right follow-up. Clearing behavior proves the Flow is not just adding escalation flags but also removing active risk when criteria stop matching.",
          learningNote:
            "Use priority, override, customer tier, stale status, and closure changes as transition cases."
        },
        outcome: {
          label: "Clearing behavior gets attention",
          summary:
            "The validation plan now covers records moving out of escalation, not only records becoming high risk.",
          consequence:
            "If this is skipped, managers may keep seeing Cases that no longer belong in active review.",
          recommendedNextStep:
            "Add clean-path rows to the smoke checklist before release review."
        },
        validationChecklist: [
          "Create or update Cases with Case Origin = Phone where new records are needed.",
          "Disable High Risk Override and lower Priority below High.",
          "Move Customer Tier away from Strategic and avoid stale criteria.",
          "Confirm High Risk and High Risk Reason clear after save.",
          "Verify the Case no longer appears in Open High-Risk Cases."
        ],
        teamReview: {
          role: "Architect",
          summary:
            "Useful clearing-focused path. The team would see that active escalation flags are removed when criteria stop matching.",
          strength:
            "Validates the lifecycle behavior that keeps manager visibility current.",
          watchOut:
            "The team would still ask for transition coverage across override, tier, stale, priority, and closure changes.",
          futureEvaluationType: "clearing-coverage"
        },
        rolePushback: {
          role: "Support Manager",
          speaker: "SM",
          challenge:
            "Clearing is important, but will managers still have enough visibility into Cases that were previously escalated?",
          riskIfIgnored:
            "Active queues stay clean, but historical escalation context may be hard to explain later.",
          suggestedResponse:
            "Validate active clearing now and capture historical reporting as a future review question."
        },
        evaluationPlaceholder:
          "Future evaluation can reward learners who test records leaving escalation, not only records entering escalation."
      }
    ]
  },
  {
    id: "permission-visibility",
    label: "Permission visibility",
    learnerMessage: "I would validate permission visibility next.",
    followUp: {
      speaker: "SE",
      role: "Security",
      text: "Validate that manager visibility comes from standard Case sharing plus the scenario permission set, not from hidden automation shortcuts.",
      learningNote:
        "Evidence: permission set access, field visibility, and list view access checked with the intended reviewer profile."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture access evidence with the intended support manager user before claiming visibility is correctly governed."
    },
    validationEvidence: {
      recommendedEvidence:
        "Permission set, field visibility, and list view access checked with the intended reviewer access model.",
      whyItMatters:
        "The scenario should teach normal Salesforce visibility, not hidden access shortcuts.",
      whatNotToClaimYet:
        "Do not claim production-ready access governance until profile and sharing assumptions are reviewed."
    },
    followUpActions: [
      {
        id: "review-permission-set",
        label: "Review permission set",
        learnerMessage: "I would review the scenario permission set first.",
        response: {
          speaker: "SE",
          role: "Security",
          text: "Start there. Confirm the support manager can see the high-risk fields and list view without relying on unrelated admin access.",
          learningNote:
            "Evidence should separate permission set access from broader profile or sharing assumptions."
        },
        outcome: {
          label: "Access model scoped",
          summary:
            "The team has a clearer view of what the scenario permission set actually grants.",
          consequence:
            "Unclear access evidence can make the demo look correct only because the tester has elevated permissions.",
          recommendedNextStep:
            "Validate with the intended reviewer access model, not only System Administrator."
        },
        validationChecklist: [
          "Confirm the scenario permission set is assigned to the intended reviewer user.",
          "Verify field access for High Risk, High Risk Reason, override, and Customer Tier.",
          "Open the Case record page as the reviewer persona.",
          "Confirm the Scenario 001 risk panel renders without admin-only assumptions."
        ],
        teamReview: {
          role: "Security",
          summary:
            "Good access-focused path. The team can inspect whether the scenario permission set supports the intended review experience.",
          strength:
            "Separates scenario access from broad administrator privileges.",
          watchOut:
            "Do not rely on administrator access as proof that support managers can review the work.",
          futureEvaluationType: "access-governance"
        },
        rolePushback: {
          role: "Security",
          speaker: "SE",
          challenge:
            "Is the reviewer user actually representative of the support manager audience?",
          riskIfIgnored:
            "Access may pass for the test user while real managers still cannot see fields, records, or the list view.",
          suggestedResponse:
            "Validate with the intended manager access model and separate permission set evidence from administrator access."
        },
        evaluationPlaceholder:
          "Future evaluation can push back when learners validate only as System Administrator."
      },
      {
        id: "verify-manager-access",
        label: "Verify manager access",
        learnerMessage: "I would verify manager access to the list and fields.",
        response: {
          speaker: "SM",
          role: "Support Manager",
          text: "That tells us whether the review experience works for the actual manager persona, not just for the implementation team.",
          learningNote:
            "Check the Open High-Risk Cases list view, Case record page, and key high-risk fields together."
        },
        outcome: {
          label: "Manager visibility checked",
          summary:
            "The scenario now validates whether managers can act on the escalation surface.",
          consequence:
            "If access is incomplete, the Flow may flag Cases correctly while managers still cannot review them.",
          recommendedNextStep:
            "Capture a short access note or screenshot during manual org testing."
        },
        validationChecklist: [
          "Use the intended manager or reviewer access model.",
          "Open an active high-risk Case and confirm key fields are visible.",
          "Open the Open High-Risk Cases list view.",
          "Confirm visibility comes from normal Case sharing plus scenario access.",
          "Do not rely only on administrator access for the result."
        ],
        teamReview: {
          role: "Support Manager",
          summary:
            "Good manager-visibility path. The team can validate whether the escalation surface is usable by the intended reviewer.",
          strength:
            "Checks the Case panel, list view, and field visibility as one manager workflow.",
          watchOut:
            "The team would still ask whether sharing assumptions match the real support organization.",
          futureEvaluationType: "manager-visibility"
        },
        rolePushback: {
          role: "Security",
          speaker: "SE",
          challenge:
            "Manager access looks useful, but which access path is actually granting visibility?",
          riskIfIgnored:
            "The release may depend on broad or accidental access instead of normal Case sharing and the scenario permission set.",
          suggestedResponse:
            "Document the sharing and permission assumptions while validating the list view and Case fields."
        },
        evaluationPlaceholder:
          "Future evaluation can distinguish implementation validation from persona-based visibility validation."
      }
    ]
  },
  {
    id: "list-view-accuracy",
    label: "List view accuracy",
    learnerMessage: "I would validate list view accuracy next.",
    followUp: {
      speaker: "SM",
      role: "Support Manager",
      text: "Confirm the Open High-Risk Cases list stays actionable by including active high-risk Cases and excluding closed Cases.",
      learningNote:
        "Evidence: list view screenshots or notes for open flagged, closed flagged, and clean-path Cases."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture list view evidence across open flagged, closed flagged, and clean-path Cases before claiming the queue view is accurate."
    },
    validationEvidence: {
      recommendedEvidence:
        "List view results for open high-risk Cases, closed Cases, and Cases where criteria no longer match.",
      whyItMatters:
        "Managers need a focused queue view they can trust during operational review.",
      whatNotToClaimYet:
        "Do not claim queue accuracy until closed and clean-path records are checked in the target org."
    },
    followUpActions: [
      {
        id: "test-closed-case-exclusion",
        label: "Test closed-case exclusion",
        learnerMessage:
          "I would test that closed Cases fall out of the manager list.",
        response: {
          speaker: "QA",
          role: "QA",
          text: "Yes. Closed Cases should clear active high-risk values and should not remain in the Open High-Risk Cases list.",
          learningNote:
            "Use a previously flagged Case so the test proves lifecycle clearing, not just list filtering."
        },
        outcome: {
          label: "Closed lifecycle validated",
          summary:
            "The manager queue stays focused on active work instead of completed Cases.",
          consequence:
            "Without this test, closed escalation records may create false operational noise.",
          recommendedNextStep:
            "Create or update a high-risk Case, close it, then verify fields and list visibility."
        },
        validationChecklist: [
          "Create or select a high-risk Case with Case Origin = Phone if creating new data.",
          "Confirm High Risk is checked before closure.",
          "Close the Case and save.",
          "Verify High Risk and High Risk Reason clear.",
          "Confirm the Case is absent from Open High-Risk Cases."
        ],
        teamReview: {
          role: "QA",
          summary:
            "Strong lifecycle-validation path. The team can see whether closed Cases leave active escalation tracking.",
          strength:
            "Tests both field clearing and Open High-Risk Cases visibility.",
          watchOut:
            "The team would still ask whether historical reporting needs separate treatment later.",
          futureEvaluationType: "lifecycle-clearing"
        },
        rolePushback: {
          role: "Support Manager",
          speaker: "SM",
          challenge:
            "Closed Case exclusion keeps the active list clean, but where will managers review prior escalations if needed?",
          riskIfIgnored:
            "The team may solve active queue noise while losing sight of historical review context.",
          suggestedResponse:
            "Keep closed Cases out of active escalation and capture historical reporting as a later enhancement."
        },
        evaluationPlaceholder:
          "Future evaluation can favor lifecycle validation before list-view confidence claims."
      },
      {
        id: "test-active-queue-usefulness",
        label: "Test active queue usefulness",
        learnerMessage: "I would test whether the active queue stays useful.",
        response: {
          speaker: "SM",
          role: "Support Manager",
          text: "Useful means the list is small enough to act on and accurate enough to trust during review.",
          learningNote:
            "Include manual override, Strategic customer, stale escalation, and priority examples if time allows."
        },
        outcome: {
          label: "Queue usefulness framed",
          summary:
            "The validation lens shifts from field correctness to manager actionability.",
          consequence:
            "A technically correct list can still fail if it creates too much escalation noise.",
          recommendedNextStep:
            "Review the list with representative active Cases and note any noisy criteria."
        },
        validationChecklist: [
          "Create representative active Cases with Case Origin = Phone where needed.",
          "Include manual override, Strategic customer, stale escalation, and priority examples.",
          "Verify each active flagged Case appears in Open High-Risk Cases.",
          "Confirm clean and closed Cases stay out of the list.",
          "Note whether the resulting list feels actionable for a manager."
        ],
        teamReview: {
          role: "Support Manager",
          summary:
            "Useful operational path. The team can review whether the manager list is accurate and actionable.",
          strength: "Looks beyond field correctness to queue usefulness.",
          watchOut:
            "Watch for escalation noise if too many active Cases appear without clear review priority.",
          futureEvaluationType: "operational-usefulness"
        },
        rolePushback: {
          role: "Product Owner",
          speaker: "PO",
          challenge:
            "If stale escalation adds too many Cases, will managers still trust the list?",
          riskIfIgnored:
            "The list may be technically accurate but too noisy to drive daily review behavior.",
          suggestedResponse:
            "Validate representative active Cases and note whether stale, Strategic, override, and priority paths keep the list actionable."
        },
        evaluationPlaceholder:
          "Future evaluation can assess whether the learner considered operational usefulness, not just filter correctness."
      }
    ]
  },
  {
    id: "stakeholder-tradeoff",
    label: "Stakeholder tradeoff",
    learnerMessage: "I would review the stakeholder tradeoff next.",
    followUp: {
      speaker: "PO",
      role: "Product Owner",
      text: "Frame the tradeoff between fast manager visibility and escalation noise, especially for manual override, Strategic customers, and stale Cases.",
      learningNote:
        "Evidence: a short decision note showing which escalation criteria are in scope now and which should wait."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture the stakeholder decision before expanding criteria so future changes do not dilute the high-risk signal."
    },
    validationEvidence: {
      recommendedEvidence:
        "A concise tradeoff note covering manager visibility, alert fatigue, override governance, and future customer-tier changes.",
      whyItMatters:
        "Scenario 001 is not only automation; it teaches when to say yes, wait, or narrow criteria.",
      whatNotToClaimYet:
        "Do not claim stakeholder alignment until the tradeoff and open follow-up questions are recorded."
    },
    followUpActions: [
      {
        id: "narrow-mvp-criteria",
        label: "Narrow MVP criteria",
        learnerMessage:
          "I would narrow the MVP criteria before adding more escalation rules.",
        response: {
          speaker: "PO",
          role: "Product Owner",
          text: "That protects the first release from becoming too noisy. Keep the MVP focused on criteria the team can explain and test.",
          learningNote:
            "Document which criteria are in scope now and which are deferred."
        },
        outcome: {
          label: "MVP scope protected",
          summary:
            "The team keeps Scenario 001 understandable and testable for the first release.",
          consequence:
            "Stakeholders may still ask why some edge Cases are not visible yet.",
          recommendedNextStep:
            "Record deferred criteria as future decision paths, not hidden requirements."
        },
        validationChecklist: [
          "Confirm current Flow v3 criteria match the agreed MVP scope.",
          "Verify High Risk Reason values explain why each Case escalated.",
          "Check that deferred edge cases are not silently included.",
          "Use the smoke checklist to prove the scoped paths before expanding criteria."
        ],
        teamReview: {
          role: "Product Owner",
          summary:
            "Useful scope-focused path. The team can protect the MVP from becoming hard to explain or test.",
          strength:
            "Keeps stakeholder expectations tied to criteria that are currently implemented.",
          watchOut:
            "The team would still ask how deferred edge cases will be revisited after validation.",
          futureEvaluationType: "scope-control"
        },
        rolePushback: {
          role: "QA",
          speaker: "QA",
          challenge:
            "Narrowing scope helps the MVP, but do we still have regression coverage for the criteria that remain?",
          riskIfIgnored:
            "The team may avoid noisy criteria while still releasing untested Flow paths.",
          suggestedResponse:
            "Pair scope decisions with smoke and regression rows for every included escalation path."
        },
        evaluationPlaceholder:
          "Future evaluation can weigh scope control against missed-risk pressure."
      },
      {
        id: "defer-noisy-edge-cases",
        label: "Defer noisy edge cases",
        learnerMessage:
          "I would defer noisy edge cases until the manager list is validated.",
        response: {
          speaker: "AR",
          role: "Architect",
          text: "That is a reasonable tradeoff. Validate signal quality before adding edge-case automation that may be hard to govern.",
          learningNote:
            "The decision should include what risk is accepted by deferring those edge cases."
        },
        outcome: {
          label: "Noise risk reduced",
          summary:
            "The team avoids expanding automation before proving the current list is useful.",
          consequence:
            "Some legitimate risk cases may remain outside MVP coverage.",
          recommendedNextStep:
            "Pair the deferral with a missed-risk review after smoke testing."
        },
        validationChecklist: [
          "Confirm current automation covers manual override, Strategic customer, stale, and priority paths.",
          "Identify one deferred noisy edge case for later review.",
          "Verify the Open High-Risk Cases list remains focused with current criteria.",
          "Record accepted risk for Cases that remain outside MVP coverage."
        ],
        teamReview: {
          role: "Architect",
          summary:
            "Practical signal-quality path. The team can keep current automation focused before adding noisy edge cases.",
          strength:
            "Treats escalation criteria as a governed signal, not just a growing rule list.",
          watchOut:
            "Watch for stakeholder pressure if deferred Cases later look important.",
          futureEvaluationType: "signal-quality"
        },
        rolePushback: {
          role: "Product Owner",
          speaker: "PO",
          challenge:
            "If we defer edge cases, how will stakeholders know what is intentionally out of scope?",
          riskIfIgnored:
            "Later missed escalations may look like defects instead of agreed MVP boundaries.",
          suggestedResponse:
            "Record the accepted risk and revisit deferred edge cases after manager-list validation."
        },
        evaluationPlaceholder:
          "Future evaluation can introduce stakeholder pushback when deferral hides important risk."
      }
    ]
  },
  {
    id: "release-readiness",
    label: "Release readiness",
    learnerMessage: "I would check release readiness next.",
    followUp: {
      speaker: "DO",
      role: "DevOps",
      text: "Review deployability, manifest coverage, permission set access, and the smoke-test path before treating the Scenario 001 slice as release-ready.",
      learningNote:
        "Evidence: successful lint, package validation, and a manual smoke-test plan using Case Origin = Phone when records are created."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture validation evidence separately from source review; a clean deploy does not prove the org behavior was manually smoke-tested."
    },
    validationEvidence: {
      recommendedEvidence:
        "Lint result, deploy validation result, package member review, permission set check, and deferred manual smoke-test notes.",
      whyItMatters:
        "Release readiness depends on both deployable metadata and observable Case behavior in the org.",
      whatNotToClaimYet:
        "Do not claim full release readiness until the Scenario 001 smoke checklist is executed end to end."
    },
    followUpActions: [
      {
        id: "run-smoke-checklist",
        label: "Run smoke checklist",
        learnerMessage: "I would run the Scenario 001 smoke checklist.",
        response: {
          speaker: "DO",
          role: "DevOps",
          text: "Good. Use the checklist to separate deploy validation from real org behavior, including Case Origin = Phone for manual Case creation.",
          learningNote:
            "Record whether each path passed, failed, or was deferred."
        },
        outcome: {
          label: "Release evidence strengthened",
          summary:
            "The release review can point to observed org behavior instead of source assumptions only.",
          consequence:
            "Skipping this step leaves the MVP in static-validation territory.",
          recommendedNextStep:
            "Capture results in the smoke-test run artifact after manual testing."
        },
        validationChecklist: [
          "Run the Scenario 001 smoke checklist in the target org.",
          "Use Case Origin = Phone when creating manual test Cases.",
          "Record expected Flow result and expected LWC state for each path.",
          "Verify Open High-Risk Cases list visibility.",
          "Mark any deferred manual items clearly."
        ],
        teamReview: {
          role: "DevOps",
          summary:
            "Strong release-readiness path. The team can separate source confidence from observed org behavior.",
          strength:
            "Connects smoke checklist execution to Flow results, LWC state, and list visibility.",
          watchOut:
            "The team would still ask for evidence, not just an intention to run the checklist.",
          futureEvaluationType: "release-validation"
        },
        rolePushback: {
          role: "DevOps",
          speaker: "DO",
          challenge:
            "Running the checklist is the right direction, but what evidence will prove the org behavior actually passed?",
          riskIfIgnored:
            "The release may be described as validated without durable proof of Flow, LWC, access, and list view behavior.",
          suggestedResponse:
            "Capture checklist results, org observations, and deferred items in the smoke-test run artifact."
        },
        evaluationPlaceholder:
          "Future evaluation can separate source readiness from completed org smoke testing."
      },
      {
        id: "capture-deploy-evidence",
        label: "Capture deploy evidence",
        learnerMessage:
          "I would capture deploy and package validation evidence.",
        response: {
          speaker: "DO",
          role: "DevOps",
          text: "That supports release readiness, but keep it distinct from smoke testing. Deployable metadata does not prove the scenario works for users.",
          learningNote:
            "Include lint, deploy validation, and manifest member review."
        },
        outcome: {
          label: "Deployability documented",
          summary:
            "The team has evidence that the metadata package is structurally ready.",
          consequence:
            "This does not prove manager visibility or list view behavior in the org.",
          recommendedNextStep:
            "Follow deploy evidence with targeted manual Scenario 001 smoke tests."
        },
        validationChecklist: [
          "Run lint and capture the result.",
          "Validate deploy with the Scenario 001 manifest if available.",
          "Confirm package members include the launcher, Case panel, Flow, fields, list view, permission set, app, tab, and FlexiPages.",
          "Record that deploy validation is not the same as manual smoke testing."
        ],
        teamReview: {
          role: "DevOps",
          summary:
            "Useful deployability path. The team can confirm the metadata package is structurally ready.",
          strength:
            "Captures lint, deploy validation, and manifest coverage as release inputs.",
          watchOut:
            "Do not present deploy validation as proof that managers can use the scenario in the org.",
          futureEvaluationType: "deploy-evidence"
        },
        rolePushback: {
          role: "Support Manager",
          speaker: "SM",
          challenge:
            "Deploy validation is useful, but how do we know managers can actually use the list view after the Flow flags the Case?",
          riskIfIgnored:
            "The release may look deployable while failing the operational visibility goal.",
          suggestedResponse:
            "Follow deploy evidence with manual org smoke tests for manager access, list view filtering, and Case field visibility."
        },
        evaluationPlaceholder:
          "Future evaluation can push back when learners overstate deploy validation as user validation."
      }
    ]
  },
  {
    id: "regression-risk",
    label: "Regression risk",
    learnerMessage: "I would assess regression risk next.",
    followUp: {
      speaker: "QA",
      role: "QA",
      text: "Focus regression coverage on clearing behavior, High Risk Reason changes, closed Cases, stale escalation, manual override, and Strategic customer precedence.",
      learningNote:
        "Evidence: regression rows for changing Priority, disabling override, closing a Case, changing Customer Tier, and aging queue records."
    },
    simulationNote: {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture negative-path evidence too; the simulator should show when a Case should not remain visible to managers."
    },
    validationEvidence: {
      recommendedEvidence:
        "A regression matrix with expected High Risk, High Risk Reason, and Open High-Risk Cases visibility for each state transition.",
      whyItMatters:
        "Flow precedence can look correct on create but fail when records move out of escalation criteria.",
      whatNotToClaimYet:
        "Do not claim regression coverage if only new high-risk Case creation was tested."
    },
    followUpActions: [
      {
        id: "test-state-transitions",
        label: "Test state transitions",
        learnerMessage:
          "I would test state transitions across escalation paths.",
        response: {
          speaker: "QA",
          role: "QA",
          text: "Exactly. Change Priority, override, Customer Tier, stale conditions, and closure state to prove the Flow updates existing Cases correctly.",
          learningNote:
            "Transition tests are where stale flags and incorrect reasons usually show up."
        },
        outcome: {
          label: "Regression depth increased",
          summary:
            "Testing now covers how Cases move between states, not only how they enter escalation.",
          consequence:
            "Without transition coverage, the list view may collect stale or misleading records over time.",
          recommendedNextStep:
            "Add transition rows to the regression matrix before declaring readiness."
        },
        validationChecklist: [
          "Change Priority from High to Medium and verify clearing or alternate criteria.",
          "Enable and disable High Risk Override and verify Manual Review precedence.",
          "Change Customer Tier into and out of Strategic.",
          "Close a previously high-risk Case and verify clearing.",
          "Confirm list view membership after each transition."
        ],
        teamReview: {
          role: "QA",
          summary:
            "Strong regression-focused path. The team can test whether existing Cases move between escalation states cleanly.",
          strength:
            "Covers state transitions instead of only new Case creation.",
          watchOut:
            "The team would still ask for negative paths so clean Cases do not over-escalate.",
          futureEvaluationType: "state-transition-regression"
        },
        rolePushback: {
          role: "QA",
          speaker: "QA",
          challenge:
            "State transitions are strong coverage, but where are the clean negative paths?",
          riskIfIgnored:
            "The Flow may correctly move risky Cases while still over-escalating Cases that should remain clean.",
          suggestedResponse:
            "Add negative-path rows for non-Strategic, non-stale, non-High priority Cases and closed Cases."
        },
        evaluationPlaceholder:
          "Future evaluation can reward transition coverage over create-only testing."
      },
      {
        id: "add-negative-path-rows",
        label: "Add negative-path rows",
        learnerMessage:
          "I would add negative-path rows to the regression matrix.",
        response: {
          speaker: "QA",
          role: "QA",
          text: "Good. Negative paths prove when a Case should not be flagged or should stop appearing in the manager list.",
          learningNote:
            "Include non-Strategic, non-stale, non-High priority Cases and closed Cases."
        },
        outcome: {
          label: "Missed false positives reduced",
          summary:
            "The team can prove the automation avoids over-escalating clean Cases.",
          consequence:
            "If negative paths are skipped, the MVP may train managers to distrust the list.",
          recommendedNextStep:
            "Pair each positive escalation path with at least one clean or clearing path."
        },
        validationChecklist: [
          "Create a non-Strategic, non-stale, non-High priority Case with Case Origin = Phone.",
          "Confirm High Risk remains unchecked and High Risk Reason remains blank.",
          "Verify the Case does not appear in Open High-Risk Cases.",
          "Add a closed Case negative path to confirm active escalation stays clear."
        ],
        teamReview: {
          role: "QA",
          summary:
            "Useful negative-path validation. The team can confirm clean Cases stay out of active escalation.",
          strength: "Protects manager trust by checking for over-escalation.",
          watchOut:
            "The team would still ask for paired positive paths so each escalation route is also proven.",
          futureEvaluationType: "negative-path-coverage"
        },
        rolePushback: {
          role: "Architect",
          speaker: "AR",
          challenge:
            "Negative paths reduce noise, but have we proven each intended escalation route still works?",
          riskIfIgnored:
            "The team may prevent false positives while missing failures in override, Strategic customer, stale, or priority paths.",
          suggestedResponse:
            "Pair each negative-path row with a positive path for the matching escalation criteria."
        },
        evaluationPlaceholder:
          "Future evaluation can flag missing negative-path evidence as an overconfidence risk."
      }
    ]
  }
];

const buildChallengeResponses = (action) => [
  {
    id: `${action.id}-targeted-validation`,
    label: "Add targeted validation",
    learnerMessage:
      "I would turn the challenge into a targeted validation step before closing the run.",
    reaction: {
      speaker: action.rolePushback.speaker,
      role: action.rolePushback.role,
      text: `Good. That turns the challenge into evidence instead of a release assumption. ${action.rolePushback.suggestedResponse}`,
      learningNote:
        "This keeps the response bounded while tying the closeout to observable Scenario 001 validation."
    },
    closeoutNote: {
      summary:
        "The run closes with a concrete validation action tied to the delivery team's concern.",
      nextStep: action.rolePushback.suggestedResponse
    }
  },
  {
    id: `${action.id}-follow-up-risk`,
    label: "Capture follow-up risk",
    learnerMessage:
      "I would capture this as an explicit follow-up risk for the release review.",
    reaction: {
      speaker: action.rolePushback.speaker,
      role: action.rolePushback.role,
      text: "That can fit a narrow MVP, but the team should be explicit about what remains unproven.",
      learningNote: action.rolePushback.riskIfIgnored
    },
    closeoutNote: {
      summary:
        "The run closes with an unresolved delivery risk that should remain visible after the simulation.",
      nextStep:
        "Record the risk, owner, and validation trigger before presenting the scenario as release-ready."
    }
  }
];

const LEARNER_CHOICE_DETAILS_WITH_RESPONSES = LEARNER_CHOICE_DETAILS.map(
  (choice) => ({
    ...choice,
    followUpActions: choice.followUpActions.map((action) => ({
      ...action,
      rolePushback: {
        ...action.rolePushback,
        challengeResponses: buildChallengeResponses(action)
      }
    }))
  })
);

const LEARNER_PROMPT_CHOICES = LEARNER_CHOICE_DETAILS_WITH_RESPONSES.map(
  ({ id, label, learnerMessage }) => ({
    id,
    label,
    learnerMessage
  })
);

export const DELIVERY_ROOM_CATALOG = {
  productSummary:
    "A static Salesforce delivery-room preview for practicing implementation judgment before live agents, scoring, or orchestration are introduced.",

  guidingPrinciples: [
    "Real Salesforce implementation first",
    "Simulated delivery-team intelligence second",
    "Live agents third"
  ],

  modeHighlights: [
    {
      label: "Mode",
      value: "Static Simulation"
    },
    {
      label: "Implementation",
      value: "Salesforce Metadata + LWC"
    },
    {
      label: "Orchestration",
      value: "Not Enabled"
    }
  ],

  simulationSession: {
    scenario: "Case Escalation and Manager Visibility",
    mode: "Local Static Simulation",
    decisionPhase: "Learner Decision",
    followUpActionPhase: "Follow-up Action",
    challengeResponsePhase: "Challenge Response",
    reviewCompletePhase: "Review Complete",
    defaultFocus: "Not selected yet",
    challengePendingFocus: "Team challenge response pending",
    activePhaseBeforeChoice: "learner-decision",
    activePhaseAfterChoice: "follow-up-action",
    activePhaseDuringChallenge: "follow-up-action",
    activePhaseAfterChallengeResponse: "review-complete",
    completedBeforeChoice: ["intake", "team-review"],
    completedAfterChoice: ["intake", "team-review", "learner-decision"],
    completedDuringChallenge: ["intake", "team-review", "learner-decision"],
    completedAfterChallengeResponse: [
      "intake",
      "team-review",
      "learner-decision",
      "follow-up-action"
    ]
  },

  scenarioMoment: {
    title: "Support manager escalation pressure",
    speaker: "SM",
    role: "Support Manager",
    situation:
      "Managers need a reliable way to see high-risk open Cases before customer escalations are missed.",
    pressure:
      "The stakeholder wants visibility quickly, but the team needs to avoid noisy or misleading manager alerts before release.",
    learnerPrompt: "How do you respond before calling this release-ready?",
    stakes:
      "A fast but unvalidated solution could flag Cases correctly while managers still cannot trust or access the review surface.",
    contextBullets: [
      "Scenario 001 uses real Case fields, before-save Flow v3, a manager list view, permissions, and LWCs.",
      "The team must balance speed, visibility, access, regression coverage, and escalation noise.",
      "Your first response sets the validation lens for the rest of this local simulation run."
    ]
  },

  simulationPhases: [
    {
      id: "intake",
      label: "Intake"
    },
    {
      id: "team-review",
      label: "Team Review"
    },
    {
      id: "learner-decision",
      label: "Learner Decision"
    },
    {
      id: "follow-up-action",
      label: "Follow-up Action"
    },
    {
      id: "review-complete",
      label: "Review Complete"
    }
  ],

  deliverySnapshot: [
    {
      label: "Current scenario",
      value: "Scenario 001: Case Escalation and Manager Visibility"
    },
    {
      label: "Delivery phase",
      value: "Implemented MVP validation"
    },
    {
      label: "Learner role",
      value: "Salesforce delivery team member"
    },
    {
      label: "Implementation status",
      value: "Static delivery room with real Salesforce metadata"
    }
  ],

  sectionSubtitles: {
    snapshot: "A quick read on what the learner is reviewing right now.",
    roles:
      "The reusable delivery-team perspectives that shape scenario review.",
    board:
      "Implemented and planned scenario surfaces for the simulator roadmap.",
    learningPath:
      "The learner arc for Scenario 001 from intake through tradeoff reflection.",
    transcript:
      "Static role notes that preview the future delivery-room conversation.",
    chatPreview:
      "A bounded local run where the learner responds to a Scenario 001 delivery-room moment.",
    chatPreviewNote:
      "Future versions will stream role messages and prompt learner choices one at a time. This preview uses local static choices only.",
    deferred: "Capabilities intentionally held for later milestones.",
    constraints:
      "Current boundaries that keep this app source-driven and reviewable."
  },

  deliveryRoles: [
    {
      name: "BA",
      focus: "Clarifies intake, criteria, and stakeholder intent"
    },
    {
      name: "Architect",
      focus: "Frames precedence, maintainability, and data model tradeoffs"
    },
    {
      name: "Admin/Developer",
      focus: "Implements Flow, fields, pages, list views, and LWCs"
    },
    {
      name: "QA",
      focus: "Tests edge cases, clearing behavior, and regression paths"
    },
    {
      name: "Security",
      focus: "Reviews access, sharing, field visibility, and permissions"
    },
    {
      name: "DevOps",
      focus: "Checks deployability, manifest coverage, and release readiness"
    },
    {
      name: "Support Manager",
      focus: "Validates manager visibility and operational usefulness"
    },
    {
      name: "Product Owner / Stakeholder",
      focus: "Balances urgency, scope, and customer impact"
    }
  ],

  scenarios: [
    {
      key: "scenario-001",
      name: "Scenario 001: Case Escalation and Manager Visibility",
      status: "Implemented MVP",
      statusTone: "implemented",
      surface: "Case record page",
      skillFocus: "Escalation criteria, manager visibility, delivery tradeoffs",
      implementationStatus: "Real Salesforce metadata and static simulation",
      phase: "Validation hardening",
      summary:
        "A real Case automation slice with static delivery-team interpretation.",
      details: [
        {
          label: "Salesforce surface",
          value: "Case record page"
        },
        {
          label: "Core metadata",
          value:
            "Case fields, before-save Flow v3, list view, permission set, LWC"
        },
        {
          label: "Skill focus",
          value: "Escalation criteria, manager visibility, delivery tradeoffs"
        },
        {
          label: "Simulation layers",
          value:
            "Delivery Team Channel, Outcome and Risk, Decision Paths, Learning Checkpoints, Stakeholder Pressure, Learner Branching, Consequence Preview, Challenge Mode"
        },
        {
          label: "Current entry point",
          value: "Open a Case record with the Scenario 001 Risk Review panel"
        }
      ]
    },
    {
      key: "scenario-002",
      name: "Scenario 002: To Be Defined",
      status: "Placeholder / Planned",
      statusTone: "planned",
      surface: "TBD",
      skillFocus: "TBD",
      implementationStatus: "Not yet implemented",
      phase: "Not selected",
      summary: "Reserved for the next Salesforce delivery problem.",
      details: [
        {
          label: "Skill focus",
          value: "TBD"
        },
        {
          label: "Salesforce surface",
          value: "TBD"
        },
        {
          label: "Implementation status",
          value: "Not yet implemented"
        }
      ]
    },
    {
      key: "future-scenario",
      name: "Future Scenario",
      status: "Placeholder / Planned",
      statusTone: "deferred",
      surface: "TBD",
      skillFocus: "TBD",
      implementationStatus: "Reserved for a later vertical slice",
      phase: "Future milestone",
      summary:
        "Space for additional vertical slices once the pattern stabilizes.",
      details: [
        {
          label: "Skill focus",
          value: "TBD"
        },
        {
          label: "Salesforce surface",
          value: "TBD"
        },
        {
          label: "Implementation status",
          value: "Reserved for a later vertical slice"
        }
      ]
    }
  ],

  scenario001LearningPath: [
    "Understand intake",
    "Review automation behavior",
    "Inspect manager visibility",
    "Evaluate risk and edge cases",
    "Validate release readiness",
    "Reflect on tradeoffs"
  ],

  scenario001TranscriptPreview: [
    {
      role: "BA",
      focus: "Intake clarity",
      label: "Simulated review note",
      text: "Confirm whether manager visibility is only for high-risk open Cases or if stakeholder exceptions should be captured too."
    },
    {
      role: "Architect",
      focus: "Automation precedence",
      label: "Simulated review note",
      text: "The Flow should keep manual override, Strategic customer, stale escalation, and priority criteria in a predictable order."
    },
    {
      role: "QA",
      focus: "Regression watch",
      label: "Simulated review note",
      text: "Test clearing behavior when criteria stop matching, especially after override, customer tier, and priority changes."
    },
    {
      role: "Security",
      focus: "Access model",
      label: "Simulated review note",
      text: "Visibility should come from normal Case sharing plus the scenario permission set, not hidden bypass logic."
    },
    {
      role: "Support Manager",
      focus: "Operational review",
      label: "Simulated review note",
      text: "The Open High-Risk Cases list needs to stay focused enough that managers can act on it during queue review."
    }
  ],

  chatPreviewMessages: [
    {
      key: "ba-intake",
      speaker: "BA",
      role: "Business Analyst",
      type: "agent",
      text: "Before we validate the build, what exactly counts as high-risk for manager visibility?"
    },
    {
      key: "architect-precedence",
      speaker: "AR",
      role: "Architect",
      type: "agent",
      text: "The current precedence is intentional: closed Cases clear first, then override, Strategic customer, stale escalation, and priority."
    },
    {
      key: "qa-clearing",
      speaker: "QA",
      role: "QA",
      type: "agent",
      text: "Regression testing should prove prior high-risk values clear when criteria stop matching."
    },
    {
      key: "security-visibility",
      speaker: "SE",
      role: "Security",
      type: "agent",
      text: "Manager visibility should come from normal Case sharing and the scenario permission set, not a hidden bypass."
    },
    {
      key: "support-list",
      speaker: "SM",
      role: "Support Manager",
      type: "agent",
      text: "The Open High-Risk Cases list is useful only if it stays focused on Cases managers can actually review."
    },
    {
      key: "learner-prompt",
      speaker: "You",
      role: "Learner prompt",
      type: "learnerPrompt",
      text: "How do you respond before calling this release-ready?",
      choices: LEARNER_PROMPT_CHOICES
    }
  ],

  learnerChoiceDetails: LEARNER_CHOICE_DETAILS_WITH_RESPONSES,

  deferredCapabilities: [
    {
      label: "Live role agents",
      milestone: "Future delivery-room intelligence"
    },
    {
      label: "Scoring",
      milestone: "Learner assessment layer"
    },
    {
      label: "Persistence",
      milestone: "Saved scenario runs"
    },
    {
      label: "Dynamic branching",
      milestone: "Interactive learner choices"
    },
    {
      label: "Agentforce integration",
      milestone: "Bounded live-agent responses"
    },
    {
      label: "Data Cloud enrichment",
      milestone: "Customer context expansion"
    }
  ],

  currentConstraints: [
    {
      label: "Static/read-only",
      reason: "Keeps the MVP reviewable"
    },
    {
      label: "No Apex",
      reason: "Metadata-first implementation"
    },
    {
      label: "No external AI",
      reason: "No runtime service dependency"
    },
    {
      label: "No persistence",
      reason: "No stored learner state yet"
    },
    {
      label: "No chat input",
      reason: "Not a generic chatbot"
    },
    {
      label: "No runtime orchestration",
      reason: "Live agents come later"
    }
  ]
};
