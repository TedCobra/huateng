const reserveRoutes = [
	{
		path: '/reserve',
		name: 'reserve',
		meta: {
			title: '预约',
			index: 2
		},
		component: () => import('../pages/Reserve.vue')
	}
];

export default reserveRoutes;
