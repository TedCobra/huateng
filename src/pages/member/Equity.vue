<template>
	<div class="equity">
		<div class="common_box small">
			<ul>
				<li v-for="item of nav" :key="item.icon" class="flex_row">
					<div :class="item.className">
						<img :src="require(`../../assets/images/${item.icon}.png`)" />
					</div>
					<div>
						<h5>{{ item.label }}</h5>
						<p>{{ item.sub }}</p>
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
			nav: [
				{
					label: '会员权益',
					sub: '享受会员权益，更多优惠请联系店内服务人员',
					icon: 'crown_black',
					className: 'orange'
				},
				{
					label: '客服电话',
					sub: this.$store.state.merchantDetails.company_phone,
					icon: 'tel_black',
					className: 'blue'
				},
				{
					label: '商家地址',
					sub: this.$store.state.merchantDetails.company_addr,
					icon: 'location_black',
					className: 'purple'
				}
			]
		};
	}
};
</script>
