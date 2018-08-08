<template>
    <div>
        <template v-for="{ title, date } in posts">
            <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="flex mb-2">
                        <div class="w-1/2 font-bold text-xl">{{ title }}</div>
                        <div class="w-1/2 pt-1 text-right align-middle text-xs">
                            <fa-icon :icon="['far', 'calendar']" /> {{ date }}
                        </div>
                    </div>
                    <p class="text-grey-darker text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class PostList extends Vue {

    get posts() {
        return this.$store.getters['$_blog/GET_POSTS'];
    };

    /* VUE.JS HOOKS */
    created() {
        this.$store.dispatch('$_blog/FETCH_POSTS');
    };
};
</script>