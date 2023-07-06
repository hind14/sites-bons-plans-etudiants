<template >
  <nav id="nav">

    <router-link to="/">Accueil</router-link> |
    <router-link to="/articles">Voir les articles</router-link> |

    <div v-if="userStore.isAdmin && userStore.isConnected">
      <router-link to="/add-article"> Ajouter un article</router-link> |
      <router-link to="/users"> Listes des utilisateurs</router-link> |
    </div>

    <div v-if="userStore.isConnected">
      <router-link :to="{
        name: 'profil'
      }"> Mon profil </router-link>
      <router-link to="/favorite-articles"> Mes articles favoris</router-link>
      <button @click="userStore.logout" ref="navToUpdate"> Se deconnecter </button>
    </div>

    <div v-else>
      <router-link to="/signup"> S'inscrire </router-link> |
      <router-link to="/login"> Se connecter </router-link>
    </div>

  </nav>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '../stores/useUserStore'
import { ref, onUpdated } from 'vue'

const userStore = useUserStore();

const navToUpdate = ref()

onUpdated(() => {
  if(!userStore.userConnected) {
    navToUpdate.value
    router.push('/login')
}
})

</script>

<style scoped>
#nav {
  border: 2px orange solid;
  background-color: orange;
}
</style>