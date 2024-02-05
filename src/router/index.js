import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Login from "@/views/login/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    //配置登录页
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录页'
        }
    },
    //配置登录成功页面，使用时需要使用 path 路径来实现跳转
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/Index'),
        meta: {
            title: '首页'
        }
    },
]

const router = new VueRouter({
    routes
})

//在全局后置守卫中获取路由元信息设置title
router.afterEach((to, from) => {
    // (☆_☆)    →_→    $_$   (^○^)   (●_●)   (●︿●)    (^o^)
    document.title = '$_$ ' + to.meta.title
})

export default router
