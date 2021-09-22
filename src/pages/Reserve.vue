<template>
	<div class="reserve">
		<img src="../assets/images/bar_cover.png" />

		<div class="common_box middle bar_details">
			<div class="flex_row title">
				<h4>标题标题标题标题</h4>
				<div class="text_center">621.5km</div>
			</div>
			<div class="flex_row opening">
				<p>
					<img src="../assets/images/time_grey.png" />
					营业中 周一至周日9:00开始营业
				</p>
				<button>我的预约</button>
			</div>
			<div class="flex_row address">
				<div class="flex_row">
					<img src="../assets/images/location_grey.png" />
					湖南省长沙市岳麓区XXXX路
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
					<ul>
						<li
							v-for="item of selectArray"
							:key="item.timeStamp"
							:class="{ active: selectDate === item.timeStamp }"
							@click="changeSelectDate(item.timeStamp)"
						>
							{{ item.monthAndDay }}
							<br />
							{{ item.week }}
						</li>
					</ul>
				</div>
				<button @click="dateController">
					更多
					<br />
					日期
				</button>
			</div>
			<!-- 包厢选择 -->
			<ul class="flex_row text_center box_selection">
				<li v-for="item of 3" :key="item" :class="{ active: selectBox === item }" @click="selectBox = item">
					<p>小卡座</p>
					<p>4-6人</p>
					<img v-show="selectBox === item" src="../assets/images/select_pink.png" />
				</li>
			</ul>
			<!-- 现金券 -->
			<ul class="cash_coupons">
				<li v-for="item of 5" :key="item" class="flex_row">
					<div class="flex_row">
						<div></div>
						<div>
							<h6>100元现金劵</h6>
							<p>¥ <b>100</b></p>
						</div>
					</div>
					<button>预订</button>
				</li>
			</ul>
		</div>

		<!-- footer -->
		<Tabbar />

		<!-- puglin -->
		<Calendar v-model="isDate" :color="'#2E66F9'" :min-date="minDate" :max-date="maxDate" @confirm="getSelectDate" />
	</div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue';
// plugins
import { Calendar } from 'vant';
import BScroll from '@better-scroll/core';
export default {
	components: {
		Tabbar,
		Calendar
	},
	data() {
		return {
			// 日期选择
			isDate: false,
			selectDate: '',
			// 包厢
			selectBox: 1
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
				selectArray.push({
					week: `周${weekArray[nextDate.getDay()]}`,
					monthAndDay: `${this.getFullZero(nextDate.getMonth() + 1)}-${this.getFullZero(nextDate.getDate())}`,
					timeStamp: nextDate.getTime()
				});
			}
			return selectArray;
		}
	},
	methods: {
		dateController() {
			this.isDate = !this.isDate;
		},
		changeSelectDate(timeStamp) {
			this.selectDate = timeStamp;
		},
		getSelectDate(date) {
			// 时间归yyyy-mm-dd 00:00:00
			date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
			this.changeSelectDate(date.getTime());
			this.dateController();
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
	},
	mounted() {
		this.initBscroll();
	},
	beforeDestroy() {
		this.bs.destroy();
	}
};
</script>
