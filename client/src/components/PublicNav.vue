<template >
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <!-- <router-link to="/add-article"> Ajouter un article</router-link> | -->
    <router-link to="/signup"> Inscription </router-link>
    <div>
      <router-link to="/login"> Connexion </router-link>
      <router-link to="/" @click="logout" class="router-style"> Deconnexion</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("user")
      this.$router.push("/articles")
    }
  }
}
</script>

<style></style>