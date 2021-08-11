import Vue from 'vue';
import Vuex from 'vuex'
import VuexData from './VuexData'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        VuexData,
    }
})