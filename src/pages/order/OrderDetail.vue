<template>
	<!-- 订单详情 -->

	<div class="order-commit-container order-detail-container">
		<div class="flex_col commit-table">
			<p>128号桌(九五至尊)</p>
			<p>立即送达</p>
		</div>
		<div class="commit-items">
			<ul>
				<li class="flex_row" v-for="(index, item) in oderList" :key="item.onlineorderno">
					<img src="" alt="" />
					<div class="flex_col item-detail">
						<div class="flex_row detail-header">
							<p>{{ item.materialname }}</p>
							<div class="item-price">
								<span>¥</span>
								<span>{{}}</span>
							</div>
						</div>
						<p class="item-describe">描述介绍描述介绍描述</p>
						<p class="item-num">x{{ item.ordernumber }}</p>
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
					<span>{{ item.chargetotal }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import HttpService from '../../utils/http';

export default {
	data() {
		return {
			showMore: false,
			oderList: {},
			showNum: 3 // 基础显示数量
		};
	},
	props: {
		searchParams: Object,
		default: () => {
			return {};
		}
	},
	created() {
		HttpService.orderGgetDdetail(5129, this.searchParams.searchParams.rooid, this.searchParams.onlineorderno).then((res) => {
			this.oderList = res;
		});
	},
	methods: {
		toggleShowMore() {
			this.showMore = !this.showMore;
			if (this.showMore) {
				//
				this.showNum = this.oderList.length;
			} else {
				this.showNum = 3;
			}
		}
	}
};
</script>
<style lang="scss">
@import '../../assets/styles/order.scss';
</style>
