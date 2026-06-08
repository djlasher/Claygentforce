import { LightningElement } from "lwc";
import { DELIVERY_ROOM_CATALOG } from "./scenarioCatalog";

export default class ScenarioLauncher extends LightningElement {
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
    return DELIVERY_ROOM_CATALOG.chatPreviewMessages;
  }

  get deferredCapabilities() {
    return DELIVERY_ROOM_CATALOG.deferredCapabilities;
  }

  get currentConstraints() {
    return DELIVERY_ROOM_CATALOG.currentConstraints;
  }
}
