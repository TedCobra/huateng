<template>
	<div class="common-assess depositRecord">
		<div class="common-list">
			<ul>
				<li class="flex_col common-item" v-for="item of 10" :key="item">
					<div class="flex_row order-num">
						<span>酒水寄存</span>
						<span>订单号:1784141214120144801448</span>
					</div>
					<div class="flex_row pro-info">
						<img class="pro-img" src="" />
						<div class="pro-details">
							<p>产品名称产品名称</p>
							<div>
								<span>寄存数量：</span>
								<span>x1瓶</span>
							</div>
							<div>
								<span>寄存时间：</span>
								<span>2021-05-21 14:24</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
@import '../../assets/styles/assess.scss';
</style>
