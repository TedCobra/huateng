import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		uniondid: '1231', // 微信或者支付宝id
		openbarcheckoutid: '11724', // 桌号
		roomid: '47', // 包厢id
		guestId: '', // 会员标识
		membershipCardDetails: {}, // 会员卡详情
		merchantDetails: {}, // 商家详情
		acesstoken: '', // token,
		shopDetail: {} // 购物车信息
	},
	mutations: {
		// 更新会员guestId
		updateMemberGuestId(state, guestId) {
			state.guestId = guestId;
		},
		// 更新会员卡详情
		updateMembershipCardDetails(state, membershipCardDetails) {
			state.membershipCardDetails = membershipCardDetails;
		},
		// 更新当前门店信息
		updateCompanyDetails(state, companyDetails) {
			state.companyDetails = companyDetails;
		},
		// 更新商家详情
		updateMerchantDetails(state, merchantDetails) {
			state.merchantDetails = merchantDetails;
		},
		// 更新购物车信息
		updateShopList(state, shopDetail) {
			state.shopDetail = shopDetail;
		}
	},
	actions: {},
	modules: {}
});
