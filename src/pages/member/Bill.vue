<template>
	<div class="small bill">
		<!-- 列表 -->
		<ul class="list">
			<li v-for="(item, index) of dataArray" :key="item.changevoucher">
				<!-- 显示内容 -->
				<div class="flex_row">
					<div class="flex_row">
						<div class="blue">
							<img src="../../assets/images/price_white.png" />
						</div>
						<div>
							<h4>{{ item.title }}</h4>
							<p>{{ item.time }}</p>
						</div>
					</div>
					<div @click="fold(index)">
						{{ item.bjje }}
						<img :class="{ active: selectIndex === index }" src="../../assets/images/arrow_grey.png" />
					</div>
				</div>
				<!-- 展开内容 -->
				<ul :class="{ active: selectIndex === index }">
					<li v-for="(consume, consumeIndex) of item.detail" :key="consumeIndex">
						{{ consume }}
					</li>
				</ul>
			</li>
		</ul>

		<!-- 无数据 -->
		<div v-show="!dataArray.length" class="no_more">
			<img src="../../assets/images/bill_no_more.png" />
			<p>空空如也</p>
		</div>
	</div>
</template>

<script>
import HttpService from '../../utils/http';

export default {
	data() {
		return {
			dataArray: [],
			selectIndex: null,
			currentPage: 1,
			pageSize: 10
		};
	},
	created() {
		this.requestData();
	},
	methods: {
		fold(index) {
			this.selectIndex = index === this.selectIndex ? null : index;
		},
		requestData() {
			this.$toast.loading('加载中', { duration: 0 });
			HttpService.BillingRecord(
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				this.$store.state.membershipCardDetails.company_id,
				this.$store.state.membershipCardDetails.id,
				this.currentPage,
				this.pageSize
			).then((res) => {
				this.dataArray = this.dataArray.concat(res.data);
				this.$toast.clear();
			});
		}
	}
};
</script>
