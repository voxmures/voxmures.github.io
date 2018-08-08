import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Home } from './views';

const routes = [
	{ name: 'home', path: '/', component: Home },
	// { name: 'post', path: '/post/:sha', component: Post },
];

export default new VueRouter({ 
	mode: 'history',
	routes
});