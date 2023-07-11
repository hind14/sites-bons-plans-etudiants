<template>
    <div id="user-page">
        <PublicNav />
        <router-view />
        <span id="footer"><PulicFooter /></span>
    </div>
</template>


<script>
import PublicNav from '../../components/PublicNav.vue'
import PulicFooter from '../../components/PublicFooter.vue'


export default {
    components: {
        PublicNav,
        PulicFooter,
    }
}
</script>


<style scoped>
</style>