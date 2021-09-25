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
			fixedHeight: '100%'
		};
	},
	watch: {
		// 解决ios scroll-view滚动问题
		'$route.name'(routeName) {
			switch (routeName) {
				case 'memberReward':
				case 'memberCoupon':
					this.fixedHeight = `${document.documentElement.clientHeight || document.body.clientHeight}px`;
					break;
				default:
					this.fixedHeight = '100%';
					break;
			}
		}
	}
};
</script>
