<template>
  <div class="one-article">
    <div id="article-container">
     <h2>{{ article.title }}</h2> 
      <div id="article-content">{{ article.content }}</div>
      <img :src="article.image" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin" @click="updateArticle">Modifier</button>  
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin" @click="deleteArticle">Supprimer</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore'
import http from '../../_services/http.service'
import { mapStores } from 'pinia'

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
  computed: {
    ...mapStores(useUserStore)
  },
  methods: {
    updateArticle() {
      http.put(`/articles/${this.article.id}`)
        .then(() => {
          console.log("update");
        })
        .catch((error) => {
          console.log("error")
        })
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
