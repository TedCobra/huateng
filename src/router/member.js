const memberRoutes = [
	{
		path: '/member',
		name: 'member',
		meta: {
			title: '会员中心',
			index: 2
		},
		component: () => import('../pages/Member.vue')
	},
	{
		path: '/member/welfare',
		name: 'memberWelfare',
		meta: {
			title: '分享领福利',
			index: 3
		},
		component: () => import('../pages/member/Welfare.vue')
	},
	{
		path: '/member/recharge',
		name: 'memberRecharge',
		meta: {
			title: '会员充值',
			index: 3
		},
		component: () => import('../pages/member/Recharge.vue')
	},
	{
		path: '/member/reward',
		name: 'memberReward',
		meta: {
			title: '我的奖励',
			index: 3
		},
		component: () => import('../pages/member/Reward.vue')
	},
	{
		path: '/member/material',
		name: 'memberMaterial',
		meta: {
			title: '我的资料',
			index: 3
		},
		component: () => import('../pages/member/Material.vue')
	},
	{
		path: '/member/equity',
		name: 'memberEquity',
		meta: {
			title: '会员权益',
			index: 3
		},
		component: () => import('../pages/member/Equity.vue')
	},
	{
		path: '/member/card',
		name: 'memberCard',
		meta: {
			title: '建卡绑卡',
			index: 3
		},
		component: () => import('../pages/member/Card.vue'),
		redirect: { name: 'MemberApplicationCard' },
		children: [
			{
				path: 'applicationCard',
				name: 'MemberApplicationCard',
				meta: {
					title: '建卡绑卡', // 申请会员卡
					index: 4
				},
				component: () => import('../pages/member/card/ApplicationCard.vue'),
				default: true
			},
			{
				path: 'tiedCard',
				name: 'MemberCardTied',
				meta: {
					title: '建卡绑卡', // 绑定实体卡
					index: 4
				},
				component: () => import('../pages/member/card/TiedCard.vue')
			}
		]
	},
	{
		path: '/member/card/buildCard',
		name: 'memberBuildCard',
		meta: {
			title: '会员建卡',
			index: 5
		},
		component: () => import('../pages/member/card/BuildCard.vue')
	},
	{
		path: '/member/bill',
		name: 'memberBill',
		meta: {
			title: '账单记录',
			index: 3
		},
		component: () => import('../pages/member/Bill.vue')
	}
];

export default memberRoutes;
