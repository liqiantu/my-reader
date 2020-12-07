import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/index'
import Home from '../pages/home'
import Category from '../pages/category'
import Detail from '../pages/detail'
import Content from '../pages/content'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index?kind=2',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index,
            },
            {
                path: '/category',
                name: 'category',
                component: Category
            },
            {
                path: '/detail',
                name: 'detail',
                component: Detail
            },
            {
                path: '/content',
                name: 'content',
                component: Content
            }
        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
