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
				if (!res.err_code) return resolve(res);
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
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @param {活动编号 number} eventid
	 * @returns
	 */
	CouponList: (company_id, eventid) => {
		return Post(Connector.CouponList, {
			company_id: company_id,
			eventid: eventid
		});
	},
	/**
	 *
	 * @param {会员ID} openid
	 * @param {商家编号 number} company_id
	 * @param {优惠券码} coupon_code
	 * @returns
	 */
	CouponDetails: (openid, company_id, coupon_code) => {
		return Post(Connector.CouponDetails, {
			openid: openid,
			company_id: company_id,
			coupon_code: coupon_code
		});
	},
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @param {微信或支付宝对应用户id} uniondid
	 * @returns
	 */
	MerchantDetails: (company_id, uniondid) => {
		return Post(Connector.MerchantDetails, {
			company_id: company_id,
			uniondid: uniondid
		});
	},
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @returns
	 */
	AvailableRoomTypes: (company_id) => {
		return Post(Connector.AvailableRoomTypes, {
			company_id: company_id
		});
	},
	/**
	 *
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
	/**
	 *
	 * @param {品牌编号 number} parent_id
	 * @param {商家编号 number} company_id
	 * @param {会员ID} openid
	 * @param {分页索引 number} page
	 * @param {页数 number} page_size
	 * @returns
	 */
	// begindatetime || enddatetime
	MyAppointment: (parent_id, company_id, openid, page, page_size) => {
		return Post(Connector.MyAppointment, {
			parent_id: parent_id,
			company_id: company_id,
			openid: openid,
			page: page,
			page_size: page_size
		});
	},
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @param {包厢类型 number} roomsortid
	 * @param {预定方案 number} roomreservationid
	 * @param {计费类型 1买断 2计时} chargingtype
	 * @param {预定时间 yyyy-mm-dd} reservationdate
	 * @returns
	 */
	BookADrinkPlan: (company_id, roomsortid, roomreservationid, chargingtype, reservationdate) => {
		return Post(Connector.BookADrinkPlan, {
			company_id: company_id,
			roomsortid: roomsortid,
			roomreservationid: roomreservationid,
			chargingtype: chargingtype,
			reservationdate: reservationdate
		});
	},
	/**
	 *
	 * @param {会员openId} openid
	 * @param {商家编号 number} company_id
	 * @returns
	 */
	UserTiedCardList: (openid, company_id) => {
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
	},

	/**
	 *
	 * @param {*} company_id
	 * @param {房间id} rooid
	 * @param {订单编号} onlineorderno
	 * @returns []
	 */
	orderGgetDdetail: function (company_id, rooid, onlineorderno) {
		return Post(Connector.MaterialGroupInfo, {
			company_id: company_id,
			rooid: rooid,
			onlineorderno: onlineorderno
		});
	},
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @param {会员openId} openid
	 * @param {手机号码 number} telephone
	 * @param {会员名称 string} customername
	 * @param {等级id number} gradeid
	 * @param {性别 string 男/女} sex
	 * @param {生日 yyyy-mm-dd} birthdate
	 * @param {?} shareguid
	 * @returns
	 */
	MembershipCard: (company_id, openid, telephone, customername, gradeid, sex, birthdate, shareguid) => {
		return Post(Connector.MembershipCard, {
			company_id: company_id,
			openid: openid,
			telephone: telephone,
			customername: customername,
			gradeid: gradeid,
			sex: sex,
			birthdate: birthdate,
			shareguid: shareguid
		});
	},
	/**
	 *
	 * @param {商家编号 number} company_id
	 * @param {等级id number} gradeid
	 * @returns
	 */
	MemberSharingRewards: (company_id, gradeid) => {
		return Post(Connector.MemberSharingRewards, {
			company_id: company_id,
			gradeid: gradeid
		});
	}
};

export default HttpService;
