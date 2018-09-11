import Vue from 'vue';
import App from './App';

import './lib/styles';
import './lib/fonts';

import router from './router';

import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store();

// import Module from './utils/module';
// Vue.mixin(Module(store));

new Vue({
    el: '#app',
    router,
    store,
    render: h => <App/>
});