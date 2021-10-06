<template>
	<div class="material">
		<div class="common_box small">
			<ul>
				<li class="flex_row">
					<p>姓名</p>
					<p>吴彦祖</p>
				</li>
				<li class="flex_row">
					<p>性别</p>
					<p>男</p>
				</li>
				<li class="flex_row">
					<p>生日</p>
					<p>1997-02-14</p>
				</li>
				<li class="flex_row">
					<p>手机</p>
					<p>15511229988</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import HttpService from '../../utils/http';

export default {
	created() {
		HttpService.MembershipCardDetails(
			this.$store.state.membershipCardDetails.company_id,
			this.$store.state.membershipCardDetails.id,
			'oqqkJ42kASZQAWWE3nbJuYk6wYp8'
		).then((res) => {
			console.log(res.data);
		});
	}
};
</script>
