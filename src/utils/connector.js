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
	MembershipCard: { describe: '会员建卡', api: 'memberserverminiTest/WxCustomer/create' }
};

export default Connector;
