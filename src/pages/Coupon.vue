<template>
    <div class="coupons">
        <!-- 条件 -->
        <ul class="flex_row text_center condition">
            <li
                v-for="item of choices"
                :key="item.status"
                :class="{ active: choice === item.status }"
                @click="choice = item.status"
            >
                {{ item.name }}
            </li>
        </ul>

        <!-- 列表 -->
        <ul>
            <li
                v-for="item of 10"
                :key="item"
                class="common_row"
                @click="$router.push({ name: 'couponDetails' })"
            >
                <div>
                    <div>
                        <img src="../assets/images/coupon_white.png" />
                    </div>
                    <div>
                        <h6>100元现金劵</h6>
                        <p>2021-05-24 14:24:51</p>
                        <p class="details">点击查看详情</p>
                    </div>
                </div>
                <button class="active" @click.stop="useCoupon()">
                    立即使用
                </button>
            </li>
        </ul>

        <Tabbar />
    </div>
</template>

<script>
import Tabbar from '../components/Tabbar.vue';
export default {
    components: {
        Tabbar,
    },
    data() {
        return {
            choice: 0,
            choices: [
                { name: '未使用', status: 0 },
                { name: '已使用', status: 1 },
                { name: '已过期', status: 2 },
            ],
        };
    },
    methods: {
        useCoupon() {
            console.log('useCoupon');
        },
    },
};
</script>
