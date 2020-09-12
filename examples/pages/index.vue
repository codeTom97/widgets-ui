<template>
    <div class="home-container">
        <h1>快速构建成型网站的组件库</h1>
        <h2>Widgets, 一套基于Vue2.0开发的组件库</h2>
        <div class="banner">
            <img :src="BannerImg" alt="">
        </div>
    </div>
</template>

<script>
import Header from '../layouts/header.vue';
import BannerImg from '../assets/images/banner.png';

export default {
    components: {
        Header
    },
    data () {
        return {
            BannerImg
        }
    }
}
</script>

<style lang="less">
.home-container {
    padding-top: 30px;
    text-align: center;
    h1 {
        font-size: 36px;
        font-weight: 500;
        line-height: 1.5;
        color: #666;
    }
    h2 {
        font-size: 18px;
        font-weight: 400;
        color: #999;
        margin-top: 20px;
    }
    .banner {
        margin-top: 20px;
        img {
            width: 80%;
        }
    }
}
</style>