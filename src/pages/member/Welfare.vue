<template>
	<div class="welfare">
		<!-- 标题 -->
		<h1>{{ commpanyName }}</h1>
		<h2>现金/积分/酒水领不停</h2>

		<!-- 分享规则 -->
		<div>
			<h2>分享规则</h2>
			<p>{{ myReward }}</p>
		</div>

		<!-- 分享按钮 -->
		<button>立即分享</button>
	</div>
</template>

<script>
import HttpService from '../../utils/http';
export default {
	data() {
		return {
			commpanyName: '',
			myReward: ''
		};
	},
	created() {
		HttpService.MemberSharingRewards(5129, this.$store.state.membershipCardDetails.gradeid).then((res) => {
			console.log(res);
			this.commpanyName = res.data.company_name;
			this.myReward = res.data.myreward;
		});
	}
};
</script>
