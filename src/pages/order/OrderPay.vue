<template>
	<div class="order-pay-container">
		<van-popup v-model="show" :close-on-click-overlay="false">
			<div class="pay-content">
				<div class="pay-price">
					支付金额（ <span>¥{{ showData.price }}</span> ）
				</div>
				<div class="pay-ways">微信支付/支付宝支付</div>
				<div class="pay-card">会员卡（邱大强2050-12-30）</div>
			</div>
			<img src="../../assets/images/close_poup.png" alt="" @click="close" />
		</van-popup>
	</div>
</template>
<script>
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
	methods: {
		close() {
			this.$emit('payEvent');
		}
	}
};
</script>
