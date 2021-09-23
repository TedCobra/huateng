<template>
	<div class="small build_card">
		<div class="common_input">
			<img class="username" src="../../../assets/images/username_grey.png" />
			<input type="text" placeholder="请输入姓名" />
		</div>
		<div class="common_input">
			<img class="sex" src="../../../assets/images/sex_grey.png" />
			<input type="text" placeholder="请选择性别" disabled />
		</div>
		<div class="common_input">
			<img class="birthday" src="../../../assets/images/birthday_grey.png" />
			<input type="text" placeholder="请选择出生年月日" disabled />
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
			<input type="text" placeholder="请输入验证码" />
			<button>获取验证码</button>
		</div>
	</div>
</template>

<script>
// util
import { limitNumber } from '../../../utils/util';

export default {
	data() {
		return {
			phoneNumber: ''
		};
	},
	methods: {
		limitNumber: limitNumber
	}
};
</script>
