import { LightningElement, api } from "lwc";

export default class ScenarioPreviewSection extends LightningElement {
  @api heading;
  @api noteText;
  @api items = [];
  @api firstDetailLabel;
  @api secondDetailLabel;
}
