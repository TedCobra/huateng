import axios from 'axios';

const CouponList = { describe: '优惠券列表', api: 'warehouseTest/CouponEvent/couponlist' };

const CouponDetails = { describe: '优惠券详情', api: 'onlinemarketTest/coupon/detail' };
// const MyAppointment = { describe: '我的预约', api: '' };
const AvailableRoomTypes = { describe: '可预定房型', api: 'reserveServiceTest/mini/booking/roomsortlist' };
const UserTiedCardList = { describe: '用户绑卡列表', api: 'memberserverminiTest/WxCustomer/list' };
const MerchantDetails = { describe: '商家详情', api: 'memberserverminiTest/WxCompany/company_page' };

var INSTANCE = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json'
	},
	timeout: 20000
});

INSTANCE.interceptors.response.use(
	(res) => {
		console.log(res.data);
		if (res.status === 200) return Promise.resolve(res.data);
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

const Post = (portDetails, params) => {
	return new Promise((resolve, reject) => {
		INSTANCE.post(portDetails.api, params)
			.then((res) => {
				if (!res.err_code) return resolve(res.data);
				console.log(`${portDetails.describe}: ${res.err_msg}`);
			})
			.catch((error) => {
				console.log(error);
				reject(error.data);
			});
	});
};

// 接口
const HttpService = {
	CouponList: function (company_id, eventid) {
		return Post(CouponList, {
			company_id: company_id,
			eventid: eventid
		});
	},
	CouponDetails: function (openid, company_id, coupon_code) {
		return Post(CouponDetails, {
			openid: openid,
			company_id: company_id,
			coupon_code: coupon_code
		});
	},
	MerchantDetails: function (company_id, uniondid) {
		return Post(MerchantDetails, {
			company_id: company_id,
			uniondid: uniondid
		});
	},
	// MyAppointment: function () {},
	AvailableRoomTypes: function (company_id) {
		return Post(AvailableRoomTypes, {
			company_id: company_id
		});
	},
	UserTiedCardList: function (openid, company_id) {
		return Post(UserTiedCardList, {
			openid: openid,
			company_id: company_id
		});
	}
};

export default HttpService;
