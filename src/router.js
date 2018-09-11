import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Blog, BlogRoutes } from './modules';

// TODO: Register children routes dynamically in each module
// PR #2064 (https://github.com/vuejs/vue-router/pull/2064)
const routes = [
	{ path: '/', component: Blog, children: BlogRoutes },
];

export default new VueRouter({ 
	mode: 'history',
	routes
});