<template>
	<div class="application_card small">
		<p class="title">会员卡</p>
		<ul>
			<li v-for="item of 2" :key="item" class="flex_row">
				<div>
					<img src="../../../assets/images/right_white.png" />
				</div>
				<div>
					<div class="flex_row membership_card">
						<div class="flex_row">
							<div></div>
							<h3>会员卡</h3>
						</div>
						<p>免费</p>
					</div>
					<ul class="flex_row top_up">
						<li>0元购卡</li>
						<li>充值100000送100000</li>
						<li>充值100000送100000</li>
					</ul>
					<div class="flex_row sale">
						<div>
							<img src="../../../assets/images/sale_pink.png" />
							享受会员享受会员享受会员享受会员
						</div>
						<button class="flex_row">
							详情
							<img src="../../../assets/images/arrow_blue.png" />
						</button>
					</div>
				</div>
			</li>
		</ul>
		<button @click="jumpPage('memberBuildCard')">确定</button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>
