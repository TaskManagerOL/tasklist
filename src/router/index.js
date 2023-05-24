import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: '/',
            name: 'home',
            component: () => import('../components/mainPage.vue'),
            children: [
                {
                    path: '/sign',
                    name: 'sign',
                    component: () => import('../components/SignIn.vue'),
                }
            ]
        }
    ]
})

export default router