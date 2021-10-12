<template>
	<div class="small build_card">
		<div class="common_input">
			<img class="username" src="../../../assets/images/username_grey.png" />
			<input type="text" placeholder="请输入姓名" v-model="username" />
		</div>
		<div class="common_input" @click="sexController">
			<img class="sex" src="../../../assets/images/sex_grey.png" />
			<input type="text" placeholder="请选择性别" disabled :value="sex" />
		</div>
		<div class="common_input" @click="dateController">
			<img class="birthday" src="../../../assets/images/birthday_grey.png" />
			<input type="text" placeholder="请选择出生年月日" disabled :value="birthday" />
		</div>
		<div class="common_input">
			<img src="../../../assets/images/phone_full_grey.png" />
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
			<button @click="getCaptcha">获取验证码</button>
		</div>

		<button @click="buildCard">确定</button>

		<!-- 性别选择 -->
		<van-popup v-model="isSex" round position="bottom">
			<Picker show-toolbar :columns="['男', '女']" @cancel="cancelSex" @confirm="enterSex" />
		</van-popup>

		<!-- 生日选择 -->
		<van-popup v-model="isDate" round position="bottom">
			<Picker
				show-toolbar
				:columns="[
					{ values: yearArray, defaultIndex: yearIndex },
					{ values: monthArray, defaultIndex: monthIndex },
					{ values: dayArray, defaultIndex: dayIndex }
				]"
				@change="dateChange"
				@cancel="cancelDate"
				@confirm="enterDate"
			/>
		</van-popup>
	</div>
</template>

<script>
import { limitNumber, verifyPhone } from '../../../utils/util';
import HttpService from '../../../utils/http';
// plugins
import { Picker } from 'vant';

export default {
	components: {
		Picker
	},
	data() {
		return {
			cardDetails: {}, // 卡片详情
			systemTime: null, // 系统时间
			isSex: false, // 性别选择
			isDate: false, // 显示时间选择
			sex: '', // 性别
			birthday: '', // 生日
			yearIndex: 0,
			monthIndex: 0,
			dayIndex: 0,
			monthArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // 月份数组
			dayArray: [], // 天数数组
			username: '', // 姓名
			phoneNumber: '', // 手机号码
			captcha: '' // 验证码
		};
	},
	computed: {
		yearArray() {
			let year = new Date(this.systemTime).getFullYear();
			this.calculateTheNumberOfDays(year, this.monthArray[this.monthIndex]);
			return Array.from(new Array(70).keys(), () => year--);
		}
	},
	created() {
		if (!this.$route.params.cardDetails) return this.$router.go(-1);

		this.cardDetails = this.$route.params.cardDetails;
		HttpService.SystemTime(5129, 'oqqkJ42kASZQAWWE3nbJuYk6wYp8').then((res) => {
			this.systemTime = res.data;
		});
	},
	methods: {
		limitNumber: limitNumber,
		verifyPhone: verifyPhone,
		calculateTheNumberOfDays(year, month) {
			let maxDay = new Date(year, month, 0).getDate();
			this.dayArray = Array.from(new Array(maxDay).keys(), (x = 1) => (x += 1));
		},
		dateChange(picker, values) {
			console.log(picker, values);
			this.calculateTheNumberOfDays(values[0], values[1]);
		},
		sexController() {
			this.isSex = !this.isSex;
		},
		dateController() {
			this.isDate = !this.isDate;
		},
		cancelSex() {
			this.sexController();
		},
		enterSex(value) {
			this.sex = value;
			this.sexController();
		},
		cancelDate() {
			this.dateController();
		},
		enterDate(values) {
			this.birthday = values.join('-');
			this.dateController();
		},
		getCaptcha() {
			if (this.verifyPhone(this.phoneNumber)) return this.$toast.fail('手机号码错误');
			HttpService.PhoneVerificationCode(5129, this.phoneNumber).then((res) => {
				console.log(res);
			});
		},
		buildCard() {
			if (!this.username) return this.$toast.fail('请输入姓名');
			if (!this.sex) return this.$toast.fail('请选择性别');
			if (!this.birthday) return this.$toast.fail('请选择出生年月日');
			if (this.verifyPhone(this.phoneNumber)) return this.$toast.fail('手机号码错误');
			if (!this.captcha) return this.$toast.fail('请输入验证码');
			HttpService.MembershipCard(
				this.cardDetails.company_id,
				'oqqkJ42kASZQAWWE3nbJuYk6wYp8',
				this.cardDetails.gradeid,
				'',
				this.phoneNumber,
				this.username,
				this.sex,
				this.birthday,
				this.captcha
			).then((res) => {
				console.log(res);
			});
		}
	}
};
</script>
