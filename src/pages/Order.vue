<template>
	<div class="order-container">
		<div class="flex_col order-top">
			<div class="flex_row shop-name">
				<p>店名店名店名店名店名店名</p>
				<img src="../assets/images/order_vector.png" alt="" @click="openCards" />
			</div>
			<p class="shop-notice">公告：欢迎光临XXXX，感谢新老客户长久以来对本店支持对本店支持对本店支持</p>
			<div class="flex_row table-num">
				<button>台号：128</button>
				<button @click="$router.push({ name: 'orderDetail'})">查看账单</button>
			</div>
		</div>
		<div class="flex_row order-search">
			<van-field
				:border="false"
				:autofocus="true"
				v-model.trim="searchValue"
				placeholder="搜索"
				maxlength="35"
				type="text"
				@keyup.native="btKeyUp"
			/>
			<!-- <input type="text" v-model.trim="searchValue" placeholder="搜索" @click="searchValue" /> -->
			<img src="../assets/images/order_search.png" @click="searchEvent" />
		</div>
		<div class="flex_row order-windes">
			<div class="hot-types">
				<ul>
					<li :class="['flex_row', { selectd: typeChoose === -1 }]" @click="typeClick(-1, null)">
						<img src="" alt="" />
						<p>热门酒水</p>
					</li>
					<li
						v-for="(item, index) in tyleList"
						:key="index"
						:class="['flex_row', { selectd: typeChoose === index }]"
						@click="typeClick(index, item)"
					>
						<p>{{ item.menusortname }}</p>
					</li>
				</ul>
			</div>
			<div class="hot-items">
				<ul>
					<li class="flex_row item-content" v-for="item of 10" :key="item" @click="choosePackage">
						<img class="item-img" src="" alt="" />
						<div class="flex_col item-detail">
							<p class="van-ellipsis">产品名称产品名称产品产品名称产品名称产品产品名称产品名称产品产品名称产品名称产品</p>
							<p class="van-ellipsis">描述介绍描述介绍描述介绍</p>
							<p>月售418</p>
							<div class="flex_row item-opt">
								<div class="item-price">
									<span>￥</span>
									<span>10145.6</span>
								</div>

								<div class="flex_row item-add-sub">
									<img src="../assets/images/assess_cut.png" alt="" />
									<span class="num">26</span>
									<img src="../assets/images/add_blue.png" alt="" />
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex_row order-settle-button">
			<div class="flex_row settle-detail">
				<div class="cart">
					<img src="../assets/images/order_bill.png" alt="" @click="isShowChoosed = !isShowChoosed" />
					<div class="num">
						<span>{{ showData.num }}</span>
					</div>
				</div>
				<div class="flex_row total">
					<p>¥</p>
					<p>{{ showData.price }}</p>
				</div>
			</div>
			<button @click="$router.push({ name: 'orderCommit' })">去结算</button>
		</div>
		<OrderChoosed :show="isShowChoosed" @choosedEvent="choosedEvent"></OrderChoosed>
		<OrderPackage :show="isShowPackage" @packageEvent="packageEvent"></OrderPackage>
		<OrderCards :show="ishowCards" @cardsEvent="cardsEvent"></OrderCards>
	</div>
</template>
<script>
import OrderChoosed from './order/OrderChoosed.vue';
import OrderPackage from './order/OrderPackage.vue';
import OrderCards from './order/OrderCards.vue';
import { Field } from 'vant';
// http
import HttpService from '../utils/http';
export default {
	components: { OrderChoosed, OrderPackage, OrderCards, [Field.name]: Field },
	data() {
		return {
			isShowChoosed: false,
			isShowPackage: false,
			ishowCards: false,
			searchValue: '',
			showData: {
				price: 899,
				num: 9
			},
			typeChoose: -1,
			tyleList: [
				{
					fathermenusortid: 1,
					menusortname: '李宰旭',
					sorttype: 0,
					materialsortid: 1,
					serialnumber: 1,
					menusortid: 18,
					menusortpy: 'xxx',
					imageurl: 'xxxx'
				},
				{
					fathermenusortid: 1,
					menusortname: '朴旭俊',
					sorttype: 0,
					materialsortid: 1,
					serialnumber: 1,
					menusortid: 1,
					menusortpy: 'xxx',
					imageurl: 'xxxx'
				}
			], //左边分类列表
			winsList: [
				{
					materialsortid: 9,
					materialid: 1,
					materialname: '测试菜品',
					imageurl: 'xxx',
					sellprice: 998
				}
			] // 右边商品列表
		};
	},
	created() {
		// 获取左边列表
		HttpService.materialSort(5129, 2).then((res) => {
			this.tyleList = res;
		});
		// 获取热卖
		HttpService.materialHot(5129, 31).then((res) => {
			this.tyleList = res;
		});
	},
	methods: {
		choosedEvent() {
			this.isShowChoosed = false;
		},
		packageEvent() {
			this.isShowPackage = false;
		},
		// 选择套餐
		choosePackage() {
			this.isShowPackage = true;
		},
		openCards() {
			this.ishowCards = true;
		},
		cardsEvent() {
			this.ishowCards = false;
		},
		typeClick(index, item) {
			console.log('====index', index);
			this.typeChoose = index;
			if (item) {
				//
			}
		},
		// 搜索
		searchEvent() {
			HttpService.MaterialSearch(5129, 2).then((res) => {
				this.tyleList = res;
			});
		},

		// 限制输入特殊字符
		btKeyUp(e) {
			this.searchValue = e.target.value.replace(
				// eslint-disable-next-line no-useless-escape
				/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
				''
			);
		}
	}
};
</script>

<style lang="scss">
@import '../assets/styles/order.scss';
</style>
