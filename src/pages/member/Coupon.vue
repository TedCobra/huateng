<template>
	<div class="member_coupons">
		<!-- 条件 -->
		<ul class="flex_row text_center condition">
			<li v-for="item of choices" :key="item.status" :class="{ active: choice === item.status }" @click="exchangeChoice(item.status)">
				{{ item.name }}
			</li>
		</ul>

		<!-- list -->
		<List v-model="isLoad" :finised="isCompleted" @load="requestData">
			<ListForCoupon :isScroll="false" :dataArray="couponList" />
		</List>
	</div>
</template>

<script>
import ListForCoupon from '../../components/ListForCoupon.vue';
import HttpService from '../../utils/http';
// plugin
import { List } from 'vant';

export default {
	components: {
		ListForCoupon,
		List
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
			totalRow: 0, // 总条数
			isRequest: false, // 是否请求
			isLoad: false, // 是否开始加载
			isCompleted: false, // 是否加载完成
			couponList: [] // 优惠券列表
		};
	},
	methods: {
		exchangeChoice(status) {
			this.choice = status;
			this.currentPage = 1;
			this.isRequest = false;
			this.couponList = [];
			this.requestData();
		},
		requestData() {
			if ((!this.totalRow && !this.isRequest) || this.couponList.length < this.totalRow) {
				HttpService.MemberCoupon(
					this.$store.state.membershipCardDetails.guestid,
					this.$store.state.merchantDetails.parent_id,
					this.$store.state.membershipCardDetails.company_id,
					[this.choice],
					this.currentPage,
					this.pageSize
				).then((res) => {
					// 判断是否有请求
					if (!this.isRequest) this.isRequest = true;
					// 处理数据
					res.data.some((item) => {
						this.couponList.push(item);
					});
					this.totalRow = res.total || 0;
					this.currentPage += 1;
					// 加载状态结束
					this.isLoad = false;
					this.isCompleted = true;
				});
				return;
			}
			this.isLoad = false;
			this.isCompleted = true;
		}
	}
};
</script>
