<template >
    <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/add-article"> Ajouter un article</router-link> |
    <router-link to="/login"> Connexion</router-link>  |
  </nav>
  <router-view/>
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>