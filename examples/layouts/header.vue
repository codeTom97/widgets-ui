<template>
    <div class="header-container">
        <header class="header">
            <div class="logo">
                <img :src="Logo" alt="">
            </div>
            <div class="menu">
                <router-link to="/components">组件</router-link>
                <a href="https://github.com/codeTom97/widgets-ui" target="_blank">github</a>
            </div>
        </header>
    </div>
</template>

<script>
import Logo from 'assets/logo.jpg'
export default {
    data () {
        return {
            Logo
        }
    }
}
</script>


<style lang="less">
    .header-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        background: #fff;
        border-bottom: 1px solid #DCDFE6;
        box-shadow: 0 0 15px rgba(0, 0, 0, .2);
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1400px;
            height: 80px;
            margin: auto;
            .logo {
                width: 150px;
                height: 40px;
                img {
                    width: 100%;
                }
            }
            .menu {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                line-height: 80px;
                a {
                    font-size: 18px;
                    color: #1989fa;
                    padding: 0 20px;
                    opacity: 0.6;
                    cursor: pointer;
                    text-decoration: none;
                    border-bottom: 2px solid transparent;
                    &.active {
                        color: #1989fa;
                        opacity: 1;
                        border-bottom-color: #1989fa;
                    }
                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
</style>