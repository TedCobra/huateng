<template>
	<div class="withDraw">
		<!-- 切换 -->
		<ul class="flex_row toggle-buttons">
			<li v-for="item of choices" :key="item.status" :class="{ active: choice === item.status }" @click="choice = item.status">
				{{ item.name }}
			</li>
		</ul>
		<div class="wine-list" ref="listScroll">
			<ul>
				<li class="flex_row" v-for="item of 10" :key="item">
					<div class="wine-details flex_row">
						<span class="circle"></span>

						<div class="pro-img">
							<img src="" alt="" />
						</div>
						<div class="pro-details">
							<p>苏打酒300ml</p>
							<div>
								<span>剩余数量：</span>
								<span>x1瓶</span>
							</div>
							<div>
								<span>有效期：</span>
								<span>2021-05-21</span>
							</div>
						</div>
					</div>
					<div class="flex_row comass-add-sub">
						<img src="../../assets/images/assess_cut.png" alt="" />
						<span class="num">100</span>
						<img src="../../assets/images/add_blue.png" alt="" />
					</div>
				</li>
			</ul>
		</div>
		<div class="confirm-button">
			<button>确定支取</button>
		</div>
	</div>
</template>
<script>
import BScroll from '@better-scroll/core';

export default {
	data() {
		return {
			choice: 0,
			choices: [
				{ name: '寄存', status: 0 },
				{ name: '赠送', status: 1 }
			]
		};
	},
	mounted() {
		this.initBscroll();
	},
	beforeDestroy() {},
	methods: {
		initBscroll() {
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true
			});
		}
	}
};
</script>

<style lang="scss">
@import '../../assets/styles/assess.scss';
</style>
