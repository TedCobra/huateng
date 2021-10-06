import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membershipCardDetails: {}, // 会员卡详情
		merchantDetails: {} // 商家详情
	},
	mutations: {
		// 更新会员卡详情
		updateMembershipCardDetails(state, membershipCardDetails) {
			state.membershipCardDetails = membershipCardDetails;
		},
		// 更新商家详情
		updateMerchantDetails(state, merchantDetails) {
			state.merchantDetails = merchantDetails;
		}
	},
	actions: {},
	modules: {}
});
