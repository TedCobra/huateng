<template>
	<div class="coupons">
		<!-- 列表 -->
		<ListForCoupon :isScroll="false" :dataArray="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />

		<!-- footer -->
		<tabbar />
	</div>
</template>

<script>
import ListForCoupon from '../components/ListForCoupon.vue';
import Tabbar from '../components/Tabbar.vue';

export default {
	components: {
		ListForCoupon,
		Tabbar
	}
};
</script>
