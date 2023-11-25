import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import { routes } from "./router/index.js";
import store from './store/index.js'

export const eventBus = new Vue();

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;


window.root = new Vue({
    render: h => h(App),
    vuetify,
    store,
    router
}).$mount("#app");