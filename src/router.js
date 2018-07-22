import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { PostList, Post } from './components';

const routes = [
	{ name: 'home', path: '/', component: PostList },
	{ name: 'post', path: '/post/:sha', component: Post },
];

export default new VueRouter({ 
	mode: 'history',
	routes
});