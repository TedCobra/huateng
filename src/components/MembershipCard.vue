<template>
	<div class="membership_card" @click="jumpPage">
		<!-- 背景图 -->
		<img :src="membershipCardDetails.imageurl ? membershipCardDetails.imageurl : require('../assets/images/card_gold.png')" />
		<!-- 会员详情 -->
		<div>
			<h4>{{ membershipCardDetails.gradename }}</h4>
			<p>members</p>
			<p>会员: {{ membershipCardDetails.cardnum }}</p>
			<p>有效期至: {{ membershipCardDetails.carduselimitdate }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		routeName: String,
		membershipCardDetails: Object
	},
	methods: {
		jumpPage() {
			this.$router.push({ name: this.routeName, params: { membershipCardDetails: this.membershipCardDetails } });
		}
	}
};
</script>
