<template>
	<div class="coupon_list">
		<!-- 列表 -->
		<div class="list" ref="listScroll">
			<ul>
				<li v-for="item of dataArray" :key="item" class="common_row" @click="jumpPage('couponDetails')">
					<div>
						<div>
							<img src="../assets/images/coupon_white.png" />
						</div>
						<div>
							<h6>100元现金劵</h6>
							<p>2021-05-24 14:24:51</p>
							<p v-show="isNeedDetails" class="details">点击查看详情</p>
						</div>
					</div>
					<button class="active" @click.stop="useCoupon()">立即使用</button>
				</li>
			</ul>
		</div>

		<!-- 使用优惠券 -->
		<van-dialog v-model="isCoupon" :show-confirm-button="false" :close-on-click-overlay="true">
			<div class="bind_phone">
				<h3>温馨提示</h3>
				<p>请正确填写您的手机号码，优惠劵将直接发放到您手机号对应的帐户中</p>
				<input
					type="text"
					maxlength="11"
					placeholder="请输入手机号"
					v-model="phoneNumber"
					@input="phoneNumber = limitNumber(phoneNumber)"
				/>
				<button @click="receive">领取</button>
			</div>
		</van-dialog>
	</div>
</template>

<script>
// plugins
import { Dialog } from 'vant';
import BScroll from '@better-scroll/core';
// util
import { limitNumber, verifyPhone } from '../utils/util.js';

export default {
	components: {
		[Dialog.Component.name]: Dialog.Component
	},
	props: {
		isScroll: Boolean, // 是否需要滚动
		isNeedDetails: {
			// 是否需要详情按钮
			type: Boolean,
			default: true
		},
		dataArray: Array // 数据
	},
	data() {
		return {
			isCoupon: false,
			phoneNumber: ''
		};
	},
	mounted() {
		if (this.isScroll) this.initBScroll();
	},
	beforeDestroy() {
		if (this.bs) this.bs.destroy();
	},
	methods: {
		limitNumber: limitNumber,
		verifyPhone: verifyPhone,
		initBScroll() {
			console.log('init scroll');
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true
			});
		},
		useCoupon() {
			this.isCoupon = !this.isCoupon;
		},
		receive() {
			if (this.verifyPhone(this.phoneNumber)) return;
			this.useCoupon();
		},
		jumpPage(routeName) {
			this.$router.push({ name: routeName });
		}
	}
};
</script>
