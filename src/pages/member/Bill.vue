<template>
	<div class="small bill">
		<!-- 列表 -->
		<ul class="list">
			<List v-model="isLoad" :finished="isFinished" finished-text="没有更多了" @load="requestData">
				<li v-for="(item, index) of dataArray" :key="index">
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
			</List>
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
// plugin
import { List } from 'vant';

export default {
	components: {
		List
	},
	data() {
		return {
			dataArray: [],
			isLoad: false,
			isFinished: false,
			selectIndex: null,
			currentPage: 1,
			pageSize: 10
		};
	},
	methods: {
		fold(index) {
			this.selectIndex = index === this.selectIndex ? null : index;
		},
		requestData() {
			if (this.isFinished) return;
			HttpService.BillingRecord(
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				this.$store.state.membershipCardDetails.company_id,
				this.$store.state.membershipCardDetails.id,
				this.currentPage,
				this.pageSize
			).then((res) => {
				this.dataArray = this.dataArray.concat(res.data);
				this.currentPage += 1;
				this.isLoad = false;
				if (res.data.length < this.pageSize) this.isFinished = true;
			});
		}
	}
};
</script>
