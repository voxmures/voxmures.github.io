import Vue from 'vue';
import App from './App';
import router from './router';

import './lib/styles';
import './lib/fonts';

new Vue({
    el: '#app',
    router,
    render: h => <App/>
});