'use strict';
import Vue from 'vue';
import './assets/style.css';
import './assets/font/iconfont.css';
import app from './app.vue';
import sum from './vendor/sum';
console.log('sum(1,2)' + sum(1, 2));

const minus = require('./vendor/minus');
console.log('minus(1,2)' + minus(1, 2));

require(['./vendor/multi.js'], function(multi) {
    console.log('multi(1,2)=' + multi(1, 2));
});

new Vue({
    render: h => h(app),
}).$mount('#app');
