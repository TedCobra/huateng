<template>
	<!-- 选择会员卡页 -->
	<div class="order-cards-container">
		<van-popup v-model="show" position="bottom" :close-on-click-overlay="false" @click-overlay="close">
			<div class="cards-title">
				<p>选择会员卡</p>
				<img src="../../assets/images/close_dialog.png" @click="close" />
			</div>
			<ul class="flex_col">
				<li>
					<img src="../../assets/images/mem_card_silver.png" class="cards-bg" />
					<div class="cards-content">
						<div class="flex_row cards-common">
							<div class="flex_col common-info card-silver">
								<div class="cards-name">
									<p>铂金会员卡</p>
									<p>MEMBERS</p>
								</div>
								<div class="cards-num">
									<p>会员:0012147454114</p>
									<p>有效期至:2050-12-31</p>
								</div>
							</div>
							<div class="flex_col qr-code">
								<img src="../../assets/images/qr_code_silver.png" />
							</div>
						</div>
					</div>
				</li>
				<li>
					<img src="../../assets/images/mem_card_golden.png" class="cards-bg" />
					<div class="cards-content">
						<div class="flex_row cards-common">
							<div class="flex_col common-info card-gold">
								<div class="cards-name">
									<p>铂金会员卡</p>
									<p>MEMBERS</p>
								</div>
								<div class="cards-num">
									<p>会员:0012147454114</p>
									<p>有效期至:2050-12-31</p>
								</div>
							</div>
							<div class="flex_col qr-code">
								<img src="../../assets/images/qr_code_gold.png" />
							</div>
						</div>
					</div>
				</li>
			</ul>
		</van-popup>
	</div>
</template>
<script>
export default {
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
			this.$emit('cardsEvent');
		}
	}
};
</script>
