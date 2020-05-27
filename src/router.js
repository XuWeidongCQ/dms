import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'',//一级router-view组件默认显示的组件
        redirect:'/login',
    },
    {
        path:'/login',//一级router-view组件默认显示的组件
        component:() => import('./views/LoginLayout')
    },
    {
        path: '/home',
        component:() => import('./views/MainLayout'),
        children:[
            {
                path:'',
                component:() => import('./views/HomePageLayout.vue')
            }
        ]
    }
]
export default new Router({
    routes,
})