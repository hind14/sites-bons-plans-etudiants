<template>
    <div class="admin-page">
            admin page
       <AdminNav/>
       <PublicPageView/>
    </div>
</template>

<script>
import AdminNav from'../../components/AdminNav.vue'
import PublicPageView from '../public/PublicPageView.vue'
export default {
    components: {
    AdminNav,
    PublicPageView
}
}
</script>

<style>
  
</style>