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
		<button @click="tiedCard">确定</button>
	</div>
</template>

<script>
// util
import { limitNumber, verifyPhone } from '../../../utils/util.js';

export default {
	data() {
		return {
			phoneNumber: ''
		};
	},
	methods: {
		limitNumber: limitNumber,
		verifyPhone: verifyPhone,
		tiedCard() {
			if (this.verifyPhone(this.phoneNumber)) return;
		}
	}
};
</script>
