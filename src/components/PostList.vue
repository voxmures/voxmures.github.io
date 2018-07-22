<template>
    <div class="items-center">
        <!-- <Post :post-id="selected"></Post> -->
        <ul>
            <li v-for="{ title, date, id } in posts" :key="id" @click="selectPost(id)">
                {{ title }} - {{ date }}
            </li>
        </ul>
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