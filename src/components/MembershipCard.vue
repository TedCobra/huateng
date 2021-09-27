<template>
	<div class="membership_card" @click="jumpPage">
		<img src="../assets/images/card_gold.png" />
		<div>
			<h4>普通会员卡</h4>
			<p>members</p>
			<p>会员:0012147454114</p>
			<p>有效期至:2050-12-31</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		routeName: String
	},
	methods: {
		jumpPage() {
			this.$router.push({ name: this.routeName });
		}
	}
};
</script>
