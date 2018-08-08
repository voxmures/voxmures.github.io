import Vue from 'vue';
import App from './App';

import './lib/styles';
import './lib/fonts';

import router from './router';

import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store();

import { default as ModuleManager, ModuleMixin } from './utils/module';
Vue.prototype.$modules = new ModuleManager(store);
Vue.mixin(ModuleMixin);

new Vue({
    el: '#app',
    router,
    store,
    render: h => <App/>
});