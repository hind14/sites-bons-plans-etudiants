<template>
    <div class="admin-page">
        <nav class="admin-nav">
    <router-link to="/add-article"> Ajouter un article</router-link> |
    <router-link to="/users"> Listes des utilisateurs</router-link> | 
  </nav>
    </div>
</template>

<script>
import PublicPageView from '../public/PublicPageView.vue'
export default {
    components: {
    PublicPageView
}
}
</script>

<style>
  
</style>