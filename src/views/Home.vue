<template>
	<div class="w-1/3 m-auto">
		<PostList></PostList>
	</div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Blog from '@/modules/blog';

import PostList from '@/modules/blog/_components/PostList';

@Component({
	modules: {
		Blog
	},
	components: {
		PostList
	}
})
export default class Home extends Vue { };
</script>