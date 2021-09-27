const reserveRoutes = [
	{
		path: '/reserve',
		name: 'reserve',
		meta: {
			title: '预约',
			index: 2
		},
		component: () => import('../pages/Reserve.vue')
	},
	{
		path: '/reserve/myAppointment',
		name: 'reserveMyAppointment',
		meta: {
			title: '我的预约',
			index: 3
		},
		component: () => import('../pages/reserve/MyAppointment.vue')
	},
	{
		path: '/reserve/order',
		name: 'reserveOrder',
		meta: {
			title: '确认订单',
			index: 3
		},
		component: () => import('../pages/reserve/Order.vue')
	}
];

export default reserveRoutes;
