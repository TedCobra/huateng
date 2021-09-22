<template>
    <div class="tabbar">
        <ul class="flex_row text_center">
            <li
                v-for="item of nav"
                :key="item.routeName"
                :class="{ active: $route.name === item.routeName }"
                @click="jumpPage(item.routeName)"
            >
                <img
                    v-if="item.name"
                    :src="
                        $route.name === item.routeName
                            ? require(`../assets/images/${item.image}_blue.png`)
                            : require(`../assets/images/${item.image}_grey.png`)
                    "
                />
                <img
                    v-else
                    :src="require(`../assets/images/${item.image}.png`)"
                    class="add"
                />
                <p>{{ item.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav: [
                {
                    name: '首页',
                    image: 'home',
                    routeName: 'index',
                },
                {
                    name: '会员',
                    image: 'people',
                    routeName: 'member',
                },
                {
                    image: 'add_blue',
                },
                {
                    name: '预约',
                    image: 'time',
                    routeName: 'reserve',
                },
                {
                    name: '优惠券',
                    image: 'coupon',
                    routeName: 'coupon',
                },
            ],
        };
    },
    methods: {
        jumpPage(routeName) {
            if (this.$route.name === routeName) return;
            this.$router.replace({ name: routeName });
        },
    },
};
</script>
