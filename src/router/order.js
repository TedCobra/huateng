const orderRoutes = [
	{
		path: '/order',
		name: 'order',
		meta: {
			title: '点单',
			index: 2
		},
		component: () => import('../pages/Order.vue')
	},
	{
		path: '/order/commit',
		name: 'orderCommit',
		meta: {
			title: '提交订单',
			index: 3
		},
		component: () => import('../pages/order/OrderCommit.vue')
	},
	{
		path: '/order/detail',
		name: 'orderDetail',
		meta: {
			title: '订单详情',
			index: 3
		},
		component: () => import('../pages/order/OrderDetail.vue')
	}
];

export default orderRoutes;
