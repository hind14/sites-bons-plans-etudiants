<template>
    <div id="articles" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul>
            <li v-for="article in articles" :key="article.id">
                <router-link :to="{ name: 'display-one-article', params: { id: article.id } }">
                    <img :src="article.image" class="rounded-t-lg">
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ article.title }}
                        </h5>
                    </div>

                </router-link>


                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Salairé? Etudiant? Tu découvriras toutes les
                    informations qui pourront t'aider au cours de formation ! </p>
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <router-link :to="{ name: 'display-one-article', params: { id: article.id } }">
                        Voir l'article
                    </router-link>
                </button>
            </li>
        </ul>

    </div>
</template>

<script>
import http from '@/_services/http.service'

export default {
    data() {
        return {
            articles: [],
            erreur: "oups"
        }
    },
    mounted() {
        http.get("/articles")
            .then(response => {
                this.articles = response.data
            }
            )
            .catch(err => {
                this.erreur = err
            })
    },
}
</script>
<style scoped>
#articles {
    margin-top: 40px;
    margin-left: 40px;
}
</style>