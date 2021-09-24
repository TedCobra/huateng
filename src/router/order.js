const orderRoutes = [
	{
		path: '/order',
		name: 'order',
		meta: {
			title: '点单',
			index: 2
		},
		component: () => import('../pages/Order.vue')
	}
];

export default orderRoutes;
