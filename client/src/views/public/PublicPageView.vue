<template>
    <div id="public-page">

        <PublicNav />

        <router-view />
 
        <PulicFooter />

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