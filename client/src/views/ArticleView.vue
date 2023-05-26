<template>
     <h2> Liste de articles </h2>
    <ul>
        <li v-for="article in articles" :key="article.id">
            {{  article.title  }}
            {{ article.description}} 
        </li>
    </ul>

</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        axios.get('http://localhost:8080/articles/all')
        .then(response => this.articles = response.data)
        .catch(err => this.erreur = err);
    },
    data(){
        return {
            articles:[], 
            erreur: ""
        }
    },
 }
</script>
<style>
    
</style>