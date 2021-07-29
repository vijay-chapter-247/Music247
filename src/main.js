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
  "BQC3-0sHosgPdXrCASVBk_cWp_xMrABoqqmwyNPh6hkrqnigArds41Va7Hxpfq1bM_Fxzn-Cp8wyXC9TT-pKeL2fa6sn2gBicC3sGMxXASAC8wy442eQCAnfU9iUnNBi5qPzsSNvjGbLCsjAdCGKwJsN09qTuGyPXROmshwssr-9QjzcdGKeITMcFcXXwAykib5ks2_YKgbHkz4vihEiKpty7TgiWmsWV2mXMJVKlLLP7t3Wajl0WgFLy4dJf5y4DYwYOpjE_81kOsLbSs_UvBar3aIt2Lmsb-KnEcw1";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
