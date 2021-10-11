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
							<div>
								<img :src="item.imageurl" />
							</div>
							<h3>{{ item.gradename }}</h3>
						</div>
						<p>{{ item.makecardfee ? `¥${item.makecardfee}` : '免费' }}</p>
					</div>

					<ul class="flex_row top_up">
						<li v-for="sale of item.memberfullpresentrule" :key="sale.fullpresentid">
							{{ sale.fullpresentname }}
						</li>
					</ul>

					<div v-show="item.share.sellcardrulename && item.share.presentwinemoney" class="flex_row sale">
						<div>
							<img src="../../../assets/images/sale_pink.png" />
							{{ item.share.sellcardrulename }} {{ item.share.presentwinemoney }}
						</div>
						<button class="flex_row" @click.stop="checkCardDetails(item.gradename, item.remark)">
							详情
							<img src="../../../assets/images/arrow_blue.png" />
						</button>
					</div>
				</div>
			</li>
		</ul>

		<button @click="confirmCard">确定</button>

		<!-- 弹出层 -->
		<van-dialog v-model="isDetails" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="card_details">
				<h3>{{ gradeName }}</h3>
				<p>{{ cardDetails }}</p>
			</div>
		</van-dialog>
	</div>
</template>

<script>
import { Dialog } from 'vant';
import HttpService from '../../../utils/http.js';

export default {
	components: {
		[Dialog.Component.name]: Dialog.Component
	},
	data() {
		return {
			selectCard: null, // 选中卡片类型
			cardList: [], // 会员卡列表
			isDetails: false, // 详情开关
			gradeName: '', // 会员卡名称
			cardDetails: '' // 会员卡详情
		};
	},
	created() {
		HttpService.MembershipCardOptions(5129, 2).then((res) => {
			console.log(res);
			this.cardList = res.data;
		});
	},
	methods: {
		checkCardDetails(gradeName, cardDetails) {
			this.gradeName = gradeName;
			this.cardDetails = cardDetails;
			this.isDetails = !this.isDetails;
		},
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		},
		confirmCard() {
			if (!this.selectCard) return this.$toast.fail('请选择会员卡类型');
			this.jumpPage('memberBuildCard');
		}
	}
};
</script>
