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
  "BQAwKHmiY25zne-abf0iZoGRxVMlCct04VsMpNeRFftijzmqWN1ODuxmhMEPg9mUAX2NodYag2hJgm_PZEMmiFncgkYuwCz8c3fBNO6U5nv6AddVqpn3R1ZzwoVcqWz8ZgT5i3pM20lmPBj6qyfsXxKTiQLHOK_CcZdOn6AibEEGguUf3yo4B-y8FP1uZim9oik7-qk0TJlY9o-s4hgz95WADpta3oTlao0_T_EfyQ7GBcfG6dLkJ174yLsj3yx-nkap00PT9n7n6OHv3nQE4f39wIiy0ZDbb8NaBDHb";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
