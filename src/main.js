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
  "BQCmAfuXQplmxnIPAWNNxLA6xnTRqvD6k6SV1GNGoO6Hu-mGCXHdEGYVpMd7TbVy1dnjuzcBzCpIpQtFOSn2QkWLREgh70yW_iiznzM2N_QZsJN_VBgu3NY4cXlCRP_aPlXxtJlhwXpS-t-rghNRlLZINnasqCv12Ec0YFe-ytmEzTPzjttwZLrFI5KEb2_G5Fmx4iQq2BvDikGBwrPxTA-Go71UQi6N6l_GtgaK6vdT51-uzQHj5cTxGXyNW00euPcVB8-Vk5yxTUeq3Dn3k0R9xmPss14fpIMXbW7K";

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
