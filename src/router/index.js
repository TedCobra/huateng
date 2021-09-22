import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            index: 1,
        },
        component: () => import('../pages/Index.vue'),
    },
    // 优惠券
    {
        path: '/coupon',
        name: 'coupon',
        meta: {
            title: '领取优惠劵',
            index: 2,
        },
        component: () => import('../pages/Coupon.vue'),
    },
    {
        path: '/coupon/details',
        name: 'couponDetails',
        meta: {
            title: '优惠券详情',
            index: 3,
        },
        component: () => import('../pages/coupon/Details.vue'),
    },
    // 预约
    {
        path: '/reserve',
        name: 'reserve',
        meta: {
            title: '预约',
            index: 2,
        },
        component: () => import('../pages/Reserve.vue'),
    },
    // 点单
    {
        path: '/order',
        name: 'order',
        meta: {
            title: '点单',
            index: 2,
        },
        component: () => import('../pages/Order.vue'),
    },
    // 会员中心
    {
        path: '/member',
        name: 'member',
        meta: {
            title: '会员中心',
            index: 2,
        },
        component: () => import('../pages/Member.vue'),
    },
    {
        path: '/member/recharge',
        name: 'memberRecharge',
        meta: {
            title: '会员充值',
            index: 3,
        },
        component: () => import('../pages/member/Recharge.vue'),
    },
    {
        path: '/member/card',
        name: 'memberCard',
        meta: {
            title: '建卡绑卡',
            index: 3,
        },
        component: () => import('../pages/member/Card.vue'),
    },
    {
        path: '/member/material',
        name: 'memberMaterial',
        meta: {
            title: '我的资料',
            index: 3,
        },
        component: () => import('../pages/member/Material.vue'),
    },
    {
        path: '/member/equity',
        name: 'memberEquity',
        meta: {
            title: '会员权益',
            index: 3,
        },
        component: () => import('../pages/member/Equity.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
});

export default router;
