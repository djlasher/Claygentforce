import { LightningElement } from "lwc";
import {
  buildRunModel,
  createInitialRunState,
  resetRunState,
  selectChallengeResponse,
  selectFollowUpAction,
  selectLearnerChoice
} from "./deliveryRoomOrchestrator";
import {
  buildChoicePrompt,
  buildChallengePrompt,
  buildDemoRoleOptions,
  buildDemoScoreSummary,
  buildFollowUpPrompt,
  buildInitialDemoMessages,
  buildLearnerMessage,
  buildMessagesAfterChallenge,
  buildMessagesAfterChoice,
  buildMessagesAfterFollowUp,
  getActiveRoleId,
  getMessageDelay,
  getPromptDelay
} from "./deliveryRoomChatDemo";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  runState = createInitialRunState();
  chatRunState = createInitialRunState();
  selectedDemoRoleId;
  demoTranscript = [];
  demoPrompt;
  demoScore;
  isDemoTyping = false;
  demoTimerIds = [];
  isClassicRunExpanded = false;
  isSupportingContextExpanded = false;

  get runModel() {
    return buildRunModel(this.runState, DELIVERY_ROOM_CATALOG);
  }

  get demoRunModel() {
    return buildRunModel(this.chatRunState, DELIVERY_ROOM_CATALOG);
  }

  get demoRoleOptions() {
    return buildDemoRoleOptions(this.selectedDemoRoleId);
  }

  get hasDemoStarted() {
    return Boolean(this.selectedDemoRoleId);
  }

  get hasDemoTranscript() {
    return this.demoTranscript.length > 0;
  }

  get hasDemoPrompt() {
    return Boolean(this.demoPrompt);
  }

  get isDemoChoicePrompt() {
    return this.demoPrompt?.type === "choice";
  }

  get isDemoFollowUpPrompt() {
    return this.demoPrompt?.type === "followUp";
  }

  get isDemoChallengePrompt() {
    return this.demoPrompt?.type === "challenge";
  }

  get hasDemoScore() {
    return Boolean(this.demoScore);
  }

  get classicRunToggleLabel() {
    return this.isClassicRunExpanded
      ? "Hide classic bounded run"
      : "Show classic bounded run";
  }

  get classicRunAriaExpanded() {
    return this.isClassicRunExpanded ? "true" : "false";
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

  disconnectedCallback() {
    this.clearDemoTimers();
  }

  clearDemoTimers() {
    this.demoTimerIds.forEach((timerId) => {
      window.clearTimeout(timerId);
    });
    this.demoTimerIds = [];
    this.isDemoTyping = false;
  }

  queueDemoMessages(messages, onComplete) {
    const promptDelay = getPromptDelay(messages);

    const revealMessage = (index) => {
      if (index >= messages.length) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        const promptTimerId = window.setTimeout(() => {
          this.isDemoTyping = false;
          this.demoTimerIds = this.demoTimerIds.filter(
            (timerId) => timerId !== promptTimerId
          );
          if (onComplete) {
            onComplete();
          }
        }, promptDelay);
        this.demoTimerIds = [...this.demoTimerIds, promptTimerId];
        return;
      }

      const message = messages[index];

      this.isDemoTyping = true;
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      const timerId = window.setTimeout(() => {
        this.demoTranscript = [...this.demoTranscript, message];
        this.isDemoTyping = false;
        this.demoTimerIds = this.demoTimerIds.filter(
          (activeTimerId) => activeTimerId !== timerId
        );
        revealMessage(index + 1);
      }, getMessageDelay(message));
      this.demoTimerIds = [...this.demoTimerIds, timerId];
    };

    revealMessage(0);
  }

  restartDemoChat() {
    this.clearDemoTimers();
    this.chatRunState = resetRunState();
    this.demoTranscript = [];
    this.demoPrompt = undefined;
    this.demoScore = undefined;
  }

  handleDemoRoleSelect(event) {
    const roleId = event.currentTarget.dataset.roleId;

    if (roleId !== getActiveRoleId()) {
      return;
    }

    this.selectedDemoRoleId = roleId;
    this.restartDemoChat();
    this.selectedDemoRoleId = roleId;
    this.queueDemoMessages(buildInitialDemoMessages(), () => {
      this.demoPrompt = buildChoicePrompt(this.demoRunModel);
    });
  }

  handleDemoChoiceSelect(event) {
    const choiceId = event.currentTarget.dataset.choiceId;
    this.clearDemoTimers();
    this.demoPrompt = undefined;
    this.demoScore = undefined;
    this.chatRunState = selectLearnerChoice(this.chatRunState, choiceId);
    const runModel = this.demoRunModel;

    this.demoTranscript = [
      ...this.demoTranscript,
      buildLearnerMessage({
        key: `demo-learner-choice-${choiceId}`,
        label: "Selected validation lens",
        text: runModel.activeChoiceDetail.learnerMessage
      })
    ];
    this.queueDemoMessages(buildMessagesAfterChoice(runModel), () => {
      this.demoPrompt = buildFollowUpPrompt(this.demoRunModel);
    });
  }

  handleDemoFollowUpActionSelect(event) {
    const actionId = event.currentTarget.dataset.actionId;
    this.clearDemoTimers();
    this.demoPrompt = undefined;
    this.demoScore = undefined;
    this.chatRunState = selectFollowUpAction(this.chatRunState, actionId);
    const runModel = this.demoRunModel;

    this.demoTranscript = [
      ...this.demoTranscript,
      buildLearnerMessage({
        key: `demo-learner-follow-up-${actionId}`,
        label: "Selected follow-up action",
        text: runModel.activeFollowUpAction.learnerMessage
      })
    ];
    this.queueDemoMessages(buildMessagesAfterFollowUp(runModel), () => {
      this.demoPrompt = buildChallengePrompt(this.demoRunModel);
    });
  }

  handleDemoChallengeResponseSelect(event) {
    const responseId = event.currentTarget.dataset.responseId;
    this.clearDemoTimers();
    this.demoPrompt = undefined;
    this.chatRunState = selectChallengeResponse(this.chatRunState, responseId);
    const runModel = this.demoRunModel;

    this.demoTranscript = [
      ...this.demoTranscript,
      buildLearnerMessage({
        key: `demo-learner-challenge-${responseId}`,
        label: "Selected challenge response",
        text: runModel.activeChallengeResponse.learnerMessage
      })
    ];
    this.queueDemoMessages(buildMessagesAfterChallenge(runModel), () => {
      this.demoScore = buildDemoScoreSummary(
        this.demoRunModel,
        this.chatRunState
      );
    });
  }

  handleDemoReset() {
    this.clearDemoTimers();
    this.selectedDemoRoleId = undefined;
    this.chatRunState = resetRunState();
    this.demoTranscript = [];
    this.demoPrompt = undefined;
    this.demoScore = undefined;
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

  handleClassicRunToggle() {
    this.isClassicRunExpanded = !this.isClassicRunExpanded;
  }

  handleSupportingContextToggle() {
    this.isSupportingContextExpanded = !this.isSupportingContextExpanded;
  }
}
