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
  buildDemoRoleGroups,
  buildDemoScoreSummary,
  buildFollowUpPrompt,
  buildInitialDemoMessages,
  buildLearnerMessage,
  buildMessagesAfterChallenge,
  buildMessagesAfterChoice,
  buildMessagesAfterFollowUp,
  DEFAULT_EXPANDED_ROLE_GROUP_IDS,
  getDemoChallengeResponseLearnerMessage,
  getDemoChoiceLearnerMessage,
  getDemoFollowUpActionLearnerMessage,
  getMessageDelay,
  getPromptDelay,
  getWarRoomMetadata,
  isPlayableRoleId
} from "./deliveryRoomChatDemo";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
  chatRunState = createInitialRunState();
  selectedDemoRoleId;
  demoTranscript = [];
  demoPrompt;
  demoScore;
  isDemoTyping = false;
  demoTimerIds = [];
  expandedDemoRoleGroupIds = DEFAULT_EXPANDED_ROLE_GROUP_IDS;

  get demoRunModel() {
    return buildRunModel(this.chatRunState, DELIVERY_ROOM_CATALOG);
  }

  get demoRoleGroups() {
    return buildDemoRoleGroups(
      this.expandedDemoRoleGroupIds,
      this.selectedDemoRoleId
    );
  }

  get warRoomMetadata() {
    return getWarRoomMetadata();
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

  get productSummary() {
    return "Scenario 001 becomes a live consulting room: select a role, make concrete delivery decisions, and review how the team responds.";
  }

  get guidingPrinciples() {
    return [
      "Practice consulting judgment, not metadata walkthroughs.",
      "Every path is bounded, deterministic, and demo-safe.",
      "Assessment focuses on confidence, consensus, risk, and next action."
    ];
  }

  get modeHighlights() {
    return [
      {
        label: "Scenario",
        value: "Case escalation visibility"
      },
      {
        label: "Perspectives",
        value: "Technical Architect + QA Lead"
      },
      {
        label: "Mode",
        value: "Local deterministic"
      }
    ];
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

    if (!isPlayableRoleId(roleId)) {
      return;
    }

    this.selectedDemoRoleId = roleId;
    this.restartDemoChat();
    this.selectedDemoRoleId = roleId;
    this.queueDemoMessages(buildInitialDemoMessages(roleId), () => {
      this.demoPrompt = buildChoicePrompt(
        this.demoRunModel,
        this.selectedDemoRoleId
      );
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
        roleId: this.selectedDemoRoleId,
        text: getDemoChoiceLearnerMessage(
          this.selectedDemoRoleId,
          choiceId,
          runModel
        )
      })
    ];
    this.queueDemoMessages(
      buildMessagesAfterChoice(runModel, this.selectedDemoRoleId, choiceId),
      () => {
        this.demoPrompt = buildFollowUpPrompt(
          this.demoRunModel,
          this.selectedDemoRoleId
        );
      }
    );
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
        roleId: this.selectedDemoRoleId,
        text: getDemoFollowUpActionLearnerMessage(
          this.selectedDemoRoleId,
          runModel,
          actionId
        )
      })
    ];
    this.queueDemoMessages(
      buildMessagesAfterFollowUp(runModel, this.selectedDemoRoleId),
      () => {
        this.demoPrompt = buildChallengePrompt(
          this.demoRunModel,
          this.selectedDemoRoleId
        );
      }
    );
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
        roleId: this.selectedDemoRoleId,
        text: getDemoChallengeResponseLearnerMessage(
          this.selectedDemoRoleId,
          runModel,
          responseId
        )
      })
    ];
    this.queueDemoMessages(
      buildMessagesAfterChallenge(runModel, this.selectedDemoRoleId),
      () => {
        this.demoScore = buildDemoScoreSummary(
          this.demoRunModel,
          this.chatRunState,
          this.selectedDemoRoleId
        );
      }
    );
  }

  handleDemoReset() {
    this.clearDemoTimers();
    this.selectedDemoRoleId = undefined;
    this.chatRunState = resetRunState();
    this.demoTranscript = [];
    this.demoPrompt = undefined;
    this.demoScore = undefined;
  }

  handleDemoRoleGroupToggle(event) {
    const groupId = event.currentTarget.dataset.groupId;

    if (this.expandedDemoRoleGroupIds.includes(groupId)) {
      this.expandedDemoRoleGroupIds = this.expandedDemoRoleGroupIds.filter(
        (expandedGroupId) => expandedGroupId !== groupId
      );
      return;
    }

    this.expandedDemoRoleGroupIds = [...this.expandedDemoRoleGroupIds, groupId];
  }
}
