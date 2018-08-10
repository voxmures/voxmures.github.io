<template>
    <article v-if="post">
        {{ post.content }}
    </article>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	props: ['id']
})
export default class Post extends Vue {
    get post() {
    	return this.$store.getters['$_blog/GET_POST'](this.id);	// TODO: Use types
    };
};
</script>