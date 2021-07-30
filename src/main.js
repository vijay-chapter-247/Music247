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
  "BQB7UUVfUi5wyAdXiK2Ik0uvp06-qWtW4xGlDI5asc4_enZkKSE8iQvI1efUCB8pFvd_Ya9rTPBRY_XtqDY8SIPeC6TLRsJirxWGRaGC6FMYVxskg5Ruga5RMHz0pqx33nlfvlb5qQbM8Xw1fmZ7jdN1qEmCJ3_wHzIqw7YHopd2pGs4Aobc5UCHBdiLqlHpNoPPe_YIzSFMWnzhTaHaqv-D-_StqetX8PkT2Z-ZOzhHZwbIuzOD_q7Hq4uCSN6_zVsRwqnMxN6hD3JyBjJwUoeVQ0DVoamqq2in_vF_";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
