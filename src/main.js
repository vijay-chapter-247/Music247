import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import { store } from "./store/index";
import store from "../store";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.prototype.$myClientId = "6d280f8d789b4a858a67c830a85545be";
Vue.prototype.$myClientSecret = "354f43281e0e40b8afa003a6f5361b54";
Vue.prototype.$mySetAccessToken =
  "BQD--Go7S9gcwoNelns-B-elNSlAhk0NSAuEU63EsZZelrz6Y35Xjbu7JcORee_uiXpWvB3GKpAGnaeC3cbo1_QC2YRYhwL2HbCMEj4cyinPWfVskKWkvyM2q4JHLJn7Cnm2qCnlom92ExYP5BnsBbCByi9WhIAMfs_GYSfxjxk_jc3scCfS7vHE9EbXOONmnXPmw0ZlkmN0RAu4Acd4AdYMFq1bi7RjHtCNYfm0ZY5zW09jNwQsKAjAQkHVHx56sO0xT79CGZsPOYRO3KK98ybjl1TlHvgasSkKfj9m";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
