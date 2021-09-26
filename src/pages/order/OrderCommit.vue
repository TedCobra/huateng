<template>
	<!-- 订单提交页 -->

	<div class="order-commit-container">
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
				<div class="flex_row coupon-type" @click="choosedCoupon">
					<div class="flex_row">
						<img src="../../assets/images/coupon_small.png" alt="" />
						<p>优惠券</p>
					</div>
					<div class="flex_row choose-coupon">
						<p>已选(10元现金劵)</p>
						<img src="../../assets/images/arrow_grey.png" alt="" />
					</div>
				</div>
				<div class="flex_row total-calculate">
					<span>小计</span>
					<span>¥</span>
					<span>544</span>
				</div>
			</div>
		</div>
		<div class="flex_row order-settle-button">
			<div class="flex_row settle-detail">
				<div class="cart">
					<img src="../../assets/images/order_bill.png" alt="" @click="isShowChoosed = !isShowChoosed" />
					<div class="num">
						<span>{{ showData.num }}</span>
					</div>
				</div>
				<div class="flex_row total">
					<p>¥</p>
					<p>{{ showData.price }}</p>
				</div>
			</div>
			<button @click="isShowPay = !isShowPay">结算</button>
		</div>
		<OrderPay :show="isShowPay" :showData="payData" @payEvent="closePoup"></OrderPay>
		<OrderCoupon :show="isShowCoupon" :showData="payData" @couponEvent="couponEvent"></OrderCoupon>
		<OrderChoosed :show="isShowChoosed" :showData="payData" @choosedEvent="choosedEvent"></OrderChoosed>
	</div>
</template>
<script>
import BScroll from '@better-scroll/core';
import OrderPay from './OrderPay.vue';
import OrderCoupon from './OrderCoupon.vue';
import OrderChoosed from './OrderChoosed.vue';
export default {
	components: {
		OrderPay,
		OrderCoupon,
		OrderChoosed
	},
	data() {
		return {
			showMore: false,
			isShowPay: false,
			isShowCoupon: false,
			isShowChoosed: false,
			showData: {
				price: 7788,
				num: 6
			},
			payData: {
				price: 998
			}
		};
	},
	mounted() {
		// this.initBscroll();
	},
	methods: {
		initBscroll() {
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true
			});
		},
		toggleShowMore() {
			this.showMore = !this.showMore;
			if (this.showMore) {
				//
			}
		},
		commit() {
			this.isShowPay = true;
		},
		closePoup() {
			this.isShowPay = false;
		},
		couponEvent() {
			this.isShowCoupon = false;
		},
		choosedCoupon() {
			this.isShowCoupon = true;
		},
		choosedEvent() {
			this.isShowChoosed = false;
		}
	}
};
</script>
<style lang="scss">
@import '../../assets/styles/order.scss';
</style>
