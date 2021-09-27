<template>
	<div class="card">
		<div class="flex_row store">
			<div @click="jumpPage('cardPhone')">
				华腾易达
				<div>当前门店</div>
			</div>
			<button>
				<img src="../assets/images/add_white.png" />
				立享优惠
			</button>
		</div>

		<!-- 列表 -->
		<MembershipCard v-for="item of 2" :routeName="'member'" :key="item" />
	</div>
</template>

<script>
import MembershipCard from '../components/MembershipCard.vue';
import HttpService from '../utils/http';

export default {
	components: {
		MembershipCard
	},
	created() {
		HttpService.UserTiedCardList().then((res) => {
			console.log(res);
		});
	},
	methods: {
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>
