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
import ArticleRoutes from '../interceptors/authorization.articles'

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
      ArticleRoutes.delete(this.article.id)
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
      ArticleRoutes.get(id)
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
