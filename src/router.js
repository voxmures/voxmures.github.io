import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Home, Blog } from './views';

const routes = [
	{ name: 'home', path: '/', component: Home },
	// { name: 'blog', path: '/blog', component: Blog },
	{ name: 'post', path: '/blog/:id', component: Blog, props: true },
];

export default new VueRouter({ 
	mode: 'history',
	routes
});