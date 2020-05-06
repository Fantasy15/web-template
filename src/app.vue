<template>
    <div class="tab">
        <svg>
            <use xlink:href="#twitter"></use>
        </svg>
        <router-link :to="{name: 'index'}">index</router-link>
        <router-link :to="{name: 'about'}">home</router-link>
        <router-view />
    </div>
</template>
<script>

export default {
    name: 'app',
}
</script>

<style lang="less">
@import './assets/style/index.less';
@import './assets/style/iconfont.less';
</style>
