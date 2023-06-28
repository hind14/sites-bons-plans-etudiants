<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <div v-if="user != null">
      <router-link to="/user/:id/profile"> Mon profil</router-link>
      <router-link to="/user/:id/favorite-articles"> Mes artciles favoris</router-link>
    </div>

  </nav>
  <div v-if="user != null">
    <button @click="logout"> Deconnexion </button>
  </div>
  <div v-else>
    <router-link to="/signup"> Inscription </router-link>

    <router-link to="/login"> Connexion </router-link>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/useUserStore'
import { computed } from 'vue'

const userStore = useUserStore();
const user = computed(() => {
   userStore.user
 })

const logout = () => {
  localStorage.removeItem('user')
  userStore.user = null
}

</script>

<style></style>