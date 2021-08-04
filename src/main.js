import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.prototype.$myClientId = "6d280f8d789b4a858a67c830a85545be";
Vue.prototype.$myClientSecret = "354f43281e0e40b8afa003a6f5361b54";
Vue.prototype.$mySetAccessToken =
  "BQCYDlntTYmvslEkEQ1D2DAFRlIAoE_GEtY4GeNsUDZvsVeTT9gyqNXVMUuDHX9gcyjqsXYLTHwGRw2y9iPo3hZazmBjxZVGbivQzyiwINx_zDEMPZf9z-yvVWe7CjlNPj6izpH40dlC86n1ucE5oosQRfw5Ud12IhH3FR3POriYIo4NkpCBuHsuOwJKs7R9HsgO-fn9hAj24WxHUDQSb0cESG0US3hrnJOWDMG3eBLd01hdzufWh9riLDUnWY8L2fXAq27ZMjobelTCDxt5-FyiX_nsVUxGK9fvKU-I";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
