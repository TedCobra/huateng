import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		membershipCardDetails: {} // 会员卡详情
	},
	mutations: {
		// 更新会员卡详情
		updateMembershipCardDetails(state, membershipCardDetails) {
			state.membershipCardDetails = membershipCardDetails;
		}
	},
	actions: {},
	modules: {}
});
