<template>
    <Layout>
    	<template slot="content">
	    	<transition-page>
	        	<router-view></router-view>
	    	</transition-page>
	    </template>
    </Layout>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Layout from './Layout';
import { TransitionPage } from './components';

@Component({
    components: {
        Layout,
        TransitionPage
    }
})
export default class App extends Vue {};
</script>