<template>
    <div class="layout-container">
        <aside></aside>
        <div class="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Aside from './aside.vue';

export default {
    components: {
        Aside
    }
}
</script>