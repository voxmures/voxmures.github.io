<template>
    <Layout>
        <router-view slot="content"></router-view>
    </Layout>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Layout from './Layout';

@Component({
    components: {
        Layout
    }
})
export default class App extends Vue {};
</script>