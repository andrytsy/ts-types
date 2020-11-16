import {createRouter, createWebHistory} from 'vue-router'
import Main from '/src/components/Main'

const routes = [
    {
        path: '/',
        component: Main,
        name: 'main'
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
