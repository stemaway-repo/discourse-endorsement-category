import I18n from "I18n";
import { withPluginApi } from "discourse/lib/plugin-api";
import EndorsementHeaderButton from "../components/endorsement-header-button";

export default {
  name: "endorsement-button",
  initialize() {
    let currentLocale = I18n.currentLocale();
    I18n.translations[currentLocale].js.custom_modal_title = "Peer Endorsements";
    I18n.translations[currentLocale].js.custom_modal_button = "Endorse";
    withPluginApi("0.8.7", (api) => {
      const currentUser = api.getCurrentUser();
      if (!currentUser) {
        return;
      }

      if (!api.headerButtons?.add) {
        return;
      }

      api.headerButtons.add("endorsement-button", EndorsementHeaderButton);
    });
  },
};
