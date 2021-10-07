import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membershipCardDetails: {}, // 会员卡详情
		companyId: '5129', // 商家id
		uniondid: '1231', // 用户id
		companyDetails: {} // 商家信息
	},
	mutations: {
		// 更新会员卡详情
		updateMembershipCardDetails(state, membershipCardDetails) {
			state.membershipCardDetails = membershipCardDetails;
		},
		// 更新当前门店信息
		updateCompanyDetails(state, companyDetails) {
			state.companyDetails = companyDetails;
		}
	},
	actions: {},
	modules: {}
});
