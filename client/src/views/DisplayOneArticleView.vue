<template>
  <div class="one-article">
    <div id="article-container">
      {{ article.title }}
      <div id="article-content">{{ article.description }}</div>
        <button @click="deleteArticle">Supprimer</button> 
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {

  data() {
    return {
      article: {},
      comments: [],
      comment: {
        content: ""
      },
    }
  },
  methods: {
    deleteArticle() {
      axios.delete(`http://localhost:8080/articles/${this.article.id}`)
        .then(() => {
          this.$router.push({ name: "display-all-articles" });
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

    mounted() {
      const id = this.$route.params.id
      axios.get(`http://localhost:8080/articles/${id}`)
        .then((res) => {
          this.article = res.data;
        })
        .catch((error) => {
          console.log(error);
        }) 
    }
}

</script>

<style></style>
