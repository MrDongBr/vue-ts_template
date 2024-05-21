import { createRouter, createWebHistory } from 'vue-router'

import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        component: () => import('@/views/layout/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

const useRouter = (app: App) => {
    app.use(router)
}

// 路由拦截器

export default useRouter
