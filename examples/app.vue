<template>
    <div class="container">
        <Header />
        <div class="main-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import WidgetsUI from 'widgets-ui';
import Header from './layouts/header'
export default {
    components: {
        Header
    },
    data() {
        return {
            msg: "这是Vue主要页面"
        }
    },
    mounted() {
        console.log(WidgetsUI);
    }
}
</script>


<style lang="less">
* {
    margin: 0;
    padding: 0;
}
.main-container {
    width: 1400px;
    margin: 80px auto 0;
}
</style>