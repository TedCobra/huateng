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
			title: '我的酒水',
			index: 2
		},
		component: () => import('../pages/access/Withdraw.vue')
	},
	{
		path: '/access/depositRecord',
		name: 'accessDepositRecord',
		meta: {
			title: '寄存记录',
			index: 2
		},
		component: () => import('../pages/access/DepositRecord.vue')
	},
	{
		path: '/access/withdrawRecord',
		name: 'accessWithdrawRecord',
		meta: {
			title: '支取记录',
			index: 2
		},
		component: () => import('../pages/access/WithdrawRecord.vue')
	}
];

export default accessRoutes;
