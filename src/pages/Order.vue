<template>
	<div class="order-container">
		<div class="flex_col order-top">
			<div class="flex_row shop-name">
				<p>店名店名店名店名店名店名</p>
				<img src="../assets/images/order_vector.png" alt="" />
			</div>
			<p class="shop-notice">公告：欢迎光临XXXX，感谢新老客户长久以来对本店支持对本店支持对本店支持</p>
			<div class="flex_row table-num" @click="$router.push({ name: 'orderDetail' })">
				<button>台号：128</button>
				<button>查看账单</button>
			</div>
		</div>
		<div class="flex_row order-search">
			<input type="text" placeholder="搜索" />
			<img src="../assets/images/order_search.png" alt="" />
		</div>
		<div class="flex_row order-windes">
			<div class="hot-types">
				<ul>
					<li class="flex_row hot-title">
						<img src="" alt="" />
						<p>热门酒水</p>
					</li>
					<li class="flex_row types" v-for="item of 10" :key="item">分类名字在</li>
				</ul>
			</div>
			<div class="hot-items">
				<ul>
					<li class="flex_row item-content" v-for="item of 10" :key="item">
						<img class="item-img" src="" alt="" />
						<div class="flex_col item-detail">
							<p>产品名称产品名称产品</p>
							<p>描述介绍描述介绍描述介绍</p>
							<p>月售418</p>
							<div class="flex_row item-opt">
								<div class="item-price">
									<span>￥</span>
									<span>10145.6</span>
								</div>

								<div class="flex_row item-add-sub">
									<img src="../assets/images/assess_cut.png" alt="" />
									<span class="num">26</span>
									<img src="../assets/images/add_blue.png" alt="" />
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex_row order-settle-button">
			<div class="flex_row settle-detail">
				<div class="cart">
					<img src="../assets/images/order_bill.png" alt="" @click="isShowChoosed = !isShowChoosed" />
					<div class="num">
						<span>{{ showData.num }}</span>
					</div>
				</div>
				<div class="flex_row total">
					<p>¥</p>
					<p>{{ showData.price }}</p>
				</div>
			</div>
			<button @click="$router.push({ name: 'orderCommit' })">去结算</button>
		</div>
		<OrderChoosed :show="isShowChoosed" @choosedEvent="choosedEvent"></OrderChoosed>
	</div>
</template>
<script>
import OrderChoosed from './order/OrderChoosed.vue';

export default {
	components: { OrderChoosed },
	data() {
		return {
			isShowChoosed: false,
			showData: {
				price: 899,
				num: 9
			}
		};
	},
	methods: {
		choosedEvent() {
			this.isShowChoosed = false;
		}
	}
};
</script>

<style lang="scss">
@import '../assets/styles/order.scss';
</style>
