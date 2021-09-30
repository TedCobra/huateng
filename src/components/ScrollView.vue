<template>
	<div ref="scrollView" :class="className">
		<ul>
			<li v-for="(item, index) of dataArray" :key="index"></li>
		</ul>
	</div>
</template>

<script>
// plugins
import BScroll from '@better-scroll/core';

export default {
	props: {
		className: String, // class样式
		dataArray: Array, // 数据
		// 横向滚动
		scrollX: {
			type: Boolean,
			default: false
		},
		// 竖向滚动
		scrollY: {
			type: Boolean,
			default: true
		},
		// 点击事件
		click: {
			type: Boolean,
			default: true
		}
	},
	mounted() {
		this.initBscroll();
	},
	beforeDestroy() {
		if (this.bs) this.bs.destroy();
	},
	methods: {
		initBscroll() {
			this.bs = new BScroll(this.$refs.scrollView, {
				scrollX: this.scrollX,
				scrollY: this.scrollY,
				click: this.click
			});
		}
	}
};
</script>
