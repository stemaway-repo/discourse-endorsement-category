import Component from "@glimmer/component";
import { action } from "@ember/object";
import showModal from "discourse/lib/show-modal";

export default class EndorsementHeaderButton extends Component {
  get buttonText() {
    return settings.New_topic_button_text;
  }

  get buttonTitle() {
    return settings.New_topic_button_title.length
      ? settings.New_topic_button_title
      : this.buttonText;
  }

  get buttonIcon() {
    return settings.New_topic_button_icon;
  }

  @action
  openModal() {
    showModal("customModal", {});
  }
}
