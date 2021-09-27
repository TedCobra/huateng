<template>
	<div class="coupon_details">
		<div class="common_box small">
			<h4>使用规则({{ title }})</h4>
			<p>
				{{ details }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			details: ''
		};
	},
	created() {
		this.title = this.$route.params.title;
		this.details = this.$route.params.details;
	}
};
</script>
