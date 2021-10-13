<template>
	<div class="coupon_list">
		<!-- 列表 -->
		<div class="list" ref="listScroll">
			<ul>
				<li v-for="item of dataArray" :key="item.coupon_code" class="common_row">
					<div>
						<div>
							<img :src="item.picture" />
						</div>
						<div>
							<h6>{{ item.title }}</h6>
							<p>{{ item.createdatetime }}</p>
							<p v-show="isNeedDetails" class="details" @click="checkTheDetails(item.title, item.note)">点击查看详情</p>
						</div>
					</div>
					<button class="active" @click.stop="useCoupon(item.couponid)">立即领取</button>
				</li>
			</ul>
		</div>

		<!-- 使用优惠券 -->
		<!-- <van-dialog v-model="isCoupon" :show-confirm-button="false" :close-on-click-overlay="true">
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
		</van-dialog> -->
	</div>
</template>

<script>
import HttpService from '../utils/http.js';
// import { limitNumber, verifyPhone } from '../utils/util.js';
// plugins
import { Dialog } from 'vant';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import Pulldown from '@better-scroll/pull-down';
// 注册插件
BScroll.use(Pullup);
BScroll.use(Pulldown);

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
			// isCoupon: false,
			// phoneNumber: ''
		};
	},
	watch: {
		dataArray() {
			if (this.bs) {
				this.$nextTick(() => {
					console.log('is change data array?');
					this.bs.refresh();
					this.bs.finishPullDown();
					this.bs.finishPullUp();
				});
			}
		}
	},
	mounted() {
		this.initBScroll();
	},
	beforeDestroy() {
		if (this.bs) this.bs.destroy();
	},
	methods: {
		// limitNumber: limitNumber,
		// verifyPhone: verifyPhone,
		initBScroll() {
			console.log('init scroll');
			this.bs = new BScroll(this.$refs.listScroll, {
				scrollY: true,
				click: true,
				probeType: 1,
				pullDownRefresh: {
					threshold: 50,
					stop: 20
				},
				pullUpLoad: {
					threshold: 50
				}
			});
			this.bs.on('pullingDown', () => {
				this.$emit('pullDownToRefresh');
			});
			this.bs.on('pullingUp', () => {
				this.$emit('pullUpLoading');
			});
		},
		useCoupon(couponid) {
			if (this.$store.state.guestId) {
				HttpService.GetACoupon(this.$store.state.guestId, this.$store.state.merchantDetails.parent_id, couponid).then(() => {
					this.$toast.success('领取成功');
				});
				return;
			}
			this.$router.push({ name: 'memberCard' });
		},
		// receive() {
		// 	if (this.verifyPhone(this.phoneNumber)) return;
		// 	this.useCoupon();
		// },
		checkTheDetails(title, details) {
			this.$router.push({
				name: 'couponDetails',
				params: {
					title: title,
					details: details
				}
			});
		}
	}
};
</script>
