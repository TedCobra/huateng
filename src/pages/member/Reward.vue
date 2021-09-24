<template>
	<div class="reward">
		<!-- invite -->
		<div class="invite">
			<img src="../../assets/images/reward_cover.png" />
			<div>
				<p>我的邀请（人）</p>
				<h2>5</h2>
			</div>
		</div>
		<!-- choice -->
		<ul class="flex_row choice">
			<li v-for="item of choice" :key="item.type" :class="{ active: item.type === selectType }">{{ item.label }}</li>
		</ul>
		<!-- list_title -->
		<ul class="flex_row list_title">
			<li>好友</li>
			<li>来源</li>
			<li>卡等级</li>
			<li>建卡日期</li>
		</ul>
		<!-- list -->
		<div class="list">
			<ul>
				<li v-for="item of 10" :key="item" :class="{ active: item === selectBox }" @click="selectBox = item">
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
export default {
	data() {
		return {
			selectType: 0,
			choice: [
				{ label: '分享返利', type: 0 },
				{ label: '充值返利', type: 1 },
				{ label: '消费返利', type: 2 }
			],
			selectBox: null
		};
	}
};
</script>
