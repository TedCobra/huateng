<template>
	<div class="reward">
		<!-- invite -->
		<div class="invite">
			<img src="../../assets/images/reward_cover.png" />
			<div>
				<p>我的邀请（人）</p>
				<h2>{{ shareNumber }}</h2>
			</div>
		</div>
		<!-- choice -->
		<ul class="flex_row choice">
			<li v-for="item of choice" :key="item.type" :class="{ active: item.type === selectType }" @click="exchangeType(item.type)">
				{{ item.label }}
			</li>
		</ul>
		<!-- list_title -->
		<ul class="flex_row list_title">
			<li>好友</li>
			<li>来源</li>
			<li>卡等级</li>
			<li>建卡日期</li>
		</ul>
		<!-- list -->
		<div ref="listScroll" class="list">
			<ul>
				<li v-for="item of dataArray" :key="item" :class="{ active: item === selectBox }" @click="fold(item)">
					<div>
						<p>陈选择</p>
						<p>推荐返利</p>
						<p>金卡</p>
						<div>
							2021-04-21
							<img src="../../assets/images/arrow_grey.png" />
						</div>
					</div>
					<!-- 分割线 -->
					<div>
						<ul>
							<li>返利金额：50</li>
							<li>赠送物品：赠送物品x12、赠送物品x12、赠送物品x12、赠送物品x12、赠送物品x12</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import HttpService from '../../utils/http';
// plugins
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import Pulldown from '@better-scroll/pull-down';
// 注册插件
BScroll.use(Pullup);
BScroll.use(Pulldown);

export default {
	data() {
		return {
			shareNumber: 0, // 邀请人数
			dataArray: [], // 数据
			selectType: 1,
			choice: [
				{ label: '建卡', type: 1 },
				{ label: '充值', type: 2 }
			],
			selectBox: null,
			currentPage: 1,
			pageSize: 10,
			isCompleted: false // 是否加载完成
		};
	},
	created() {
		this.requestData();
	},
	mounted() {
		this.initBScroll();
	},
	beforeDestroy() {
		this.bs.destroy();
	},
	methods: {
		fold(index) {
			this.selectBox = index;
			this.bs.refresh();
		},
		initBScroll() {
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true,
				probeType: 1,
				pullDownRefresh: {
					threshold: 50,
					stop: 20
				},
				pullUpLoad: {
					threshold: 50
				}
			});
			this.bs.on('pullingDown', () => {
				console.log('pullDownToRefresh');
				this.exchangeType(this.selectType);
				this.bs.finishPullDown();
			});
			this.bs.on('pullingUp', () => {
				console.log('pullUpLoading');
				this.requestData();
				this.bs.finishPullUp();
			});
		},
		exchangeType(type) {
			this.isCompleted = false;
			this.selectType = type;
			this.currentPage = 1;
			this.dataArray = [];
			this.requestData();
		},
		requestData() {
			if (this.isCompleted) return;
			this.$toast.loading('加载中', { duration: 0 });
			HttpService.Reward(
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				this.$store.state.membershipCardDetails.company_id,
				this.$store.state.membershipCardDetails.id,
				this.selectType,
				this.currentPage,
				this.pageSize
			).then((res) => {
				this.currentPage++;
				this.shareNumber = res.share_num || 0;
				this.dataArray = this.dataArray.concat(res.data);
				this.bs.refresh();
				this.$toast.clear();
				if (res.data.length < this.pageSize) this.isCompleted = true;
			});
		}
	}
};
</script>
