<template>
    <div id="articles">
        <h2> Liste de articles </h2>
    <ul>
        <li v-for="article in articles" :key="article.id ">
            {{  article.title  }}
            {{ article.content}}
           <img :src="article.image"> 

          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <router-link :to="{ name: 'display-one-article', params: { id : article.id } }" >
                Voir l'article
            </router-link>
          </button> 
        </li>
    </ul>

    </div>
   
</template>

<script>
import http from '../../_services/http.service'

export default {
    data(){
        return {
          
            articles:[
            ], 
            
            erreur: "oups"
        }
    },
    mounted() {
        http.get("/articles")
        .then(response => {
        this.articles = response.data}
        )
        .catch(err => {
            this.erreur = err}
            )
    },
 }
</script>
<style scoped>
   #articles {
    border: 2px rgb(174, 255, 0) solid;
   } 
</style>