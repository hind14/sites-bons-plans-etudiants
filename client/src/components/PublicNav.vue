<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
   <div v-if="isConnected">
    <router-link to="/user"> Mon profil</router-link>
   </div>

  </nav>
  <div v-if="isConnected"> 
    <button @click="logout"> Deconnexion </button>
  </div>
  <div v-else>  
    <router-link to="/signup"> Inscription </router-link> 
  
      <router-link to="/login"> Connexion </router-link>
      </div>
</template>

<script>
import { accountService } from '@/_services'

export default {
  data() {
    return {
      isConnected: ''
   
    }
  },
  mounted() {
    this.isConnected = accountService.isLogged()
  },
  methods: {
    logout() {
      accountService.logout()
      this.isConnected = false
     
        }
  }
}
</script>

<style></style>