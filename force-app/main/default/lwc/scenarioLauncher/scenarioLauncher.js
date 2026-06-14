import { LightningElement } from "lwc";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  selectedChoiceId;

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
          ariaPressed: choice.id === this.selectedChoiceId ? "true" : "false",
          cssClass:
            choice.id === this.selectedChoiceId
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
    const session = DELIVERY_ROOM_CATALOG.simulationSession;
    const activePhase = this.hasSelectedChoice
      ? session.activePhaseAfterChoice
      : session.activePhaseBeforeChoice;
    const completedPhases = this.hasSelectedChoice
      ? session.completedAfterChoice
      : session.completedBeforeChoice;

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

    return this.hasSelectedChoice
      ? session.followUpPhase
      : session.decisionPhase;
  }

  get hasSelectedChoice() {
    return Boolean(this.selectedChoiceId);
  }

  get activeChoiceDetail() {
    return DELIVERY_ROOM_CATALOG.learnerChoiceDetails.find(
      (choice) => choice.id === this.selectedChoiceId
    );
  }

  get selectedChoiceLabel() {
    return (
      this.activeChoiceDetail?.label ||
      DELIVERY_ROOM_CATALOG.simulationSession.defaultFocus
    );
  }

  get selectedChatMessages() {
    if (!this.activeChoiceDetail) {
      return [];
    }

    return [
      {
        key: "selected-learner-choice",
        speaker: "You",
        role: "Learner",
        label: "Selected choice",
        type: "learnerChoice",
        cssClass: "chat-message chat-message-learner",
        text: this.activeChoiceDetail.learnerMessage
      },
      {
        key: "selected-follow-up",
        ...this.activeChoiceDetail.followUp,
        label: "Predefined response",
        type: "agentFollowUp",
        cssClass: "chat-message chat-message-response"
      },
      {
        key: "selected-simulation-note",
        ...this.activeChoiceDetail.simulationNote,
        label: "Static guidance",
        type: "simulationNote",
        cssClass: "chat-message"
      }
    ];
  }

  get selectedEvidence() {
    return this.activeChoiceDetail?.validationEvidence;
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
    this.selectedChoiceId = event.currentTarget.dataset.choiceId;
  }

  handleResetPreview() {
    this.selectedChoiceId = undefined;
  }
}
