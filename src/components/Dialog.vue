<template>
	<van-dialog v-model="isShow" :show-confirm-button="showConfirmButton" :close-on-click-overlay="closeOnClickOverly">
		<slot />
	</van-dialog>
</template>

<script>
// plugins
import { Dialog } from 'vant';

export default {
	components: {
		[Dialog.Component.name]: Dialog.Component
	},
	props: {
		isShow: Boolean, // 显示隐藏
		showConfirmButton: Boolean, // 是否显示确认按钮
		closeOnClickOverly: Boolean // 点击遮罩层关闭弹窗
	}
};
</script>
