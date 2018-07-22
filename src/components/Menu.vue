<template>
    <nav class="menu">
        <!-- LOGO -->
        <ul>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>About me</li>
        </ul>
        <!-- Twitter, Github and Linkedin buttons -->
    </nav>
</template>

<script>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({})
    export default class Menu extends Vue {

    };
</script>

<style scoped>
    .menu {
        position: fixed;
        top: 20px;
        width: 200px;
        height: 600px;
        background-color: red;
    }
</style>