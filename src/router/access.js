const accessRoutes = [
	{
		path: '/access/deposit',
		name: 'accessDeposit',
		meta: {
			title: '寄存',
			index: 2
		},
		component: () => import('../pages/access/Deposit.vue')
	},
	{
		path: '/access/withdraw',
		name: 'accessWithdraw',
		meta: {
			title: '支取',
			index: 2
		},
		component: () => import('../pages/access/Withdraw.vue')
	}
];

export default accessRoutes;
