<template>
    <div>
        <template v-for="{ id, title, date, content } in posts">
            <div class="rounded overflow-hidden shadow-lg">
                <!-- <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"> -->
                <div class="px-6 py-4">
                    <div class="flex mb-2">
                        <div class="w-1/2 font-bold text-xl">{{ title }}</div>
                        <div class="w-1/2 pt-1 text-right align-middle text-xs">
                            <fa-icon :icon="['far', 'calendar']" /> {{ date }}
                        </div>
                    </div>
                    <div class="text-grey-darker text-base mb-2" v-html="getDescription(content)"></div>
                    <div class="text-right">
                        <router-link :to="`post/${id}`" class="text-sm no-underline">
                            Read more...
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import showdown from 'showdown';
const converter = new showdown.Converter();

@Component({})
export default class PostList extends Vue {

    get posts() {
        return this.$store.getters['$_blog/GET_POSTS']; // TODO: Use types
    };

    getDescription(content) {
        return converter.makeHtml(content);
    };
};
</script>