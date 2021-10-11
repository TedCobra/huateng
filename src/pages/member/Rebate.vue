<template>
	<div class="common_box small rebate">
		<div>
			<img :src="$store.state.membershipCardDetails.custom_wxpic" />
		</div>

		<p>具体规则到店联系商家</p>
		<p>
			联系电话 <b>{{ $store.state.membershipCardDetails.custom_service_phone }}</b>
		</p>
		<p>或者扫描上方二维码添加商家客服</p>
	</div>
</template>
