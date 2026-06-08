import { LightningElement } from "lwc";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  selectedChoice;

  get productSummary() {
    return DELIVERY_ROOM_CATALOG.productSummary;
  }

  get guidingPrinciples() {
    return DELIVERY_ROOM_CATALOG.guidingPrinciples;
  }

  get modeHighlights() {
    return DELIVERY_ROOM_CATALOG.modeHighlights;
  }

  get deliverySnapshot() {
    return DELIVERY_ROOM_CATALOG.deliverySnapshot;
  }

  get sectionSubtitles() {
    return DELIVERY_ROOM_CATALOG.sectionSubtitles;
  }

  get deliveryRoles() {
    return DELIVERY_ROOM_CATALOG.deliveryRoles;
  }

  get scenarios() {
    return DELIVERY_ROOM_CATALOG.scenarios;
  }

  get learningPath() {
    return DELIVERY_ROOM_CATALOG.scenario001LearningPath;
  }

  get transcriptPreview() {
    return DELIVERY_ROOM_CATALOG.scenario001TranscriptPreview;
  }

  get chatPreviewMessages() {
    return DELIVERY_ROOM_CATALOG.chatPreviewMessages.map((message) => {
      if (!message.choices) {
        return message;
      }

      return {
        ...message,
        choices: message.choices.map((choice) => ({
          ...choice,
          ariaPressed: choice.id === this.selectedChoice ? "true" : "false",
          cssClass:
            choice.id === this.selectedChoice
              ? "choice-button choice-button-selected"
              : "choice-button"
        }))
      };
    });
  }

  get simulationSessionSummary() {
    const session = DELIVERY_ROOM_CATALOG.simulationSession;

    return [
      {
        label: "Scenario",
        value: session.scenario
      },
      {
        label: "Mode",
        value: session.mode
      },
      {
        label: "Phase",
        value: this.currentSimulationPhase
      },
      {
        label: "Current focus",
        value: this.selectedChoiceLabel
      }
    ];
  }

  get simulationPhases() {
    const activePhase = this.selectedChoice ? "follow-up" : "learner-decision";
    const completedPhases = this.selectedChoice
      ? ["intake", "team-review", "learner-decision"]
      : ["intake", "team-review"];

    return DELIVERY_ROOM_CATALOG.simulationPhases.map((phase) => {
      const isActive = phase.id === activePhase;
      const isComplete = completedPhases.includes(phase.id);

      return {
        ...phase,
        ariaCurrent: isActive ? "step" : null,
        cssClass: `phase-step${isActive ? " phase-step-active" : ""}${
          isComplete ? " phase-step-complete" : ""
        }`
      };
    });
  }

  get currentSimulationPhase() {
    const session = DELIVERY_ROOM_CATALOG.simulationSession;

    return this.selectedChoice ? session.followUpPhase : session.decisionPhase;
  }

  get selectedChoiceResponse() {
    return DELIVERY_ROOM_CATALOG.learnerChoiceResponses[this.selectedChoice];
  }

  get selectedChoiceConfig() {
    return DELIVERY_ROOM_CATALOG.chatPreviewMessages
      .find((message) => message.choices)
      ?.choices.find((choice) => choice.id === this.selectedChoice);
  }

  get selectedLearnerMessage() {
    return this.selectedChoiceConfig?.learnerMessage;
  }

  get selectedChoiceLabel() {
    return (
      this.selectedChoiceConfig?.label ||
      DELIVERY_ROOM_CATALOG.simulationSession.defaultFocus
    );
  }

  get hasSelectedLearnerMessage() {
    return Boolean(this.selectedLearnerMessage);
  }

  get hasSelectedChoiceResponse() {
    return Boolean(this.selectedChoiceResponse);
  }

  get selectedSimulationNote() {
    return DELIVERY_ROOM_CATALOG.simulationNotesByChoice[this.selectedChoice];
  }

  get hasSelectedSimulationNote() {
    return Boolean(this.selectedSimulationNote);
  }

  get selectedEvidence() {
    return DELIVERY_ROOM_CATALOG.validationEvidenceByChoice[
      this.selectedChoice
    ];
  }

  get hasSelectedEvidence() {
    return Boolean(this.selectedEvidence);
  }

  get deferredCapabilities() {
    return DELIVERY_ROOM_CATALOG.deferredCapabilities;
  }

  get currentConstraints() {
    return DELIVERY_ROOM_CATALOG.currentConstraints;
  }

  handleChoiceSelect(event) {
    this.selectedChoice = event.currentTarget.dataset.choiceId;
  }

  handleResetPreview() {
    this.selectedChoice = undefined;
  }
}
