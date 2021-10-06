<template>
	<div class="my_appointment">
		<List v-model="isLoad" :finised="isCompleted" @load="requestData">
			<div v-for="item of appointmentList" :key="item.destinevoucher" class="appointment_details">
				<div class="flex_row">
					<p>订单号:{{ item.destinevoucher }}</p>
					<p>{{ item.destinestatename }}</p>
				</div>
				<div class="flex_row">
					<div>
						<img :src="item.logo" />
					</div>
					<div>
						<h5>{{ item.schemename }}</h5>
						<p>{{ item.destinedatetime }} {{ item.guestnumber }}人 {{ item.sortname }}</p>
						<div class="flex_row">
							<p>预订时间：{{ item.createdatetime }}</p>
							<b>￥{{ item.paymoney }}元</b>
						</div>
					</div>
				</div>
			</div>
		</List>
	</div>
</template>

<script>
import HttpService from '../../utils/http';
// plugin
import { List } from 'vant';

export default {
	components: {
		List
	},
	data() {
		return {
			isRequest: false, // 是否请求
			isLoad: false, // 是否开始加载
			isCompleted: false, // 是否加载完成
			parentId: '', // 品牌编号
			currentPage: 1, // 当前页码
			pageSize: 10, // 条数
			totalRow: 0, // 总条数
			appointmentList: [] // 预约列表
		};
	},
	created() {
		console.log(this.$route.params);

		if (Object.keys(this.$route.params).length) {
			this.parentId = this.$route.params.parent_id;
			return;
		}
		this.$router.go(-1);
	},
	methods: {
		requestData() {
			if ((!this.totalRow && !this.isRequest) || this.appointmentList.length < this.totalRow) {
				HttpService.MyAppointment(this.parentId, 5129, 'oqqkJ42kASZQAWWE3nbJuYk6wYp8', this.currentPage, this.pageSize).then(
					(res) => {
						// 判断是否有请求
						if (!this.isRequest) this.isRequest = true;
						// 处理数据
						res.data.some((item) => {
							this.appointmentList.push(item);
						});
						this.totalRow = res.total || 0;
						this.currentPage += 1;
						// 加载状态结束
						this.isLoad = false;
						this.isCompleted = true;
					}
				);
				return;
			}
			this.isLoad = false;
			this.isCompleted = true;
		}
	}
};
</script>
