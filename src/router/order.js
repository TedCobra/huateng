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
		path: '/order/myAppointment',
		name: 'orderMyAppointment',
		meta: {
			title: '我的预约',
			index: 3
		},
		component: () => import('../pages/order/MyAppointment.vue')
	}
];

export default orderRoutes;
