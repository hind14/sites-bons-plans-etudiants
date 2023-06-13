<template>
  <div class="one-article">
    <div id="article-container">
      {{ article.title }}
      <div id="article-content">{{ article.content }}</div>
      <button @click="updateArticle">Modifier</button> 
        <button @click="deleteArticle">Supprimer</button> 
    </div>
  </div>
</template>

<script>
import http from '../../_services/http.service'

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
    updateArticle() {
      
    },
    deleteArticle() {
      http.delete(`/articles/${this.article.id}`)
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
      http.get(`/articles/${id}`)
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
