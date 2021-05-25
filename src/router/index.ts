import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import {getDocumentTitle, initRoutes} from '../utils/routerUtils'
import {notification} from "ant-design-vue";
import {useStore} from '../store'

const store = useStore()

// 公共路由
const publicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404/404.vue'),
    },
    // {
    //     path: "/login",
    //     name: "login",
    //     meta: {title: "登录"},
    //     component:() => import('../components/Login.vue')
    // },
    { path: '/', redirect: '/home' }
]

//本地路由列表
export const localRoutes: Array<RouteRecordRaw> = [
    {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/home/Home.vue'),
    },
    // {
    //     path:'msg',
    //     name:'msg',
    //     meta:{title:'信息'},
    //     component: () => import('../views/Msg.vue')
    // },
    // {
    //     path:'markdown',
    //     name:'markdown',
    //     meta:{title:'富文本'},
    //     component: () => import('../views/Markdown.vue')
    // },
    // {
    //     path: 'test',
    //     name: 'test',
    //     component: () => import('../views/AxiosTest.vue')
    // },{
    //     path: 'outer',
    //     name: 'outer',
    //     component: () => import('../views/Outer.vue')
    // }
]

//
const menuArr = [
    {
        key:'home',//key 唯一
        name: 'home', // 要跳转的路由名称
        title: '主页', // 菜单项标题
        icon: 'HomeOutlined' // icon类型
    },
    {
        key:'test',
        name: 'test',
        title: '测试接口',
        icon: 'BugOutlined'
    },
    {
        key:'first',
        title: '一级菜单',
        icon: 'PlayCircleOutlined',
        children: [
            {
                icon: 'TableOutlined',
                name: 'msg',
                title: '信息',
                key:'msg'
            },
            {
                key:'second',
                title: '二级菜单',
                icon: 'UnlockOutlined',
                children: [
                    {
                        key:'markdown',
                        name: 'markdown',
                        title: '富文本',
                        icon: 'FileMarkdownOutlined'
                    },{
                        key:'third',
                        title: '三级菜单',
                        icon: 'UnlockOutlined',
                        children:[
                            {
                                key:'outer',
                                name: 'outer',
                                title: '外部页面',
                                icon: 'FileMarkdownOutlined'
                            }
                        ]
                    }
                ],
            },
        ],
    },
]

// 创建router对象
const router = createRouter({
    history: createWebHashHistory(),
    routes:publicRoutes
});

let hasMenus = false
// router 拦截器
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    document.title = getDocumentTitle(to.meta.title as string);

    if (to.path == '/login'){
        next();
    }else {
        if (localStorage.getItem('token')) {
            if (hasMenus) {
                next()
            } else {
                try {
                    const routers = initRoutes(menuArr)
                    router.addRoute(routers)
                    router.addRoute({ path: '/:pathMatch(.*)',redirect: '/404'  })
                    hasMenus = true
                    console.log('添加路由后的列表',router.getRoutes());
                    next({path: to.path})
                } catch (error) {
                    notification.error({
                        message:'异常信息',
                        description: '身份异常，请重新登录',
                        duration: 3,
                    })
                    next('/404')
                }
            }
        } else {
            localStorage.setItem('token', '1')
            next('/404')
        }
    }
})

export default router