import PostPage from "@/components/PostPage";
import JustRouting from "@/views/JustRouting"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : "/",
        component : PostPage
    },
    {
        path : "/justRouting",
        component : JustRouting
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router
