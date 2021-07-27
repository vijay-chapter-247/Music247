import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from "./store/index";


import Spotify from 'spotify-web-api-node'
import VueSpotify from 'vue-spotify'

Vue.use(VueSpotify, new Spotify())

Vue.config.productionTip = false

Vue.prototype.$myClientId = '6d280f8d789b4a858a67c830a85545be'
Vue.prototype.$myClientSecret = '354f43281e0e40b8afa003a6f5361b54'
Vue.prototype.$mySetAccessToken = 'BQCHt-UArXRYxCINjTXK8JkJnudz96duYGnlpjniwcvrsyoGuKE-6LU8PjOw-P4FebX3CMe2jVOxgAqGv7f00uN8WIG80opcDi6br52uCAwZiVHZZ5LkbOClv_kLxU5HId6vl78lYveo7zlU00zaz38dxjjptNVLBTa4eR9LKgklUGzqknFqP-lIvY36DiClvw22ca1kPfNIAO6yoP1YLohoveGXjZo2VxIEY1NgW4wtPjPoI5Z1qppsTfMO2mQiKYblDjmto2GWVxItJlC7ndvMa6C3ADlF84NOaeIh'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
