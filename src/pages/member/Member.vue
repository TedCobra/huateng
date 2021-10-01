<template>
	<div class="member">
		<!-- 会员卡详情 -->
		<div class="common_box middle club_card">
			<MembershipCard :membershipCardDetails="$store.state.membershipCardDetails" :routeName="'memberQRCode'" />

			<ul class="flex_row text_center">
				<li v-for="(item, index) of memberTotal" :key="index" @click="jumpPage(item.routeName)">
					<p>{{ item.name }}</p>
					<p>{{ item.amount }}</p>
				</li>
			</ul>
		</div>

		<div class="title">
			<img src="../../assets/images/title_left_icon.png" />
			常用服务
			<img src="../../assets/images/title_right_icon.png" />
		</div>

		<div class="common_box middle choice">
			<ul>
				<li v-for="item of service" :key="item.routeName" class="bar_3" @click="jumpPage(item.routeName)">
					<img :src="require(`../../assets/images/${item.icon}.png`)" />
					<p>{{ item.name }}</p>
				</li>
			</ul>
		</div>

		<div class="title">
			<img src="../../assets/images/title_left_icon.png" />
			其他功能
			<img src="../../assets/images/title_right_icon.png" />
		</div>

		<div class="common_box middle choice">
			<ul>
				<li v-for="item of feature" :key="item.routeName" class="bar_4" @click="jumpPage(item.routeName)">
					<img :src="require(`../../assets/images/${item.icon}.png`)" />
					<p>{{ item.name }}</p>
				</li>
			</ul>
		</div>

		<!-- footer -->
		<Tabbar />
	</div>
</template>

<script>
import MembershipCard from '../../components/MembershipCard.vue';
import Tabbar from '../../components/Tabbar.vue';
export default {
	components: {
		MembershipCard,
		Tabbar
	},
	data() {
		return {
			memberTotal: [
				{ name: '余额', amount: 0 },
				{ name: '积分', amount: 0 },
				{ name: '本金', amount: 0 },
				{ name: '赠送', amount: 0 },
				{ name: '返利', amount: 0, routeName: 'memberRebate' }
			],
			service: [
				{ name: '分享领福利', icon: 'welfare', routeName: 'memberWelfare' },
				{
					name: '会员充值',
					icon: 'recharge',
					routeName: 'memberRecharge'
				},
				{
					name: '我要寄存',
					icon: 'consign',
					routeName: 'memberConsign'
				},
				{ name: '我的酒水', icon: 'drinks', routeName: 'memberDrinks' },
				{ name: '我的奖励', icon: 'reward', routeName: 'memberReward' },
				{
					name: '我的优惠券',
					icon: 'discounts',
					routeName: 'memberCoupon'
				}
			],
			feature: [
				{
					name: '我的资料',
					icon: 'material',
					routeName: 'memberMaterial'
				},
				{ name: '会员权益', icon: 'equity', routeName: 'memberEquity' },
				{ name: '建卡绑卡', icon: 'card', routeName: 'memberCard' },
				{ name: '账单记录', icon: 'bill', routeName: 'memberBill' }
			]
		};
	},
	created() {
		// 判断路由是否携带会员卡参数，储存对应数据
		if (this.$route.params.membershipCardDetails) {
			this.$store.commit('updateMembershipCardDetails', this.$route.params.membershipCardDetails);
		}
	},
	methods: {
		jumpPage(routeName) {
			if (routeName) this.$router.push({ name: routeName });
		}
	}
};
</script>
