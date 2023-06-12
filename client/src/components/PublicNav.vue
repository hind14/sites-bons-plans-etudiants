<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
   
    <!-- <router-link to="/admin">Admin</router-link> |
    <button @click="logout"> Deconnexion </button> -->
    <router-link to="/signup"> Inscription </router-link> 
      <router-link to="/login"> Connexion </router-link>
  </nav>
</template>

<script>
// import { accountService } from '@/_services'

export default {
  methods: {
    // logout() {
    //   accountService.logout()
    //   this.$router.push("/articles")
    // },
    // isLoggedIn() {
    //   accountService.isLogged()
    // }
  }
}
</script>

<style></style>