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
	UserTiedCardList: function (openid, company_id) {
		return Post(Connector.UserTiedCardList, {
			openid: openid,
			company_id: company_id
		});
	},

	/**
	 * 菜单类型列表
	 * @param {公司Id} company_id
	 * @param {包厢类型} roomsortid
	 */
	materialSort: function (company_id, roomsortid) {
		return Post(Connector.MaterialSort, {
			company_id: company_id,
			roomsortid: roomsortid
		});
	},

	/**
	 * 菜品搜索
	 * @param {公司id} company_id
	 * @param {物品名称} materialname
	 * @param {价格类型Id} pricetypeid
	 * @param {包厢类型ID} roomsortid
	 * @param {区域id} areaid
	 * @param {会员id} guestid
	 * @param {分页，全部为-1，首页为0} page
	 * @param {分页数量，默认为10} pagesize
	 */
	materialSearch: function (company_id = 5129, materialname, pricetypeid, roomsortid, areaid, guestid) {
		return Post(Connector.MaterialSearch, {
			company_id: company_id,
			materialname: materialname,
			pricetypeid: pricetypeid,
			roomsortid: roomsortid,
			areaid: areaid,
			guestid: guestid
		});
	},

	//获取热卖商品套餐
	materialHot: function (company_id = 5129) {
		return Post(Connector.MaterialHot, {
			company_id: company_id
		});
	},

	/**
	 * 获取套餐数据
	 * @param {*} company_id
	 * @param {价格类型Id} pricetypeid
	 * @param {物品Id} openid
	 */
	materialGroupInfo: function (company_id, pricetypeid, openid) {
		return Post(Connector.MaterialGroupInfo, {
			company_id: company_id,
			pricetypeid: pricetypeid,
			openid: openid
		});
	}
};

export default HttpService;
