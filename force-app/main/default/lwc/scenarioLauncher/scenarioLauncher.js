import { LightningElement } from "lwc";

const GUIDING_PRINCIPLES = [
  "Real Salesforce implementation first",
  "Simulated delivery-team intelligence second",
  "Live agents third"
];

const DELIVERY_SNAPSHOT = [
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
];

const DELIVERY_ROLES = [
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
];

const SCENARIOS = [
  {
    name: "Scenario 001: Case Escalation and Manager Visibility",
    status: "Implemented MVP",
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
    name: "Scenario 002: To Be Defined",
    status: "Placeholder / Planned",
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
    name: "Future Scenario",
    status: "Placeholder / Planned",
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
];

const LEARNING_PATH = [
  "Understand intake",
  "Review automation behavior",
  "Inspect manager visibility",
  "Evaluate risk and edge cases",
  "Validate release readiness",
  "Reflect on tradeoffs"
];

const TRANSCRIPT_PREVIEW = [
  {
    role: "BA",
    focus: "Intake clarity",
    text: "Confirm whether manager visibility is only for high-risk open Cases or if stakeholder exceptions should be captured too."
  },
  {
    role: "Architect",
    focus: "Automation precedence",
    text: "The Flow should keep manual override, Strategic customer, stale escalation, and priority criteria in a predictable order."
  },
  {
    role: "QA",
    focus: "Regression watch",
    text: "Test clearing behavior when criteria stop matching, especially after override, customer tier, and priority changes."
  },
  {
    role: "Security",
    focus: "Access model",
    text: "Visibility should come from normal Case sharing plus the scenario permission set, not hidden bypass logic."
  },
  {
    role: "Support Manager",
    focus: "Operational review",
    text: "The Open High-Risk Cases list needs to stay focused enough that managers can act on it during queue review."
  }
];

const DEFERRED_CAPABILITIES = [
  "Live role agents",
  "Scoring",
  "Persistence",
  "Dynamic branching",
  "Agentforce integration",
  "Data Cloud enrichment"
];

const CURRENT_CONSTRAINTS = [
  "Static/read-only",
  "No Apex",
  "No external AI",
  "No persistence",
  "No chat input",
  "No runtime orchestration"
];

export default class ScenarioLauncher extends LightningElement {
  get guidingPrinciples() {
    return GUIDING_PRINCIPLES;
  }

  get deliverySnapshot() {
    return DELIVERY_SNAPSHOT;
  }

  get deliveryRoles() {
    return DELIVERY_ROLES;
  }

  get scenarios() {
    return SCENARIOS;
  }

  get learningPath() {
    return LEARNING_PATH;
  }

  get transcriptPreview() {
    return TRANSCRIPT_PREVIEW;
  }

  get deferredCapabilities() {
    return DEFERRED_CAPABILITIES;
  }

  get currentConstraints() {
    return CURRENT_CONSTRAINTS;
  }
}
