<template>
	<div class="order-choosed-container">
		<van-popup v-model="show" position="bottom" :close-on-click-overlay="false" @click-overlay="close" />
	</div>
</template>
<script>
export default {
	components: {},
	props: {
		show: {
			type: Boolean,
			default: () => {
				return false;
			}
		},
		showData: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		close() {
			this.$emit('choosedEvent');
		}
	}
};
</script>