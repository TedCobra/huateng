import axios from 'axios';

var INSTANCE = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: 20000
});

INSTANCE.interceptors.response.use(
	(res) => {
		console.log(res);
		if (res.status === 200) return Promise.resolve(res);
		return Promise.reject(res);
	},
	(err) => {
		console.log(err);
		// if (err.response.status) {
		// 	switch (err.response.status) {
		// 		default:
		// 			console.log(err.response.data.message);
		// 	}
		// 	return Promise.reject(err.response);
		// }
	}
);

// const Get = (apiUrl, params) => {
// 	return new Promise((resolve, reject) => {
// 		INSTANCE.get(apiUrl, {
// 			params: params
// 		})
// 			.then((res) => {
// 				if (!res.data.code) return resolve(JSON.parse(res.data));
// 			})
// 			.catch((error) => reject(error.data));
// 	});
// };

const Post = (apiUrl, params) => {
	return new Promise((resolve, reject) => {
		INSTANCE.post(apiUrl, params)
			.then((res) => {
				if (!res.data.err_code) return resolve(res.data.data);
			})
			.catch((error) => {
				console.log(error);
				reject(error.data);
			});
	});
};

// 接口
// 优惠券
const HttpService = {
	// 优惠券列表
	Coupon: function (company_id, eventid) {
		return Post('warehouseTest/CouponEvent/couponlist', {
			company_id: company_id,
			eventid: eventid
		});
	},
	// 优惠券详情
	// CouponDetails: function (openid, company_id, coupon_code) {
	// 	return Post('onlinemarketTest/coupon/detail', {
	// 		openid: openid,
	// 		company_id: company_id,
	// 		coupon_code: coupon_code
	// 	});
	// },
	// 商家详情
	MerchantDetails: function (company_id, uniondid) {
		return Post('memberserverminiTest/WxCompany/company_page', {
			company_id: company_id,
			uniondid: uniondid
		});
	},
	// 我的预约
	MyAppointment: function () {},
	// 可预定房型
	AvailableRoomTypes: function (company_id) {
		return Post('reserveServiceTest/mini/booking/roomsortlist', {
			company_id: company_id
		});
	},
	// 用户绑卡列表
	UserTiedCardList: function (openid, company_id) {
		return Post('memberserverminiTest/WxCustomer/list', {
			openid: openid,
			company_id: company_id
		});
	}
};

export default HttpService;
