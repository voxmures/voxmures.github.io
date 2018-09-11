<template>
    <article v-if="post">
    	<div class="flex py-2 px-2">
            <button type="button" @click="goBack" class="h-24 w-12 -ml-16">
                <fa-icon :icon="['fas', 'chevron-left']" class="fa-2x text-red-chinese" />
            </button>
            <div class="flex-col px-3">
                <div class="text-xs">
                    <fa-icon :icon="['far', 'calendar']" /> {{ post.date }}
                </div>
        		<div class="font-bold text-3xl">{{ post.title }}</div>
            </div>
    	</div>
    	<div class="py-3 px-4">
        	{{ post.content }}
    	</div>
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

    goBack() {
    	this.$router.go(-1);
    };
};
</script>