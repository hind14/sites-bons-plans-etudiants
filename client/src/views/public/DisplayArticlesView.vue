<template>
     <h2> Liste de articles </h2>
    <ul>
        <li v-for="article in articles" :key="article.id ">
            {{  article.title  }}
            {{ article.content}} 
            <router-link :to="{ name: 'display-one-article', params: { id : article.id } }" >
                Voir l'article
            </router-link>
        </li>
    </ul>

</template>

<script>
import http from '../../_services/http.service'

export default {
    data(){
        return {
            articles:[], 
            erreur: "oups"
        }
    },
    mounted() {
        http.get("/articles/all")
        .then(response => this.articles = response.data)
        .catch(err => this.erreur = err)
    },
 }
</script>
<style>
    
</style>