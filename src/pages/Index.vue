<template>
	<div class="index">
		<!-- 轮播 -->
		<img class="banner" src="../assets/images/bar_cover.png" />

		<!-- main -->
		<div class="flex_col index_main">
			<!-- 导航 -->
			<ul class="flex_row text_center nav">
				<li v-for="item of nav" :key="item.sub" @click="jumpPage(item.routeName)">
					<img :src="require(`../assets/images/${item.sub}.png`)" />
					<h6>{{ item.name }}</h6>
					<p>{{ item.sub }}</p>
				</li>
			</ul>
			<!-- 点单 -->
			<div class="order" @click="jumpPage('order')">
				<img src="../assets/images/order_cover.png" />
				<div class="flex_row">
					<div class="flex_row">
						<img src="../assets/images/add_white.png" />
						<b>点单</b>
					</div>
				</div>
			</div>
			<!-- 领券中心 -->
			<div class="coupon">
				<div class="flex_row title">
					<h4>领劵中心</h4>
					<p @click="jumpPage('coupon')">
						More
						<img src="../assets/images/coupon_arrow.png" />
					</p>
				</div>
				<!-- 列表 -->
				<ListForCoupon :isScroll="false" :isNeedDetails="false" :dataArray="coupon" />
			</div>
		</div>

		<!-- 存取酒 -->
		<van-dialog v-model="isAccess" :show-confirm-button="false" :close-on-click-overlay="true">
			<ul class="flex_row access">
				<li v-for="item of access" :key="item.routeName" @click="jumpPage(item.routeName)">
					<h3>
						{{ item.label }}
						<img :src="require(`../assets/images/${item.img}.png`)" />
					</h3>
					<p>{{ item.describe }}</p>
				</li>
			</ul>
		</van-dialog>
	</div>
</template>

<script>
import ListForCoupon from '../components/ListForCoupon.vue';
// plugins
import { Dialog } from 'vant';
import HttpService from '../utils/http';

export default {
	components: {
		ListForCoupon,
		[Dialog.Component.name]: Dialog.Component
	},
	data() {
		return {
			nav: [
				{ name: '会员', sub: 'members', routeName: 'card' },
				{ name: '优惠券', sub: 'coupon', routeName: 'coupon' },
				{ name: '预约', sub: 'reservation', routeName: 'reserve' },
				{ name: '存取酒', sub: 'access' }
			],
			isAccess: false,
			access: [
				{
					label: '我要寄存',
					describe: '描述描述描述描述描述',
					img: 'access_deposit',
					routeName: 'accessDeposit'
				},
				{
					label: '我要取酒',
					describe: '描述描述描述描述描述',
					img: 'access_withdraw',
					routeName: 'accessWithdraw'
				}
			],
			coupon: [] // 优惠券列表
		};
	},
	mounted() {},
	created() {
		console.log('his.$store.state.companyId', this.$store.state.companyId);
		// 获取商家信息
		HttpService.MerchantDetails(this.$store.state.companyId, this.$store.state.uniondid).then((res) => {
			this.$store.commit('updateCompanyDetails', res.data);
		});
		HttpService.CouponList(5129, 31).then((res) => {
			this.coupon = res.data;
		});
	},
	methods: {
		jumpPage(routeName) {
			if (routeName) {
				this.$router.push({ name: routeName });
				return;
			}
			this.isAccess = !this.isAccess;
		}
	}
};
</script>
