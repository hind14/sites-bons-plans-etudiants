<template>
     <h2> Liste de articles </h2>
    <ul>
        <li v-for="article in articles" :key="article.id ">
            {{  article.title  }}
            {{ article.description}} 
            <router-link :to="{ name: 'display-one-article', params: { id : article.id } }" >
                Voir l'article
            </router-link>
        </li>
    </ul>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            articles:[], 
            erreur: ""
        }
    },
    mounted() {
        axios.get('http://localhost:8080/articles/all')
        .then(response => this.articles = response.data)
        .catch(err => this.erreur = err)
    },
 }
</script>
<style>
    
</style>