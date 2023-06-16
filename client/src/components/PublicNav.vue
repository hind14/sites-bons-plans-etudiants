<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
   <div v-if="isConnected">
    <router-link to="/user"> Mon profil</router-link>
   </div>
   
    <!--<button @click="logout"> Deconnexion </button> -->
    <router-link to="/signup"> Inscription </router-link> 
      <router-link to="/login"> Connexion </router-link>
  </nav>
</template>

<script>

export default {

}
</script>

<style></style>