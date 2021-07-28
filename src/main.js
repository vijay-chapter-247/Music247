import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from "./store/index";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.prototype.$myClientId = "6d280f8d789b4a858a67c830a85545be";
Vue.prototype.$myClientSecret = "354f43281e0e40b8afa003a6f5361b54";
Vue.prototype.$mySetAccessToken =
  "BQAUj1CnHNxsc0aT6KHd3yKAbu4OgKYFhoqw5hhv6TAZVR0xO-3E_iASXQCnVW6ue11IcYssf3tPcO6KjYLGPGavupKY2AqJnzQlSa4O48TAEhOUB2Pta_VAhe6W6i2TWDAGttwCsZRURK0_POYFEzBwowQCQPm7XEX6DDXuSyqmo_oOPO342MaVg-WIRjisWCjl8shA6eVpA6JMizYRj_pr_IXYUaX--FwEo0CFnO8FBdfzNllkdryNbYxFiBq4bIMPBXyp-0odHaPknJzdYW3RVdQ60_i68dW4n47U";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
