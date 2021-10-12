<template>
	<div class="tied_card small">
		<div class="common_input">
			<img src="../../../assets/images/phone_grey.png" />
			<input
				type="text"
				maxlength="11"
				placeholder="请输入手机号"
				v-model="phoneNumber"
				@input="phoneNumber = limitNumber(phoneNumber)"
			/>
		</div>
		<div class="common_input captcha">
			<img class="captcha" src="../../../assets/images/captcha_grey.png" />
			<input type="text" placeholder="请输入验证码" maxlength="4" v-model="captcha" @input="captcha = limitNumber(captcha)" />
			<button @click="getCatpcha">获取验证码</button>
		</div>
		<button @click="tiedCard">确定</button>
	</div>
</template>

<script>
import HttpService from '../../../utils/http.js';
import { limitNumber, verifyPhone } from '../../../utils/util.js';

export default {
	data() {
		return {
			phoneNumber: '', // 手机号码
			captcha: '' // 验证码
		};
	},
	methods: {
		limitNumber: limitNumber,
		verifyPhone: verifyPhone,
		tiedCard() {
			if (this.verifyPhone(this.phoneNumber)) return this.$toast.fail('手机号码错误');
			if (!this.captcha) return this.$toast.fail('验证码错误');
			HttpService.BindPhysicalCard(
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				5129,
				this.$store.state.membershipCardDetails.id,
				this.phoneNumber,
				this.captcha
			).then((res) => {
				console.log(res);
			});
		},
		getCatpcha() {
			if (this.verifyPhone(this.phoneNumber)) return this.$toast.fail('手机号码错误');
			HttpService.PhoneVerificationCode(5129, this.phoneNumber).then((res) => {
				console.log(res);
			});
		}
	}
};
</script>
