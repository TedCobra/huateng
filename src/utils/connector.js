const Connector = {
	// 优惠券列表
	CouponList: { describe: '优惠券列表', api: 'warehouseTest/CouponEvent/couponlist' },
	// 优惠券详情
	CouponDetails: { describe: '优惠券详情', api: 'onlinemarketTest/coupon/detail' },
	// 我的预约
	MyAppointment: { describe: '我的预约', api: '' },
	// 可预定房型
	AvailableRoomTypes: { describe: '可预定房型', api: 'reserveServiceTest/mini/booking/roomsortlist' },
	// 用户绑卡列表
	UserTiedCardList: { describe: '用户绑卡列表', api: 'memberserverminiTest/WxCustomer/list' },
	// 商家详情
	MerchantDetails: {
		describe: '商家详情',
		api: 'memberserverminiTest/WxCompany/company_page'
	},
	// 会员建卡
	MembershipCard: { describe: '会员建卡', api: 'memberserverminiTest/WxCustomer/create' },

	//菜单类型列表
	MaterialSort: { describe: '菜单类型列表', api: 'onlinemarketTest/material/get_sort' },

	//菜品搜索
	MaterialSearch: { describe: '菜品搜索', api: 'onlinemarketTest/material/search' },

	//获取热卖商品套餐
	MaterialHot: { describe: '菜品搜索', api: 'onlinemarketTest/material/hot_group' },

	// 获取套餐数据
	MaterialGroupInfo: { describe: '菜品搜索', api: 'material/onlinemarketTest/material/group_info' },

	//订单详情
	OrderGgetDdetail: { describe: '', api: 'onlinemarketTest/order/get_detail' }
};

export default Connector;
