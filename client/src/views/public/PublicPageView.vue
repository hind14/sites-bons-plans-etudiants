<template>
    <div class="public-page">
            public page
        <PublicNav/>
        <router-view />
    </div>
</template>

<script>
import PublicNav from'../../components/PublicNav.vue'
export default {
    components: {
        PublicNav
    }
}
</script>

<style>
    .public-page {
        border: 2px black solid;
    }
</style>