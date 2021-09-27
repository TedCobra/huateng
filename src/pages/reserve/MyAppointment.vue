<template>
	<div class="my_appointment">
		<ul>
			<li v-for="item of 3" :key="item">
				<div class="flex_row">
					<p>订单号:1784141214120144801448</p>
					<p>已关闭</p>
				</div>
				<div class="flex_row">
					<div></div>
					<div>
						<h5>产品名称产品名称</h5>
						<p>9月22日(周三) 20:30 6人 中卡座</p>
						<div class="flex_row">
							<p>预订时间：2021-05-21 14:24</p>
							<b>￥100元</b>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
