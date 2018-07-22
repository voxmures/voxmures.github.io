<template>
    <article>
        {{ content }}
    </article>
</template>

<script>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import api from '../api';

@Component({})
export default class Post extends Vue {
    @Prop({}) id;

    content = '';

    @Watch('id')
    onIdChanged(id) {
        api.getPost(id).then(post => this.content = post);
    };
};
</script>