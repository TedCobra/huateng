<template>
	<!-- 选择套餐 -->

	<div class="order-package-container">
		<van-popup v-model="show" position="bottom" :close-on-click-overlay="false" @click-overlay="close">
			<img src="../../assets/images/close_dialog.png" @click="close" class="close-img" />

			<div class="flex_row package-product">
				<img src="" alt="" />
				<div class="flex_col product-detail">
					<p>产品名称产品名称</p>
					<p>描述介绍描述介绍描述</p>
					<p>￥214</p>
				</div>
			</div>
			<div class="package-choose">
				<ul>
					<li>
						<div class="flex_row package-title">
							<span></span>
							<span>单位</span>
						</div>
						<div class="flex_row package-type">
							<button class="selectd">红牛</button>
							<button>维他柠檬茶</button>
							<button>脉动</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="package-add">
				<ul>
					<li class="flex_row" v-for="item of 3" :key="item">
						<p class="add-name">绿茶绿茶绿茶绿茶绿茶绿茶绿茶</p>
						<div class="flex_row add-num">
							<p>瓶</p>
							<div class="flex_row">
								<img src="../../assets/images/assess_cut.png" alt="" />
								<span class="num">26</span>
								<img src="../../assets/images/add_blue.png" alt="" />
							</div>
						</div>
					</li>
				</ul>
			</div>
			<button class="package-confirm confirm">选好了</button>
		</van-popup>
	</div>
</template>
<script>
export default {
	components: {},
	props: {
		show: {
			type: Boolean,
			default: () => {
				return false;
			}
		},
		showData: {
			type: Object,
			default: () => {
				return {};
			}
		}
	},
	methods: {
		close() {
			this.$emit('packageEvent');
		}
	}
};
</script>
<style scoped lang="scss">
</style>
