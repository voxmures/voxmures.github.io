<template>
    <Layout>
        <div slot="header">
            <!-- <Menu></Menu> -->
        </div>
        <div slot="content" class="flex-grow bg-grey-light">
            <PostList></PostList>
            <!-- Route view -->
        </div>
    </Layout>
</template>

<script>
import './styles';

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Layout, PostList, Menu } from './components';

@Component({
    name: 'App',
    components: {
        Layout,
        PostList,
        Menu
    }
})
export default class App extends Vue {};
</script>