<template>
	<div id="app" :style="{ height: fixedHeight }">
		<Navigate />

		<!-- view -->
		<router-view />
	</div>
</template>

<script>
import Navigate from './components/Navgate.vue';
export default {
	components: {
		Navigate
	},
	data() {
		return {
			fixedHeight: '100%',
			routerNameConfig: ['coupon', 'accessDeposit', 'accessWithdraw', 'memberCoupon', 'memberReward']
		};
	},
	watch: {
		// 解决ios scroll-view滚动问题
		'$route.name'(routeName) {
			if (this.routerNameConfig.indexOf(routeName) > -1) {
				this.fixedBodyHeight();
				return;
			}
		}
	},
	created() {
		// 添加键盘监听
		window.addEventListener('focusin', this.fixedBodyHeight);
		window.addEventListener('focusout', this.reductionBodyHeight);
	},
	beforeDestroy() {
		// 移除键盘监听
		window.removeEventListener('focusin', this.fixedBodyHeight);
		window.removeEventListener('focusout', this.reductionBodyHeight);
	},
	methods: {
		fixedBodyHeight() {
			this.fixedHeight = `${document.documentElement.clientHeight || document.body.clientHeight}px`;
		},
		reductionBodyHeight() {
			if (this.routerNameConfig.indexOf(this.$route.name) === -1) {
				this.fixedHeight = '100%';
			}
		}
	}
};
</script>
