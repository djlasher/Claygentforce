import { LightningElement } from "lwc";
import {
  buildRunModel,
  createInitialRunState,
  resetRunState,
  selectChallengeResponse,
  selectFollowUpAction,
  selectLearnerChoice
} from "./deliveryRoomOrchestrator";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  runState = createInitialRunState();
  isSupportingContextExpanded = false;

  get runModel() {
    return buildRunModel(this.runState, DELIVERY_ROOM_CATALOG);
  }

  get productSummary() {
    return DELIVERY_ROOM_CATALOG.productSummary;
  }

  get guidingPrinciples() {
    return DELIVERY_ROOM_CATALOG.guidingPrinciples;
  }

  get modeHighlights() {
    return DELIVERY_ROOM_CATALOG.modeHighlights;
  }

  get sectionSubtitles() {
    return DELIVERY_ROOM_CATALOG.sectionSubtitles;
  }

  get scenarioMoment() {
    return DELIVERY_ROOM_CATALOG.scenarioMoment;
  }

  get scenarioMomentContextBullets() {
    return this.scenarioMoment.contextBullets || [];
  }

  get chatPreviewMessages() {
    return this.runModel.chatPreviewMessages;
  }

  get simulationSessionSummary() {
    return this.runModel.simulationSessionSummary;
  }

  get simulationPhases() {
    return this.runModel.simulationPhases;
  }

  get currentSimulationPhase() {
    return this.runModel.currentSimulationPhase;
  }

  get activePhaseId() {
    return this.runModel.activePhaseId;
  }

  get completedPhaseIds() {
    return this.runModel.completedPhaseIds;
  }

  get hasSelectedChoice() {
    return this.runModel.hasSelectedChoice;
  }

  get hasSelectedFollowUpAction() {
    return this.runModel.hasSelectedFollowUpAction;
  }

  get hasStartedRun() {
    return this.runModel.hasStartedRun;
  }

  get activeChoiceDetail() {
    return this.runModel.activeChoiceDetail;
  }

  get selectedChoiceLabel() {
    return this.runModel.selectedChoiceLabel;
  }

  get currentFocusLabel() {
    return this.runModel.currentFocusLabel;
  }

  get selectedDecisionLabel() {
    return this.runModel.selectedDecisionLabel;
  }

  get activeFollowUpActions() {
    return this.runModel.activeFollowUpActions;
  }

  get activeFollowUpAction() {
    return this.runModel.activeFollowUpAction;
  }

  get selectedFollowUpActionLabel() {
    return this.runModel.selectedFollowUpActionLabel;
  }

  get selectedChatMessages() {
    return this.runModel.selectedChatMessages;
  }

  get selectedFollowUpChatMessages() {
    return this.runModel.selectedFollowUpChatMessages;
  }

  get selectedEvidence() {
    return this.runModel.selectedEvidence;
  }

  get hasSelectedEvidence() {
    return this.runModel.hasSelectedEvidence;
  }

  get hasSelectedEvidenceBeforeCompletion() {
    return this.runModel.hasSelectedEvidenceBeforeCompletion;
  }

  get selectedOutcome() {
    return this.runModel.selectedOutcome;
  }

  get hasSelectedOutcome() {
    return this.runModel.hasSelectedOutcome;
  }

  get sessionResultRows() {
    return this.runModel.sessionResultRows;
  }

  get hasSessionResult() {
    return this.runModel.hasSessionResult;
  }

  get selectedDecisionQuality() {
    return this.runModel.selectedDecisionQuality;
  }

  get hasSelectedDecisionQuality() {
    return this.runModel.hasSelectedDecisionQuality;
  }

  get decisionQualityRows() {
    return this.runModel.decisionQualityRows;
  }

  get selectedValidationChecklist() {
    return this.runModel.selectedValidationChecklist;
  }

  get hasSelectedValidationChecklist() {
    return this.runModel.hasSelectedValidationChecklist;
  }

  get selectedTeamReview() {
    return this.runModel.selectedTeamReview;
  }

  get hasSelectedTeamReview() {
    return this.runModel.hasSelectedTeamReview;
  }

  get selectedRolePushback() {
    return this.runModel.selectedRolePushback;
  }

  get hasSelectedRolePushback() {
    return this.runModel.hasSelectedRolePushback;
  }

  get activeChallengeResponses() {
    return this.runModel.activeChallengeResponses;
  }

  get activeChallengeResponse() {
    return this.runModel.activeChallengeResponse;
  }

  get hasSelectedChallengeResponse() {
    return this.runModel.hasSelectedChallengeResponse;
  }

  get hasCompletedRun() {
    return this.runModel.hasCompletedRun;
  }

  get selectedChallengeResponseLabel() {
    return this.runModel.selectedChallengeResponseLabel;
  }

  get completedRunNextAction() {
    return this.runModel.completedRunNextAction;
  }

  get completedRunSummaryRows() {
    return this.runModel.completedRunSummaryRows;
  }

  get selectedChallengeResponseMessages() {
    return this.runModel.selectedChallengeResponseMessages;
  }

  get selectedCloseoutNote() {
    return this.runModel.selectedCloseoutNote;
  }

  get hasSelectedCloseoutNote() {
    return this.runModel.hasSelectedCloseoutNote;
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
    return "Optional reference for the static local MVP boundaries. The chat-first run above is the primary Scenario 001 learner surface.";
  }

  handleChoiceSelect(event) {
    this.runState = selectLearnerChoice(
      this.runState,
      event.currentTarget.dataset.choiceId
    );
  }

  handleFollowUpActionSelect(event) {
    this.runState = selectFollowUpAction(
      this.runState,
      event.currentTarget.dataset.actionId
    );
  }

  handleChallengeResponseSelect(event) {
    this.runState = selectChallengeResponse(
      this.runState,
      event.currentTarget.dataset.responseId
    );
  }

  handleResetPreview() {
    this.runState = resetRunState();
  }

  handleSupportingContextToggle() {
    this.isSupportingContextExpanded = !this.isSupportingContextExpanded;
  }
}
