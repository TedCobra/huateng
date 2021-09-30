import axios from 'axios';

// 接口
import Connector from './connector.js';

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
		return Post(Connector.CouponList, {
			company_id: company_id,
			eventid: eventid
		});
	},
	CouponDetails: function (openid, company_id, coupon_code) {
		return Post(Connector.CouponDetails, {
			openid: openid,
			company_id: company_id,
			coupon_code: coupon_code
		});
	},
	MerchantDetails: function (company_id, uniondid) {
		return Post(Connector.MerchantDetails, {
			company_id: company_id,
			uniondid: uniondid
		});
	},
	// MyAppointment: function () {},
	AvailableRoomTypes: function (company_id) {
		return Post(Connector.AvailableRoomTypes, {
			company_id: company_id
		});
	},

	/**
	 * @param {商家编号 number} company_id
	 * @param {包厢类型 number} roomsortid
	 * @param {预定时间 yyyy-mm-dd} reservationdate
	 * @returns
	 */
	BuyoutPlan: (company_id, roomsortid, reservationdate) => {
		return Post(Connector.BuyoutPlan, {
			company_id: company_id,
			roomsortid: roomsortid,
			reservationdate: reservationdate
		});
	},
	UserTiedCardList: function (openid, company_id) {
		return Post(Connector.UserTiedCardList, {
			openid: openid,
			company_id: company_id
		});
	},
	MembershipCard: function () {
		return Post(Connector.MembershipCard, {});
	}
};

export default HttpService;
