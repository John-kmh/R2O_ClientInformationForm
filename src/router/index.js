import { createRouter, createWebHistory } from "vue-router";
import InformationForm from "@/components/layouts/InformationForm.vue";

const routes = [
    { path: '/', redirect: '/informationForm' },
    { path: '/informationForm',component: InformationForm }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router