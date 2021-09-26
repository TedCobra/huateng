<template>
	<!-- 订单详情 -->

	<div class="order-commit-container order-detail-container">
		<div class="flex_col commit-table">
			<p>128号桌(九五至尊)</p>
			<p>立即送达</p>
		</div>
		<div class="commit-items">
			<ul>
				<li class="flex_row" v-for="item of 10" :key="item">
					<img src="" alt="" />
					<div class="flex_col item-detail">
						<div class="flex_row detail-header">
							<p>产品名称产品名称</p>
							<div class="item-price">
								<span>¥</span>
								<span>15</span>
							</div>
						</div>
						<p class="item-describe">描述介绍描述介绍描述</p>
						<p class="item-num">x1</p>
					</div>
				</li>
			</ul>
			<div class="flex_row show-more">
				<div v-if="!showMore" @click="toggleShowMore()">
					<span>展开更多</span>
					<img src="../../assets/images/show_more_down.png" alt="" />
				</div>
				<div v-if="showMore" @click="toggleShowMore()">
					<span>点击收起</span>
					<img src="../../assets/images/show_more_up.png" alt="" />
				</div>
			</div>
			<div class="flex_col commit-calculate">
				<div class="flex_row total-calculate-read">
					<span>小计</span>
					<span>¥</span>
					<span>544</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			showMore: false
		};
	},
	methods: {
		toggleShowMore() {
			this.showMore = !this.showMore;
			if (this.showMore) {
				//
			}
		}
	}
};
</script>
<style lang="scss">
@import '../../assets/styles/order.scss';
</style>
