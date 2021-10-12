<template>
	<div class="member_coupons">
		<!-- 条件 -->
		<ul class="flex_row text_center condition">
			<li v-for="item of choices" :key="item.status" :class="{ active: choice === item.status }" @click="exchangeChoice(item.status)">
				{{ item.name }}
			</li>
		</ul>

		<!-- list -->
		<ListForCoupon :isScroll="true" :dataArray="couponList" @pullDownToRefresh="pullDownToRefresh" @pullUpLoading="pullUpLoading" />
	</div>
</template>

<script>
import ListForCoupon from '../../components/ListForCoupon.vue';
import HttpService from '../../utils/http';

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
				{ name: '已过期', status: 2 },
				{ name: '占用中', status: 3 },
				{ name: '已停用', status: 4 }
			],
			currentPage: 1, // 当前页码
			pageSize: 10, // 条数
			isCompleted: false, // 是否加载完成
			couponList: [] // 优惠券列表
		};
	},
	created() {
		this.requestData();
	},
	methods: {
		exchangeChoice(status) {
			this.isCompleted = false;
			this.choice = status;
			this.currentPage = 1;
			this.couponList = [];
			this.requestData();
		},
		requestData() {
			if (this.isCompleted) return;
			this.$toast.loading('加载中', { duration: 0 });
			HttpService.MemberCoupon(
				this.$store.state.membershipCardDetails.guestid,
				this.$store.state.merchantDetails.parent_id,
				this.$store.state.membershipCardDetails.company_id,
				[this.choice],
				this.currentPage,
				this.pageSize
			).then((res) => {
				this.currentPage++;
				this.couponList = this.couponList.concat(res.data);
				this.$toast.clear();
				if (res.data.length < this.pageSize) this.isCompleted = true;
			});
		},
		pullDownToRefresh() {
			this.exchangeChoice(this.choice);
		},
		pullUpLoading() {
			this.requestData();
		}
	}
};
</script>
