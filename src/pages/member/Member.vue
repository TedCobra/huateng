<template>
	<div class="member">
		<!-- 会员卡详情 -->
		<div class="common_box middle club_card">
			<MembershipCard :membershipCardDetails="$store.state.membershipCardDetails" :routeName="'memberQRCode'" />

			<ul class="flex_row text_center">
				<li>
					<p>余额</p>
					<p>{{ $store.state.membershipCardDetails.ye }}</p>
				</li>
				<li>
					<p>积分</p>
					<p>{{ $store.state.membershipCardDetails.cardintegral }}</p>
				</li>
				<li>
					<p>本金</p>
					<p>{{ $store.state.membershipCardDetails.bjye }}</p>
				</li>
				<li>
					<p>赠送</p>
					<p>{{ $store.state.membershipCardDetails.zsye }}</p>
				</li>
				<li @click="jumpPage('memberRebate')">
					<p>返利</p>
					<p>{{ $store.state.membershipCardDetails.flye }}</p>
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
	</div>
</template>

<script>
import MembershipCard from '../../components/MembershipCard.vue';
import HttpService from '../../utils/http';

export default {
	components: {
		MembershipCard
	},
	data() {
		return {
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
					routeName: 'accessDeposit'
				},
				{ name: '我的酒水', icon: 'drinks', routeName: 'accessWithdraw' },
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
		console.log(this.$route.params.membershipCardDetails);
		// 判断路由是否携带会员卡参数，储存对应数据
		if (this.$route.params.membershipCardDetails) {
			HttpService.MembershipCardDetails(
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				this.$route.params.membershipCardDetails.company_id,
				this.$route.params.membershipCardDetails.id
			).then((res) => {
				// 因为会员卡详情没有company_id
				this.$store.commit('updateMembershipCardDetails', Object.assign(this.$route.params.membershipCardDetails, res.data));
			});
		}
	},
	methods: {
		jumpPage(routeName) {
			if (routeName) this.$router.push({ name: routeName });
		}
	}
};
</script>
