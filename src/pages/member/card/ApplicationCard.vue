<template>
	<div class="small application_card">
		<p class="title">会员卡</p>
		<ul>
			<li v-for="item of cardList" :key="item.id" class="flex_row" @click="selectCard = item.id">
				<div :class="{ active: selectCard === item.id }">
					<img src="../../../assets/images/right_white.png" />
				</div>
				<div>
					<div class="flex_row membership_card">
						<div class="flex_row">
							<div></div>
							<h3>{{ item.gradename }}</h3>
						</div>
						<p>{{ item.makecardfee ? `¥${item.makecardfee}` : '免费' }}</p>
					</div>

					<ul class="flex_row top_up">
						<li v-for="sale of item.memberfullpresentrule" :key="sale.fullpresentid">
							{{ sale.fullpresentname }}
						</li>
					</ul>

					<div class="flex_row sale">
						<div>
							<img src="../../../assets/images/sale_pink.png" />
							享受会员享受会员享受会员享受会员
						</div>
						<button class="flex_row" @click.stop="checkCardDetails">
							详情
							<img src="../../../assets/images/arrow_blue.png" />
						</button>
					</div>
				</div>
			</li>
		</ul>
		<button @click="jumpPage('memberBuildCard')">确定</button>
	</div>
</template>

<script>
import HttpService from '../../../utils/http.js';

export default {
	data() {
		return {
			selectCard: null, // 选中卡片类型
			cardList: [] // 会员卡列表
		};
	},
	created() {
		HttpService.MembershipCardOptions(5129, 2).then((res) => {
			console.log(res);
			this.cardList = res.data;
		});
	},
	methods: {
		checkCardDetails() {
			console.log('methods: checkCardDetails');
		},
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>
