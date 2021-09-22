<template>
    <div class="text_center navigate">
        <img
            v-show="$route.meta.index > 1"
            src="../assets/images/arrow_white.png"
            @click="$router.go(-1)"
        />
        {{ $route.meta.title }}
    </div>
</template>
