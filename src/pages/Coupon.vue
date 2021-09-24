<template>
	<div class="coupons">
		<!-- 条件 -->
		<ul class="flex_row text_center condition">
			<li v-for="item of choices" :key="item.status" :class="{ active: choice === item.status }" @click="choice = item.status">
				{{ item.name }}
			</li>
		</ul>

		<!-- 列表 -->
		<div class="list" ref="listScroll">
			<ul>
				<li v-for="item of 10" :key="item" class="common_row" @click="$router.push({ name: 'couponDetails' })">
					<div>
						<div>
							<img src="../assets/images/coupon_white.png" />
						</div>
						<div>
							<h6>100元现金劵</h6>
							<p>2021-05-24 14:24:51</p>
							<p class="details">点击查看详情</p>
						</div>
					</div>
					<button class="active" @click.stop="useCoupon()">立即使用</button>
				</li>
			</ul>
		</div>

		<!-- footer -->
		<Tabbar />

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
import Tabbar from '../components/Tabbar.vue';
// util
import { limitNumber, verifyPhone } from '../utils/util.js';
// plugins
import BScroll from '@better-scroll/core';
import { Dialog } from 'vant';

export default {
	components: {
		Tabbar,
		[Dialog.Component.name]: Dialog.Component
	},
	data() {
		return {
			fixedHeight: 0,
			choice: 0,
			choices: [
				{ name: '未使用', status: 0 },
				{ name: '已使用', status: 1 },
				{ name: '已过期', status: 2 }
			],
			isCoupon: false,
			phoneNumber: ''
		};
	},
	mounted() {
		this.initBscroll();
	},
	beforeDestroy() {
		this.bs.destroy();
	},
	methods: {
		limitNumber: limitNumber,
		verifyPhone: verifyPhone,
		useCoupon() {
			this.isCoupon = !this.isCoupon;
		},
		receive() {
			if (this.verifyPhone(this.phoneNumber)) return;
			this.useCoupon();
		},
		initBscroll() {
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true
			});
		}
	}
};
</script>
