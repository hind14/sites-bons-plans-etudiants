<template>
  <form v-if="!submitted"  enctype="multipart/form-data">
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

    <div v-if="message"
    :class="`message ${error ? 'is-danger' :'is-success'}`">
    {{  message }}
    </div>
    <div>
      <label for="file"> Télécharger le fichier</label>
      <input type="file" ref="file" @change="selectFile" />
    </div>

    <button @click="sendArticle" class="btn btn-success">
      ENVOYER l'article
    </button>
  </form>

  <div v-else>
    <h4>L'article a été posté !</h4>
    <router-link to="/articles"> Retour à la liste des articles </router-link>
  </div>


 
 


</template>
  
<script>
import http from '../../_services/http.service'

export default {
  data() {
    return {
      article: {
        id: null,
        title: "",
        content: "",
        category: "",
        file: ""
      },
      message: "",
      error: false,
      submitted: false,
    }
  },
  methods: {
    selectFile() {
      this.article.file = this.$refs.file.files[0]
      this.error = false
      this.message =""
    },


    sendFile() {
      const formData = new FormData()
      formData.append('file', this.file)

      http.post('/', formData)
      .then((res) => {
        this.message = "L'image a été enregistré avec succès"
        this.file = ""
        this.error = false
      })
      .catch((err) => {
        this.message = "L'image n'a pas pu être enregistré"
        this.error = true
      })
    },



    sendArticle() {
      const formData = new FormData()
     
      const data = {
        title: this.article.title,
        file: this.article.file,
        content: this.article.content,
        category: this.article.category,
      }

      formData.append('data', data)

      http.post("/articles", formData)
        .then(() => {
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
  
<style></style>