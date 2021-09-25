<template>
	<div class="member_coupons">
		<!-- 条件 -->
		<ul class="flex_row text_center condition">
			<li v-for="item of choices" :key="item.status" :class="{ active: choice === item.status }" @click="choice = item.status">
				{{ item.name }}
			</li>
		</ul>

		<!-- list -->
		<ListForCoupon :isScroll="true" :dataArray="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
	</div>
</template>

<script>
import ListForCoupon from '../../components/ListForCoupon.vue';

export default {
	components: {
		ListForCoupon
	},
	data() {
		return {
			choice: 0,
			choices: [
				{ name: '未使用', status: 0 },
				{ name: '已使用', status: 1 },
				{ name: '已过期', status: 2 }
			]
		};
	}
};
</script>
