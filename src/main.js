import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store/index.js";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.prototype.$myClientId = "6d280f8d789b4a858a67c830a85545be";
Vue.prototype.$myClientSecret = "354f43281e0e40b8afa003a6f5361b54";
Vue.prototype.$mySetAccessToken =
  "BQDpmjkdJdqHV3C1uKcXwUD8eW_RWD5mk3Xm-g3YQtOA1NJ6XHh-0MmaySLTYZIhnz3K1FNJigDn6oMvUjEBiUTjzH_-NyBBsw98aNYfX4xxGvj8MK8xrQ4f7TXph0Tpt7axTK4QxEyHqaOYWbqKHE1_izIRX1luCXFtuh-7QYtUHEAPNswIxMSDt0bA4mdBNh0xFhfThD85ehUFFl80Ygiz5hJdpAJ8h-QsOolj32JZ72_EW96FWlenre_LI4Iuy2gw8WDfsi3xs9R2X22Cc_21gvK3VfHGgdQuv2xK";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
