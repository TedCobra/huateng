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
			routerNameConfig: ['coupon', 'accessDeposit', 'accessWithdraw']
		};
	},
	watch: {
		// 解决ios scroll-view滚动问题
		'$route.name'(routeName) {
			if (this.routerNameConfig.indexOf(routeName) > -1) {
				this.fixedHeight = `${document.documentElement.clientHeight || document.body.clientHeight}px`;
				return;
			}
			this.fixedHeight = '100%';
		}
	}
};
</script>
