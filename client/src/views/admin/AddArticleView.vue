<template>
  <form v-if="!submited" @submit.prevent="sendArticle" enctype="multipart/form-data">
    <div>
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
        <option>Choisir une option</option>
        <option value="Aide logement">Aide logement</option>
        <option value="Aides financières">Aides financières</option>
      </select>
    </div>

    <div>

    </div>
    <div>
      <label for="image"> Télécharger une image</label>
      <input type="file" :v-on="image" ref="image" @change="selectFile" />
    </div>

    <button
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Post it !
    </button>
  </form>

  <div v-else>
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div>
          <p class="font-bold">L'article a été posté yaaay !</p>
        </div>
      </div>
    </div>
    <button>
      <router-link to="/articles"> Retour à la liste des articles </router-link>
    </button>
  </div>
</template>
  
<script>
import http from '../../_services/http.service'

export default {
  data() {
    return {
      article: {},
      image: "",
      submited: false
    }
  },
  methods: {
    selectFile() {
      this.image = this.$refs.image.files[0]
    },
    sendArticle() {
      const formData = new FormData()

      formData.append('article', JSON.stringify(this.article))

      formData.append('image', this.image)

      http.post("/articles", formData)
        .then((res) => {
          this.submited = true
        })
        .catch((error) => {
          console.log(error, "L'envoie de l'article n'a pas pu aboutir")
        })
    },
  },
}
</script>
  
<style></style>