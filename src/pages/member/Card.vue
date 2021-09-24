<template>
	<div class="card">
		<ul class="flex_row nav">
			<li
				v-for="item of navigate"
				:key="item.routeName"
				:class="{ active: item.routeName === $route.name }"
				@click="switchPage(item.routeName)"
			>
				{{ item.label }}
			</li>
		</ul>

		<!-- 申请会员卡 / 绑定实体卡 -->
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			navigate: [
				{ label: '申请会员卡', routeName: 'MemberApplicationCard' },
				{ label: '绑定实体卡', routeName: 'MemberCardTied' }
			]
		};
	},
	methods: {
		switchPage(routeName) {
			if (routeName === this.$route.name) return;
			this.$router.replace({ name: routeName });
		}
	}
};
</script>
