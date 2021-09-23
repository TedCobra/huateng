<template>
	<div class="small bill">
		<!-- 列表 -->
		<ul class="list">
			<li v-for="item of 2" :key="item">
				<!-- 显示内容 -->
				<div class="flex_row">
					<div class="flex_row">
						<div class="blue">
							<img src="../../assets/images/price_white.png" />
						</div>
						<div>
							<h4>消费 金卡</h4>
							<p>2021-08-21 17:24:14</p>
						</div>
					</div>
					<div @click="seleteData = item">
						-100
						<img :class="{ active: seleteData === item }" src="../../assets/images/arrow_grey.png" />
					</div>
				</div>
				<!-- 展开内容 -->
				<ul :class="{ active: seleteData === item }">
					<li>订单类型：消费</li>
					<li>订单编号：V-XF201111111120</li>
					<li>订单名称：消费 金卡</li>
					<li>本金金额：0.00</li>
					<li>赠送金额：-100.00</li>
				</ul>
			</li>
		</ul>

		<!-- 无数据 -->
		<div v-show="array.length" class="no_more">
			<img src="../../assets/images/bill_no_more.png" />
			<p>空空如也</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			array: [],
			seleteData: null
		};
	}
};
</script>
