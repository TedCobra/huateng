<template>
	<!-- 已选商品页 -->
	<div class="order-choosed-container">
		<van-popup v-model="show" position="bottom" :close-on-click-overlay="false" @click-overlay="close">
			<div class="choose-list">
				<ul>
					<li class="flex_row" v-for="item of 6" :key="item">
						<div class="flex_row choose-pro">
							<img src="../../assets/images/pro_img_default.png" alt="" />
							<div class="flex_col pro-detail">
								<p>产品名称产品名称</p>
								<p>描述介绍描述介绍描述</p>
								<p><span>¥</span>15</p>
							</div>
						</div>
						<div class="flex_col choose-opt">
							<div class="flex_row">
								<img src="../../assets/images/assess_cut.png" alt="" />
								<span class="num">26</span>
								<img src="../../assets/images/add_blue.png" alt="" />
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="flex_row order-settle-button">
				<div class="flex_row settle-detail">
					<div class="cart">
						<img src="../../assets/images/order_bill.png" />
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
		</van-popup>
	</div>
</template>
<script>
import HttpService from '../../utils/http';

export default {
	components: {},
	props: {
		show: {
			type: Boolean,
			default: () => {
				return false;
			}
		},
		showData: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	data() {
		return {
			shopList: [], // 购物车列表
			shopDetail: {} // 返回的数据
		};
	},
	created() {
		this.shopDetail = this.$store.state.shopDetail;
		this.shopList = this.$store.state.orderlist;
	},
	methods: {
		close() {
			this.$emit('choosedEvent');
		},

		// 添加
		add(item) {
			let orderlist = [];
			orderlist.push(item);
			HttpService.Addtocart(
				this.$store.state.companyId,
				this.$store.state.uniondid,
				this.$store.state.membershipCardDetails.id,
				this.$store.state.roomid,
				orderlist
			).then((res) => {
				res && this.$$emit('updateShopDetail');
			});
		},
		// 删除
		del(item) {
			HttpService.Addtocart(
				this.$store.state.companyId,
				this.$store.state.membershipCardDetails.id,
				this.$store.state.roomid,
				item.materialid,
				item.materialunitid,
				-1
			).then((res) => {
				res && this.$$emit('updateShopDetail');
			});
		}
	}
};
</script>
