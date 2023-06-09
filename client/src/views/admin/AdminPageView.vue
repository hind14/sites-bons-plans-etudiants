<template>
    <div class="admin-page">
            admin page
       <AdminNav/>
        <router-view />
    </div>
</template>

<script>
import AdminNav from'../../components/AdminNav.vue'
export default {
    components: {
        AdminNav
    }
}
</script>

<style>
  
</style>