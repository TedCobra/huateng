<template>
	<div class="reserve">
		<img src="../assets/images/bar_cover.png" />

		<div class="common_box middle bar_details">
			<div class="flex_row title">
				<h4>{{ MerchantDetails.company_name }}</h4>
				<div class="text_center">{{ distance }}km</div>
			</div>
			<div class="flex_row score">
				<Rate v-model="score" allow-half :color="'#FF71AB'" :void-icon="'star'" :void-color="'#6A6C78'" />
				{{ score }}分
			</div>
			<div class="flex_row opening">
				<p>
					<img src="../assets/images/time_grey.png" />
					{{ MerchantDetails.remark }}
				</p>
				<button @click="jumpPage('reserveMyAppointment', {})">我的预约</button>
			</div>
			<div class="flex_row address">
				<div class="flex_row">
					<img src="../assets/images/location_grey.png" />
					{{ MerchantDetails.company_addr }}
					<img src="../assets/images/arrow_grey.png" />
				</div>
				<img src="../assets/images/tel_grey.png" />
			</div>
		</div>

		<div class="common_box middle book_box">
			<!-- 标题 -->
			<div class="flex_row title">
				<h4>预约包厢</h4>
				<ul class="flex_row">
					<li>
						<div>✔</div>
						100%留房
					</li>
					<li>
						<div>✘</div>
						可退
					</li>
				</ul>
			</div>
			<!-- 日期选择 -->
			<div class="flex_row date_selection">
				<div ref="dateScroll">
					<ul ref="dateContent">
						<li
							v-for="item of selectArray"
							:key="item.timeStamp"
							:class="{ active: selectDate === item.timeStamp }"
							@click="changeSelectDate(item.timeStamp, item.dayOfTheWeek)"
						>
							{{ item.monthAndDay }}
							<br />
							{{ item.week }}
						</li>
					</ul>
				</div>
				<button @click="dateController">更多<br />日期</button>
			</div>
			<!-- 包厢选择 -->
			<div class="box_selection">
				<ul class="flex_row text_center">
					<li
						v-for="item of availableRoomTypes"
						:key="item.roomsortid"
						:class="{ active: selectRoomType === item.roomsortid }"
						@click="exchangeSelectRoomType(item.roomsortid, item.sortname)"
					>
						<p>{{ item.sortname }}</p>
						<p>{{ item.size_min }}-{{ item.size_max }}人</p>
						<img v-show="selectRoomType === item.roomsortid" src="../assets/images/select_pink.png" />
					</li>
				</ul>
			</div>
			<!-- 买断方案 -->
			<ul class="cash_coupons">
				<li v-for="item of buyoutPlans" :key="item.roomreservationid" class="flex_row">
					<div>
						<h6>{{ item.begintime }} - {{ item.endtime }}</h6>
						<p>{{ item.timeDiffrence }}小时欢唱时间，{{ item.ismaterialrequired ? '可选套餐' : '套餐不可选' }}</p>
						<p>
							¥ <b>{{ item[`week${dayOfTheWeek}money`] }}</b>
						</p>
					</div>
					<button
						:class="{ grey: !item.roomnum }"
						@click="reserve(item.roomnum, item.begintime, item.timeDiffrence, item[`week${dayOfTheWeek}money`])"
					>
						预订
					</button>
				</li>
			</ul>
		</div>

		<!-- footer -->
		<Tabbar />

		<!-- puglin -->
		<Calendar
			v-model="isDate"
			:default-date="new Date(selectDate)"
			:color="'#2E66F9'"
			:min-date="minDate"
			:max-date="maxDate"
			:show-mark="false"
			@confirm="getSelectDate"
		/>

		<van-popup v-model="isArrivalTime" :position="'bottom'">
			<div class="arrival_time">
				<div class="flex_row">
					<p>{{ boxName }} (可预定时段)</p>
					<h4>￥{{ amount }}</h4>
				</div>
				<p>请选择您到店时间</p>
				<ul class="flex_row">
					<li v-for="item of timeArray" :key="item" :class="{ active: selectTime === item }" @click="selectTime = item">
						{{ item }}
						<img v-show="selectTime === item" src="../assets/images/select_blue.png" />
					</li>
				</ul>
				<button @click="choosePackage">下一步 选择套餐</button>
			</div>
		</van-popup>
	</div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue';
// util
import { YearMonthDay } from '../utils/util';
// plugins
import { Rate, Calendar } from 'vant';
import BScroll from '@better-scroll/core';
import HttpService from '../utils/http';

export default {
	components: {
		Tabbar,
		Rate,
		Calendar
	},
	data() {
		return {
			MerchantDetails: {}, // 商户详情
			distance: 0, // 用户距离
			score: 5, // 商户评分
			// 日期选择
			isDate: false,
			selectDate: null, // 时间戳
			dayOfTheWeek: null, // 星期 1-7
			timeArray: [], // 到店时间可选列表
			// 包厢类型
			selectRoomType: null,
			availableRoomTypes: [],
			boxName: '', // 包厢名称
			// 到店时间
			isArrivalTime: false,
			selectTime: null,
			// 买断方案
			buyoutPlans: [],
			amount: 0
		};
	},
	computed: {
		// 最小时间限制
		minDate() {
			return new Date();
		},
		// 最大时间限制
		maxDate() {
			return new Date(new Date().getTime() + 13 * 24 * 3600 * 1000);
		},
		// 向后推十四天
		selectArray() {
			let date = new Date();
			// 时间归yyyy-mm-dd 00:00:00
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
			let weekArray = ['日', '一', '二', '三', '四', '五', '六'];
			let selectArray = [];
			for (let i = 0; i < 14; i++) {
				let nextDate = new Date(date.getTime() + i * 24 * 3600 * 1000);
				let dayOfTheWeek = nextDate.getDay();
				selectArray.push({
					week: `周${weekArray[dayOfTheWeek]}`,
					dayOfTheWeek: dayOfTheWeek ? dayOfTheWeek : 7,
					monthAndDay: `${this.getFullZero(nextDate.getMonth() + 1)}-${this.getFullZero(nextDate.getDate())}`,
					timeStamp: nextDate.getTime()
				});
			}
			return selectArray;
		}
	},
	created() {
		HttpService.MerchantDetails(5129, 1231).then((res) => {
			this.MerchantDetails = res;
		});

		HttpService.AvailableRoomTypes(5129).then((res) => {
			this.availableRoomTypes = res;
		});
	},
	mounted() {
		this.initBscroll();
	},
	beforeDestroy() {
		this.bs.destroy();
	},
	methods: {
		getBuyoutPlan() {
			if (this.selectDate && this.selectRoomType) {
				let date = YearMonthDay(this.selectDate);
				HttpService.BuyoutPlan(5129, this.selectRoomType, date).then((res) => {
					res.some((item) => {
						let endHour = Number(item.endtime.split(':')[0]);
						let beginHour = Number(item.begintime.split(':')[0]);
						// 计算时间差
						item.timeDiffrence = endHour > beginHour ? endHour - beginHour : 24 - beginHour + endHour;
					});
					this.buyoutPlans = res;
				});
			}
		},
		exchangeSelectRoomType(roomsortid, boxName) {
			this.selectRoomType = roomsortid;
			this.boxName = boxName;
			this.getBuyoutPlan();
		},
		arrivalTimeController() {
			this.isArrivalTime = !this.isArrivalTime;
		},
		reserve(roomNumber, beginTime, timeDiffrence, amount) {
			if (roomNumber) {
				// 根据开始时间处理到店时间
				beginTime = beginTime.split(':');
				let timeArray = [];
				for (let i = 0; i < timeDiffrence * 2; i++) {
					let hour = String(Number(beginTime[0]) + i / 2);
					let minute = hour.indexOf('.') > -1 ? '30' : '00';
					timeArray.push(`${hour.split('.')[0]}:${minute}`);
				}
				this.timeArray = timeArray;
				this.amount = amount;
				// 显示到店时间弹窗
				this.arrivalTimeController();
			}
		},
		dateController() {
			this.isDate = !this.isDate;
		},
		changeSelectDate(timeStamp, dayOfTheWeek) {
			this.selectDate = timeStamp;
			this.dayOfTheWeek = dayOfTheWeek;
			this.getBuyoutPlan();
		},
		getSelectDate(date) {
			// 时间归yyyy-mm-dd 00:00:00
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
			let timeStamp = date.getTime();
			let width = this.$refs.dateContent.offsetWidth / this.selectArray.length;
			this.changeSelectDate(timeStamp);
			// 滚动到指定位置
			for (let i = 0; i < this.selectArray.length; i++) {
				if (this.selectArray[i].timeStamp === timeStamp) {
					this.bs.scrollTo(-i * width, 0, 0);
					// 关闭弹出层
					this.dateController();
					return;
				}
			}
		},
		choosePackage() {
			if (this.selectTime) this.jumpPage('reserveOrder', {});
		},
		jumpPage(routeName, params) {
			this.$router.push({ name: routeName, params: params });
		},
		getFullZero(num) {
			return num > 9 ? num : `0${num}`;
		},
		initBscroll() {
			this.bs = new BScroll(this.$refs.dateScroll, {
				scrollX: true,
				click: true
			});
		}
	}
};
</script>
