import { LightningElement } from "lwc";

const GUIDING_PRINCIPLES = [
  "Real Salesforce implementation first",
  "Simulated delivery-team intelligence second",
  "Live agents third"
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
    status: "Planned",
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
  }
];

export default class ScenarioLauncher extends LightningElement {
  get guidingPrinciples() {
    return GUIDING_PRINCIPLES;
  }

  get scenarios() {
    return SCENARIOS;
  }
}
