<template>
	<Post :id="id"></Post>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Blog from '@/modules/blog';

import Post from '@/modules/blog/_components/Post';

@Component({
	modules: {
		Blog
	},
	components: {
		Post
	},
	props: ['id']
})
export default class BlogView extends Vue {
    /* VUE.JS HOOKS */
    created() {
        this.$store.dispatch('$_blog/FETCH_POSTS'); // TODO: Use types
    };
};
</script>