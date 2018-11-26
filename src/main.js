import '../lib/mui/css/mui.min.css'; //引入mui的样式
import mui from '../lib/mui/js/mui.min.js';
mui.init({
    swipeBack: true //启用右滑关闭功能
});
var gallery = mui('.mui-slider');
gallery.slider({
    interval: 300 //自动轮播周期，若为0则不自动播放，默认为0；
});
import 'mint-ui/lib/style.css'; //导入组价所需要的样式
import {Button} from 'mint-ui';
Vue.component(Button.name, Button);


import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import app from '../app.vue';
import login from './components/login.vue';


var router = new VueRouter({
    routes : [
        {path:'/',component:app},
        {path:'/login',component:login}
    ]
});

var vv = new Vue({
    el : "#app",
   components:{
       app
   },
    router
});
console.log(vv);
