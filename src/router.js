import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '',//一级router-view组件默认显示的组件
        redirect: '/login',
    },
    {
        path: '/login',//一级router-view组件默认显示的组件
        component: () => import('./views/LoginLayout'),
        meta: {
            title: '大数据分析平台-登录'
        }
    },
    {
        path: '/home',
        component: () => import('./views/MainLayout'),
        children: [
            {
                path: '',
                component: () => import('./views/HomePageLayout.vue'),
                meta: {
                    title: '大数据分析平台-首页'
                }
            }
        ]
    }
]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router