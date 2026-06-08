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

  get selectedChoiceResponse() {
    return DELIVERY_ROOM_CATALOG.learnerChoiceResponses[this.selectedChoice];
  }

  get hasSelectedChoiceResponse() {
    return Boolean(this.selectedChoiceResponse);
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
}
