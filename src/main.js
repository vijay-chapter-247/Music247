import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index.js";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.filter('toUpperCase', function(value) {
  return value.toUpperCase();
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

