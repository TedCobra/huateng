<template>
	<div class="material">
		<div class="common_box small">
			<ul>
				<li class="flex_row">
					<p>姓名</p>
					<p>{{ this.$store.state.membershipCardDetails.customername }}</p>
				</li>
				<li class="flex_row">
					<p>性别</p>
					<p>{{ this.$store.state.membershipCardDetails.sex }}</p>
				</li>
				<li class="flex_row">
					<p>生日</p>
					<p>{{ this.$store.state.membershipCardDetails.birthdate }}</p>
				</li>
				<li class="flex_row">
					<p>手机</p>
					<p>{{ this.$store.state.membershipCardDetails.telephone }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
