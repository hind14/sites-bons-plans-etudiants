<template>
    <div id="user-page">
        <PublicNav />
       <div>user page</div> 
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
#user-page {
    border: 2px purple solid;
}
</style>