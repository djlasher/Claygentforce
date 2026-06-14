import { LightningElement } from "lwc";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  selectedChoiceId;
  selectedFollowUpActionId;
  isSupportingContextExpanded = false;

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

  get scenarioMoment() {
    return DELIVERY_ROOM_CATALOG.scenarioMoment;
  }

  get scenarioMomentContextBullets() {
    return this.scenarioMoment.contextBullets || [];
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
    const activePhase = this.activePhaseId;
    const completedPhases = this.completedPhaseIds;

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

    if (this.hasSelectedFollowUpAction) {
      return session.reviewCompletePhase;
    }

    if (this.hasSelectedChoice) {
      return session.followUpActionPhase;
    }

    return session.decisionPhase;
  }

  get activePhaseId() {
    const session = DELIVERY_ROOM_CATALOG.simulationSession;

    if (this.hasSelectedFollowUpAction) {
      return session.activePhaseAfterFollowUp;
    }

    return this.hasSelectedChoice
      ? session.activePhaseAfterChoice
      : session.activePhaseBeforeChoice;
  }

  get completedPhaseIds() {
    const session = DELIVERY_ROOM_CATALOG.simulationSession;

    if (this.hasSelectedFollowUpAction) {
      return session.completedAfterFollowUp;
    }

    return this.hasSelectedChoice
      ? session.completedAfterChoice
      : session.completedBeforeChoice;
  }

  get hasSelectedChoice() {
    return Boolean(this.selectedChoiceId);
  }

  get hasSelectedFollowUpAction() {
    return Boolean(this.selectedFollowUpActionId);
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

  get selectedDecisionLabel() {
    return this.activeChoiceDetail?.label;
  }

  get activeFollowUpActions() {
    if (!this.activeChoiceDetail) {
      return [];
    }

    return this.activeChoiceDetail.followUpActions.map((action) => ({
      ...action,
      ariaPressed:
        action.id === this.selectedFollowUpActionId ? "true" : "false",
      cssClass:
        action.id === this.selectedFollowUpActionId
          ? "follow-up-button follow-up-button-selected"
          : "follow-up-button"
    }));
  }

  get activeFollowUpAction() {
    return this.activeChoiceDetail?.followUpActions.find(
      (action) => action.id === this.selectedFollowUpActionId
    );
  }

  get selectedFollowUpActionLabel() {
    return this.activeFollowUpAction?.label;
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
      },
      {
        key: "follow-up-action-prompt",
        speaker: "SIM",
        role: "Follow-up prompt",
        label: "Local static simulation",
        type: "followUpPrompt",
        cssClass: "chat-message",
        text: "Which follow-up action would you take?",
        followUpActions: this.activeFollowUpActions
      }
    ].concat(this.selectedFollowUpChatMessages);
  }

  get selectedFollowUpChatMessages() {
    if (!this.activeFollowUpAction) {
      return [];
    }

    return [
      {
        key: "selected-follow-up-action",
        speaker: "You",
        role: "Learner",
        label: "Selected follow-up action",
        type: "learnerFollowUpAction",
        cssClass: "chat-message chat-message-learner",
        text: this.activeFollowUpAction.learnerMessage
      },
      {
        key: "final-delivery-response",
        ...this.activeFollowUpAction.response,
        label: "Final predefined response",
        type: "finalResponse",
        cssClass: "chat-message chat-message-response"
      }
    ];
  }

  get selectedEvidence() {
    return this.activeChoiceDetail?.validationEvidence;
  }

  get hasSelectedEvidence() {
    return Boolean(this.selectedEvidence);
  }

  get hasSelectedEvidenceBeforeCompletion() {
    return this.hasSelectedEvidence && !this.hasSelectedFollowUpAction;
  }

  get selectedOutcome() {
    return this.activeFollowUpAction?.outcome;
  }

  get hasSelectedOutcome() {
    return Boolean(this.selectedOutcome);
  }

  get sessionResultRows() {
    if (!this.activeFollowUpAction) {
      return [];
    }

    return [
      {
        label: "First decision",
        value: this.selectedDecisionLabel
      },
      {
        label: "Follow-up action",
        value: this.selectedFollowUpActionLabel
      }
    ];
  }

  get hasSessionResult() {
    return this.sessionResultRows.length > 0;
  }

  get selectedValidationChecklist() {
    return this.activeFollowUpAction?.validationChecklist || [];
  }

  get hasSelectedValidationChecklist() {
    return this.selectedValidationChecklist.length > 0;
  }

  get selectedTeamReview() {
    return this.activeFollowUpAction?.teamReview;
  }

  get hasSelectedTeamReview() {
    return Boolean(this.selectedTeamReview);
  }

  get deferredCapabilities() {
    return DELIVERY_ROOM_CATALOG.deferredCapabilities;
  }

  get currentConstraints() {
    return DELIVERY_ROOM_CATALOG.currentConstraints;
  }

  get supportingContextToggleLabel() {
    return this.isSupportingContextExpanded
      ? "Hide supporting context"
      : "Show supporting context";
  }

  get supportingContextAriaExpanded() {
    return this.isSupportingContextExpanded ? "true" : "false";
  }

  get supportingContextSummary() {
    return "Delivery snapshot, team roles, scenario board, learning path, transcript notes, deferred capabilities, and constraints are available below.";
  }

  handleChoiceSelect(event) {
    this.selectedChoiceId = event.currentTarget.dataset.choiceId;
    this.selectedFollowUpActionId = undefined;
  }

  handleFollowUpActionSelect(event) {
    this.selectedFollowUpActionId = event.currentTarget.dataset.actionId;
  }

  handleResetPreview() {
    this.selectedChoiceId = undefined;
    this.selectedFollowUpActionId = undefined;
  }

  handleSupportingContextToggle() {
    this.isSupportingContextExpanded = !this.isSupportingContextExpanded;
  }
}
