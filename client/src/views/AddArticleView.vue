<template>
      <div v-if="!submitted">
        <div id="title-field">
          <label for="title">Titre</label>
          <input
           required = "true"
            type="text"
            id="title"
            v-model="article.title"
            name="title"
          />
        </div>
  
        <div id="description-field">
          <label for="description"></label>
          <textarea
          required = "true"
            type="text"
            id="description"
            v-model="article.description"
            placeholder="Ecrivez votre article..."
            name="description"
          >
          </textarea>
        </div>
  
        <button @click="sendArticle" class="btn btn-success">
          ENVOYER l'article
        </button>
      </div>
  
      <div v-else>
        <h4>L'article a été posté !</h4>
        <router-link to="/articles"> Retour à la liste des articles </router-link>
      </div>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
     data() {
      return {
        article: {
          id: null,
          title: "",
          description: "",
        },
        submitted: false,
      }
    },
    methods: {
      sendArticle() {
        const data = {
          title: this.article.title,
          description: this.article.description,
        }
        axios.post('http://localhost:8080/articles', data)
          .then(() => {
            this.submitted = true;
          })
          .catch((error) => {
            console.log(error);
          })
      },
    },
  };
  </script>
  
  <style>
  </style>