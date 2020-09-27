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
            title: '大数据分析平台-登录',
            show:true
        }
    },
    {
        path: '/home',
        component: () => import('./views/MainLayout'),
        children: [
            {
                path: '',
                component: () => import('./views/PageHomeLayout.vue'),
                meta: {
                    title: '大数据分析平台-首页'
                }
            },
            {
                path:'/dev-depth-of-anesthesia',
                component:() => import('./views/PageDevDepthOfAnesthesiaLayout.vue'),
                meta: {
                    title: '大数据分析平台-麻醉深度仪器'
                }
            },
            {
                path:'/dev-monitor',
                component:() => import('./views/PageDevMonitorLayout.vue'),
                meta: {
                    title: '大数据分析平台-麻醉深度仪器'
                }
            },
            {
                path:'/dev-anesthesia',
                component:() => import('./views/PageDevAnesthesiaLayout.vue'),
                meta: {
                    title: '大数据分析平台-麻醉机'
                }
            },
            {
                path:'/dev-noninvasive-hemoglobin',
                component:() => import('./views/PageDevNoninvasiveHemoglobinLayout.vue'),
                meta: {
                    title: '大数据分析平台-无创血红蛋白仪器'
                }
            },
            {
                path:'/dev-noninvasive-brain-oxygen',
                component:() => import('./views/PageDevNoninvasiveBrainOxygenLayout.vue'),
                meta: {
                    title: '大数据分析平台-无创脑氧仪器'
                }
            },
            {
                path:'/dev-noninvasive-blood-pressure',
                component:() => import('./views/PageDevNibpLayout.vue'),
                meta: {
                    title: '大数据分析平台-无创血压仪器'
                }
            },
            {
                path:'/data-analysis-ope-mid',
                component:() => import('./views/PageDataAnalysisOpeMid.vue'),
                meta: { 
                    title: '术中仪器数据分析'
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