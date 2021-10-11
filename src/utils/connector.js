const Connector = {
	// 优惠券列表
	CouponList: { describe: '优惠券列表', api: 'warehouseTest/CouponEvent/couponlist' },

	// 优惠券详情
	CouponDetails: { describe: '优惠券详情', api: 'onlinemarketTest/coupon/detail' },

	// 会员优惠券
	MemberCoupon: { describe: '会员优惠券', api: 'memberserverminiTest/customer/v1/coupon_list' },

	// 领取优惠券
	GetCoupons: { describe: '领取优惠券', api: 'memberserverminiTest/customer/v1/getcoupon' },

	// 可预定房型
	AvailableRoomTypes: { describe: '可预定房型', api: 'reserveServiceTest/mini/booking/roomsortlist' },

	// 买断方案
	BuyoutPlan: { describe: '买断方案', api: 'reserveServiceTest/mini/booking/buyoutset' },

	// 我的预约
	MyAppointment: { describe: '我的预约', api: 'reserveServiceTest/mini/booking/orderlist' },

	// 预定酒水方案
	BookADrinkPlan: { describe: '预定酒水方案', api: 'reserveServiceTest/mini/booking/chargingwineset' },

	// 用户绑卡列表
	UserTiedCardList: { describe: '用户绑卡列表', api: 'memberserverminiTest/WxCustomer/list' },

	// 商家详情
	MerchantDetails: {
		describe: '商家详情',
		api: 'memberserverminiTest/WxCompany/company_page'
	},

	// 会员卡详情
	MembershipCardDetails: {
		describe: '会员卡详情',
		api: 'memberserverminiTest/WxCustomer/detail'
	},

	// 会员建卡
	MembershipCard: { describe: '会员建卡', api: 'memberserverminiTest/WxCustomer/create' },

	//菜单类型列表
	MaterialSort: { describe: '菜单类型列表', api: 'onlinemarketTest/material/get_sort' },

	//菜品搜索
	MaterialSearch: { describe: '菜品搜索', api: 'onlinemarketTest/material/search' },

	//获取热卖商品套餐
	MaterialHot: { describe: '热卖商品套餐', api: 'onlinemarketTest/material/hot_group' },

	// 获取套餐数据
	MaterialGroupInfo: { describe: '套餐数据', api: 'material/onlinemarketTest/material/group_info' },

	//订单详情
	OrderGgetDdetail: { describe: '订单详情', api: 'onlinemarketTest/order/get_detail' },
	// 会员分享奖励
	MemberSharingRewards: { describe: '会员分享奖励', api: 'memberserverminiTest//Membersharerule/wechat_rulelist' },

	// 获取购物车
	Shoppingcart: { describe: '获取购物车', api: 'onlinemarketTest/shoppingcart/getinfo' },

	// 添加购物车
	Addtocart: { describe: '添加购物车', api: 'onlinemarketTest/shoppingcart/addtocart' },

	// 删减购物车
	Removefromcart: { describe: '添加购物车', api: 'onlinemarketTest/shoppingcart/removefromcart' }
};

export default Connector;
