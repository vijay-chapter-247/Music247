import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'

Vue.use(VueSpotify, new Spotify())

Vue.config.productionTip = false

Vue.prototype.$myClientId = '10392945411e4853b52f5b7049f85c20'
Vue.prototype.$myClientSecret = 'c2f3f640df1d4f98b495a9fff2a1370e'
Vue.prototype.$mySetAccessToken = 'BQAjKx_Mkie-StaqA-NPQEm1NLAyGyZrw6mqzmdcCsnDl300HAZb1rctzNuBUq_bI67q-5pT6YPhSiAotJvZiffPOGpKb1WR9-mgmMJoEIIOk-hsOP3jNhpdnOByHX4TVPBCP3heas4p_BDbLZzfjUkzj98EUIUuAgqho7Im_RYR5NtaNenO9QVxD4qbduKrBo4taWovaVUWAHo23b7_JNqdCFi4G6J5Q52wrh4aBfRyjmelpRJ4rNK3fim55bN0CXRseleateAcqNAS7EKvUonguwCz4_aZSx6Xmta2'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
