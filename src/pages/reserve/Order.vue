<template>
	<div class="reserve_order">
		<div class="common_box small details">
			<div class="flex_row">
				<h3>{{ params.boxName }}</h3>
				<h3>￥{{ params.amount }}</h3>
			</div>
			<p>
				{{ params.boxName }}
				({{ params.minNumber }}-{{ params.maxNumber }}) {{ params.week }} {{ params.selectDate }} {{ params.beginTime }}-{{
					params.endTime
				}}
			</p>
		</div>

		<div class="common_box small drink_package">
			<ul>
				<li @click="exchangeSelectedPlan(null)">
					<div :class="{ active: selectedPlan === null }">
						<img src="../../assets/images/right_white.png" />
					</div>
					<div>
						<div>
							<h3>不选择酒水套餐</h3>
						</div>
					</div>
				</li>
				<li
					v-for="item of drinkPackage"
					:key="item.roomreserveschemesetid"
					@click="exchangeSelectedPlan(item.roomreserveschemesetid, item.materialtotalmoney, item.detail)"
				>
					<div :class="{ active: selectedPlan === item.roomreserveschemesetid }">
						<img src="../../assets/images/right_white.png" />
					</div>
					<div>
						<div class="flex_row">
							<h3>{{ item.schemename }}</h3>
							<h3>￥{{ item.materialtotalmoney }}</h3>
						</div>
						<p>{{ item.materialdetail }}</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="common_box small edit_details">
			<ul>
				<li>
					<label for="phoneNumber">手机号码</label>
					<input
						name="phoneNumber"
						placeholder="您的手机号码"
						maxlength="11"
						v-model="phoneNumber"
						@input="phoneNumber = phoneNumber = limitNumber(phoneNumber)"
					/>
				</li>
				<li @click="chooseNumberOfPeopleController">
					<label for="numberOfvisitors">到店人数</label>
					<input name="numberOfvisitors" placeholder="大约到店的人数" disabled :value="numberOfvisitors" />
				</li>
				<li>
					<label for="arrivalTime">到店时间</label>
					<input name="arrivalTime" disabled :value="`${params.selectDate} ${params.selectTime}`" />
				</li>
				<li>
					<label for="remark"> <span>备</span>注 </label>
					<input name="remark" placeholder="您还有什么其它要求" v-model="remark" />
				</li>
			</ul>
		</div>

		<!-- 提交订单 -->
		<div class="flex_row confirm">
			<p>
				¥ <b>{{ params.amount + packageDetails.price }}</b>
			</p>
			<div class="flex_row">
				<div @click="orderDetailsController">
					明细
					<img :class="{ active: isOrderDetails }" src="../../assets/images/arrow_white.png" />
				</div>
				<button @click="submitOrders">提交订单</button>
			</div>
		</div>

		<!-- 弹出层 -->
		<van-popup v-model="isOrderDetails" position="bottom">
			<div class="consumer_details">
				<h2>消费明细</h2>
				<div class="flex_row">
					<p>房费</p>
					<p>¥{{ params.amount }}</p>
				</div>
				<div class="flex_row">
					<p>预定套餐</p>
					<p>¥{{ packageDetails.price }}</p>
				</div>
				<ul>
					<li v-for="item of packageDetails.productList" :key="item.materialid">
						<p>{{ item.materialname }}x{{ item.ordernumber }}{{ item.materialunitname }}</p>
						<p>¥{{ item.realsellprice }}</p>
					</li>
				</ul>
			</div>
		</van-popup>

		<!-- 选择人数 -->
		<van-popup v-model="isChooseNumberOfPeople" round position="bottom">
			<Picker show-toolbar :columns="numberOfPeople" @cancel="chooseNumberOfPeopleController" @confirm="enterPeopleNumber" />
		</van-popup>
	</div>
</template>

<script>
import HttpService from '../../utils/http';
// util
import { yearMonthDay, limitNumber } from '../../utils/util';
// plugin
import { Picker } from 'vant';

export default {
	components: {
		Picker
	},
	data() {
		return {
			params: {}, // 请求参数
			drinkPackage: [], // 酒水套餐
			selectedPlan: null, // 已选套餐
			// 套餐详情
			packageDetails: {
				price: 0, // 套餐金额
				productList: [] // 套餐列表
			},
			phoneNumber: '', // 手机号码
			isOrderDetails: false, // 订单详情显示
			numberOfPeople: [], // 人数列表
			isChooseNumberOfPeople: false, // 选择人数显示
			numberOfvisitors: '', // 到店人数
			remark: '' // 备注
		};
	},
	created() {
		console.log(this.$route.params);

		if (Object.keys(this.$route.params).length) {
			this.params = this.$route.params;
			this.params.selectDate = yearMonthDay(this.params.selectDate);
			this.numberOfPeople = Array.from(new Array(this.params.maxNumber).keys(), (x) => x + 1);
			// 酒水套餐
			HttpService.BookADrinkPlan(
				this.$store.state.membershipCardDetails.company_id,
				this.params.selectRoomType,
				this.params.scheduledPlan,
				1,
				this.params.selectDate
			).then((res) => {
				this.drinkPackage = res.data;
			});
			return;
		}
		this.$router.go(-1);
	},
	methods: {
		limitNumber: limitNumber,
		exchangeSelectedPlan(selectedPlan, price, productList) {
			this.selectedPlan = selectedPlan;
			this.packageDetails = {
				price: price || 0,
				productList: productList || []
			};
		},
		orderDetailsController() {
			this.isOrderDetails = !this.isOrderDetails;
		},
		submitOrders() {
			console.log('submitOrders');
		},
		enterPeopleNumber(value) {
			this.numberOfvisitors = value;
			this.chooseNumberOfPeopleController();
		},
		chooseNumberOfPeopleController() {
			this.isChooseNumberOfPeople = !this.isChooseNumberOfPeople;
		}
	}
};
</script>
