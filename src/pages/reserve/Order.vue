<template>
	<div class="reserve_order">
		<div class="common_box small details">
			<div class="flex_row">
				<h3>九五至尊</h3>
				<h3>￥100</h3>
			</div>
			<p>中卡座(6-10人) 周一 09-01 20:30-04:30</p>
		</div>

		<div class="common_box small">
			<ul>
				<li></li>
			</ul>
		</div>
		<div class="common_box small edit_details">
			<ul>
				<li>
					<label for="">手机号码</label>
					<input placeholder="您的手机号码" />
				</li>
				<li>
					<label for="">到店人数</label>
					<input placeholder="大约到店的人数" />
				</li>
				<li>
					<label for="">到店时间</label>
					<input placeholder="2021-09-13 20:30" />
				</li>
				<li>
					<label for="">备注</label>
					<input placeholder="您还有什么其它要求" />
				</li>
			</ul>
		</div>

		<!-- 提交订单 -->
		<div class="flex_row confirm">
			<p>¥ <b>544</b></p>
			<div class="flex_row">
				<div>
					明细
					<img src="../../assets/images/arrow_white.png" />
				</div>
				<button>提交订单</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
