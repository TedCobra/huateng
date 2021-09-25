<template>
	<div class="order-coupon-container">
		<van-popup v-model="show" position="bottom" :close-on-click-overlay="false" @click-overlay="close">
			<ListForCoupon :isScroll="true" :dataArray="[1, 2, 3, 4, 5]" />
		</van-popup>
	</div>
</template>
<script>
import ListForCoupon from '../../components/ListForCoupon.vue';
export default {
	components: { ListForCoupon },
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
			this.$emit('couponEvent');
		}
	}
};
</script>