import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membershipCardDetails: {}, // 会员卡详情
		companyId: '5129', // 商家id
		uniondid: '1231', // 微信或者支付宝id
		merchantDetails: {}, // 商家详情
		acesstoken: '', // token,
		openbarcheckoutid: '11724', // 桌号
		roomid: '47', // 包厢id
		shopDetail: {} // 购物车信息
	},
	mutations: {
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
