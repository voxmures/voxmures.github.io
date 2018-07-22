<template>
    <div class="w-1/3 m-auto">
        <template v-for="{ title, date, id } in posts">
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
        <!-- <Post :post-id="selected"></Post> -->
        <!-- <ul>
            <li v-for="{ title, date, id } in posts" :key="id" @click="selectPost(id)">
                {{ title }} - {{ date }}
            </li>
        </ul> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Post from './Post';

import api from '../api';

@Component({})
export default class PostList extends Vue {
    posts = [];
    selected = '';

    created() {
        api.fetchPosts().then(posts => this.posts = posts);
    };

    selectPost(id) {
        this.selected = id;
    };
};
</script>