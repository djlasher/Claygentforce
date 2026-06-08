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
    followUpPhase: "Follow-up Review",
    defaultFocus: "Not selected yet"
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
      id: "follow-up",
      label: "Follow-up"
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
      "A compact static preview of the future chat-style delivery room.",
    chatPreviewNote:
      "Future versions will stream role messages and prompt learner choices one at a time. This preview is display-only.",
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
      text: "What should you validate next?",
      choices: [
        {
          id: "flow-precedence",
          label: "Flow precedence",
          learnerMessage: "I would validate Flow precedence next."
        },
        {
          id: "permission-visibility",
          label: "Permission visibility",
          learnerMessage: "I would validate permission visibility next."
        },
        {
          id: "list-view-accuracy",
          label: "List view accuracy",
          learnerMessage: "I would validate list view accuracy next."
        }
      ]
    }
  ],

  learnerChoiceResponses: {
    "flow-precedence": {
      speaker: "QA",
      role: "QA",
      text: "Start by proving each precedence path in order: closed clearing, manual override, Strategic customer, stale escalation, then priority.",
      learningNote:
        "Evidence: a focused test matrix showing expected High Risk and High Risk Reason outcomes for each path."
    },
    "permission-visibility": {
      speaker: "SE",
      role: "Security",
      text: "Validate that manager visibility comes from standard Case sharing plus the scenario permission set, not from hidden automation shortcuts.",
      learningNote:
        "Evidence: permission set access, field visibility, and list view access checked with the intended reviewer profile."
    },
    "list-view-accuracy": {
      speaker: "SM",
      role: "Support Manager",
      text: "Confirm the Open High-Risk Cases list stays actionable by including active high-risk Cases and excluding closed Cases.",
      learningNote:
        "Evidence: list view screenshots or notes for open flagged, closed flagged, and clean-path Cases."
    }
  },

  simulationNotesByChoice: {
    "flow-precedence": {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture evidence that each Flow branch wins in the expected order before claiming the automation is release-ready."
    },
    "permission-visibility": {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture access evidence with the intended support manager user before claiming visibility is correctly governed."
    },
    "list-view-accuracy": {
      speaker: "SIM",
      role: "Simulation note",
      text: "Capture list view evidence across open flagged, closed flagged, and clean-path Cases before claiming the queue view is accurate."
    }
  },

  validationEvidenceByChoice: {
    "flow-precedence": {
      recommendedEvidence:
        "A compact test matrix covering closed clearing, manual override, Strategic customer, stale escalation, priority, and clean paths.",
      whyItMatters:
        "Precedence bugs can make the right Case visible for the wrong reason or leave stale high-risk values behind.",
      whatNotToClaimYet:
        "Do not claim full smoke-test completion until the paths are manually verified in the org."
    },
    "permission-visibility": {
      recommendedEvidence:
        "Permission set, field visibility, and list view access checked with the intended reviewer access model.",
      whyItMatters:
        "The scenario should teach normal Salesforce visibility, not hidden access shortcuts.",
      whatNotToClaimYet:
        "Do not claim production-ready access governance until profile and sharing assumptions are reviewed."
    },
    "list-view-accuracy": {
      recommendedEvidence:
        "List view results for open high-risk Cases, closed Cases, and Cases where criteria no longer match.",
      whyItMatters:
        "Managers need a focused queue view they can trust during operational review.",
      whatNotToClaimYet:
        "Do not claim queue accuracy until closed and clean-path records are checked in the target org."
    }
  },

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
