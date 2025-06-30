import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/views/FormPage.vue";
import SuccessPage from '@/views/SuccessPage.vue';

const routes = [
    { path: '/', redirect: '/form' },
    { path: '/form', name: 'Form', component: FormPage },
    { path: '/success', name: 'Success', component: SuccessPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router