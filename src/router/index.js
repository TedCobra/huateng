import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由文件
import reserveRoutes from './reserve'; // 预约
import memberRoutes from './member'; // 会员
import orderRoutes from './order'; // 点单
import accessRoutes from './access'; // 存取酒

const routes = [
	{
		path: '/',
		name: 'index',
		meta: {
			title: '首页',
			index: 1
		},
		component: () => import('../pages/Index.vue')
	},
	// 优惠券
	{
		path: '/coupon',
		name: 'coupon',
		meta: {
			title: '领取优惠劵',
			index: 2
		},
		component: () => import('../pages/Coupon.vue')
	},
	{
		path: '/coupon/details',
		name: 'couponDetails',
		meta: {
			title: '优惠券详情',
			index: 3
		},
		component: () => import('../pages/coupon/Details.vue')
	},
	// 预约
	...reserveRoutes,
	// 会员中心
	...memberRoutes,
	// 点单
	...orderRoutes,
	// 存取酒
	...accessRoutes
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
});

export default router;
