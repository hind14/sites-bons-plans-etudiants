<template >
  <nav class="admin-nav">
    <router-link to="/add-article"> Ajouter un article</router-link> |
    <router-link to="/users"> Listes des utilisateurs</router-link> |
    <router-link to="/"> Retour</router-link> |
  
  </nav>
</template>

<script>

export default {
  
}
</script>

<style scoped>
.admin-nav {
  border: 3px red solid
}
</style>