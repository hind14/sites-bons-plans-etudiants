<template>
  <div v-if="!submitted">
    <div id="title-field">
      <label for="title">Titre</label>
      <input required="true" type="text" id="title" v-model="article.title" name="title" />
    </div>

    <div id="content-field">
      <label for="content"></label>
      <textarea required="true" type="text" id="content" v-model="article.content" placeholder="Ecrivez votre article..."
        name="content">
            </textarea>
    </div>

    <div id="category-field">
      <label for="category"></label>
      <select required="true" id="category" v-model="article.category" name="category">
        <option value="Aide logement">Aide logement</option>
        <option value="Aides financières">Aides financières</option>
      </select>
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
        content: "",
        catgory: ""
      },
      submitted: false,
    }
  },
  methods: {
    sendArticle() {
      const data = {
        title: this.article.title,
        content: this.article.content,
        category: this.article.category,
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
}
</script>
  
<style></style>