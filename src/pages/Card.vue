<template>
	<div class="card">
		<div class="flex_row store">
			<div @click="jumpPage('cardPhone')">
				{{ $store.state.merchantDetails.company_name }}
				<!-- <div>当前门店</div> -->
			</div>
			<button>
				<img src="../assets/images/add_white.png" />
				立享优惠
			</button>
		</div>

		<!-- 列表 -->
		<MembershipCard v-for="item of membershipCardList" :key="item.id" :membershipCardDetails="item" :routeName="'member'" />

		<!-- footer -->
		<Tabbar />
	</div>
</template>

<script>
import MembershipCard from '../components/MembershipCard.vue';
import Tabbar from '../components/Tabbar.vue';
import HttpService from '../utils/http';

export default {
	components: {
		MembershipCard,
		Tabbar
	},
	data() {
		return {
			membershipCardList: [] // 会员卡列表
		};
	},
	created() {
		HttpService.UserTiedCardList('oqqkJ42kASZQAWWE3nbJuYk6wYp8', 5129).then((res) => {
			this.membershipCardList = res.data;
		});
	},
	methods: {
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>
