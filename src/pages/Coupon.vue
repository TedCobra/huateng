<template>
	<div class="coupons">
		<!-- 列表 -->
		<ListForCoupon :isScroll="false" :dataArray="coupon" />

		<!-- footer -->
		<tabbar />
	</div>
</template>

<script>
import ListForCoupon from '../components/ListForCoupon.vue';
import Tabbar from '../components/Tabbar.vue';

// http
import HttpService from '../utils/http';

export default {
	components: {
		ListForCoupon,
		Tabbar
	},
	data() {
		return {
			coupon: []
		};
	},
	created() {
		// 商家ID，活动ID
		HttpService.CouponList(this.$store.state.membershipCardDetails.company_id, 31).then((res) => {
			this.coupon = res.data;
		});
	}
};
</script>
