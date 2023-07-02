<template >
  
  <nav id="nav">

    <router-link to="/">Accueil</router-link> |
    <router-link to="/articles">Voir les articles</router-link> |
   
    <div v-if="userStore.isConnected">
      <router-link to="/profile"> Mon profil </router-link>
      <router-link to="/favorite-articles"> Mes artciles favoris</router-link>
    <button @click="userStore.logout"> Se deconnecter </button>
  </div>

  <div v-else>
    <router-link to="/signup"> S'inscrire </router-link> |
    <router-link to="/login"> Se connecter </router-link>
  </div>

  </nav>
  
</template>

<script setup>
import { useUserStore } from '../stores/useUserStore'

const userStore = useUserStore();

</script>

<style scoped>
#nav {
  border: 2px orange solid;
  background-color: orange;
}
</style>