<template>
	<div class="recharge">
		<div class="common_box small">
			<div>
				<p>充值金额</p>
				<ul>
					<li
						v-for="(item, index) of topupPlan"
						:key="item.rechargefixschemeid"
						:class="{ active: selectIndex === index }"
						@click="exchangePlan(index, item.scheme)"
					>
						{{ item.rechargemoney }}元
						<img v-show="selectIndex === index" src="../../assets/images/select_blue.png" />
					</li>
				</ul>
				<div>
					<input placeholder="请输入金额" v-model="price" @input="price = limitNumber(price)" @focus="exchangePlan(null, [])" />
					元
				</div>
			</div>

			<div v-show="(selectIndex || selectIndex === 0) && salePlan.length">
				<p>赠送方案</p>
				<ul>
					<li
						v-for="item of salePlan"
						:key="item.fullpresentschemeid"
						:class="{ active: selectSchemeId === item.fullpresentschemeid }"
						@click="selectSchemeId = item.fullpresentschemeid"
					>
						{{ item.money }}元
					</li>
				</ul>
			</div>

			<button @click="ensure">确定</button>
		</div>
	</div>
</template>

<script>
import HttpService from '../../utils/http';
import { limitNumber } from '../../utils/util';

export default {
	data() {
		return {
			topupPlan: [], // 充值方案
			selectIndex: null, // 选择方案下标
			price: '', // 金额
			salePlan: [], // 优惠方案
			selectSchemeId: null // 优惠方案id
		};
	},
	created() {
		HttpService.RechargeOffer(this.$store.state.membershipCardDetails.company_id, this.$store.state.membershipCardDetails.gradeid).then(
			(res) => {
				this.topupPlan = res.data;
			}
		);
	},
	methods: {
		limitNumber: limitNumber,
		exchangePlan(index, scheme) {
			this.selectIndex = index;
			this.salePlan = scheme;
			// 判断是否有值
			if (scheme.length) this.selectSchemeId = scheme[0].fullpresentschemeid;
		},
		ensure() {
			console.log('ensure');
		}
	}
};
</script>
