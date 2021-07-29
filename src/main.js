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
  "BQDo8BkaRhwLePXNIQXiG_uaFLxr99Z1lL7tHL-1WirEOTxucScaBEhLcbmLuhNCblKatXf2j9eykIWg9I4NwQz5MZRS8yoxzjetB1InrAZf8CJPTyo5HKOE-yM6wRj8zDR8TuzTXlHzH2AAAZ4ptZu7x81HZeg41bD1DQ-Vavb0vhE8mYVk5lzz9cfQTsyjdHLzE-px-3olGDOvaYqr18rgtYR0jRx_Ufaxv4w6FkhjVkgC252LWiUeFmVIlenif086ayanwtc80QdhzvXOysFljO62g8ZmcSaYVV7p";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
