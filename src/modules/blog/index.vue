<template>
	<div class="h-screen bg-red-chinese">
		<div class="h-screen w-4/5 p-2 ml-auto bg-white shadow-inner">
			<transition-page>
				<router-view></router-view>
			</transition-page>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import store from './_store';

import TransitionPage from '@/components/TransitionPage';

@Component({
	components: {
		TransitionPage
	}
})
export default class Blog extends Vue {
    /* VUE.JS HOOKS */
    beforeCreate() {
    	if(!this.$store._modules.root._children[`$_blog`]) {
    		this.$store.registerModule(`$_blog`, store);
    	}
    };

    created() {
        this.$store.dispatch('$_blog/FETCH_POSTS'); // TODO: Use types
    };
};

export { default as BlogRoutes } from './router';
</script>

<style scoped>
	.shadow-inner {
		box-shadow: inset 5px 0 4px 0 rgba(0, 0, 0, 0.15);
	}
</style>