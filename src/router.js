import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Home } from './views';
import { Blog, BlogRoutes } from './modules';

// TODO: Register children routes dynamically in each module
// PR #2064 (https://github.com/vuejs/vue-router/pull/2064)
const routes = [
	{ path: '/', component: Home }
	// { path: '/', component: Blog, children: BlogRoutes },
];

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.length) {
		return next();
	}
	return next('/');
});

export default router;