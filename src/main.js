import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import Spotify from "spotify-web-api-node";
import VueSpotify from "vue-spotify";

Vue.use(VueSpotify, new Spotify());

Vue.config.productionTip = false;

Vue.prototype.$myClientId = "6d280f8d789b4a858a67c830a85545be";
Vue.prototype.$myClientSecret = "354f43281e0e40b8afa003a6f5361b54";
Vue.prototype.$mySetAccessToken =
  "BQDhAa24qVbL5nA-4BICokTFNtCXT0X_xe7oAyJSXIx4wTyWzo6OE0v6JspERm2pObR8ov8n0rH_plczul2VC0qsAkq4Wwbf4Mwvnp11qozrl5LLcqcXvl5nwmwLD03duEuOxjcISEyidtpb2SVWXsKs5g61g3yQj6rbYbFetBQwPT0WCtCGzcvOLxnKuF-_4hYRn8BMNlaZ6z6mNHfdcer8z-PY-NfnglLdcnEZamH8FDZb-3kvgbko5v8zgqIDEtJPbXGNU81LJteERaIZD_mj71jmd_tTd9L0uZef";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
