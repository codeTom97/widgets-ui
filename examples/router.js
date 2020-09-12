import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from './layouts/layout.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            redirect: '/home',
        },
        {
            path: "/home",
            name: 'Home',
            component: () => import('./pages/index.vue')
        },
        {
            path: "/components",
            name: "Components",
            redirect: '/components/button',
            children: [
                {
                    path: "/button",
                    name: "Button",
                    components: () => import('./pages/components/button.vue')
                }
            ]
        }
    ],
    linkActiveClass: 'active'
});


export default router;