<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { userStore } from 'Store/userInfo';

export default {
    name: 'index',
    computed: {
        ...mapState(userStore, [
            'msg',
        ]),
    },
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
