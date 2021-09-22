<template>
	<div class="recharge">
		<div class="common_box small">
			<div>
				<p>充值金额</p>
				<ul>
					<li
						v-for="item of [1, 5, 10, 15, 20, 50]"
						:key="item"
						:class="{ active: item === selectPrice }"
						@click="selectPrice = item"
					>
						{{ item }}元
						<img v-show="item === selectPrice" src="../../assets/images/select_blue.png" />
					</li>
				</ul>
				<div>
					<input placeholder="请输入金额" v-model="price" />
					元
				</div>
			</div>

			<div>
				<p>赠送方案</p>
				<ul>
					<li class="active">送10%</li>
				</ul>
			</div>

			<button>确定</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectPrice: '',
			price: ''
		};
	}
};
</script>
