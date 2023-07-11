<template>
    <div id="article">
        <div id="article-container">
            <h2 class="text-4xl font-bold dark:text-white">{{ article.title }}</h2>

            <img id="img" :src="article.image" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin"
                @click="goToUpdateArticle">Modifier</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin"
                @click="deleteArticle">Supprimer</button>
                <div id="article-content">{{ article.content }}</div>
        </div>

        

        <!-- Comments-->
            <div id="comment-container"> 
        <div  v-if="usersStore.isConnected">

            <textarea v-model="comment.commentContent" id="message" rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Laisser un commentaire..."></textarea>
            <button @click.prevent="sendComment"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ajoutez votre commentaire
            </button>
        </div>

        <ul >
            <li v-for="(comment, index) in article.comments" :key="comment.id" id="comments-list"  class="pb-3 sm:pb-4">

             <span id="comment-content">{{ comment.commentContent }}</span>   
                <button v-if="usersStore.isAdmin || usersStore.userId == comment.userId"
                    @click="deleteComment(comment.id, index)"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Supprimer
                </button>
            </li>
        </ul>
    </div>

    </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore'
import http from '@/_services/http.service'
import { mapStores } from 'pinia'

export default {
    data() {
        return {
            article: {},
            comments: [],
            comment: {}
        };
    },
    computed: {
        ...mapStores(useUserStore)
    },
    methods: {
        goToUpdateArticle() {
            this.$router.push({ name: "modify-article", params: { id: this.article.id } });
        },
        deleteArticle() {
            http.delete(`/articles/${this.article.id}`)
                .then(() => {
                    this.$router.push({ name: "display-all-articles" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        sendComment() {
            let data = {
                commentContent: this.comment.commentContent,
                userId: this.usersStore.userId
            }

            http.post(`/articles/${this.article.id}/com`, data)
                .then((res) => {
                    data = res.data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteComment(id, index) {
            http.delete(`/articles/${this.article.id}/com/${id}`)
                .then(() => this.comments.splice(index, 1))
                .catch(() => console.log("Problème lors de la suppression"))
        }
    },
    mounted() {
        const id = this.$route.params.id

        http.get(`/articles/${id}`)
            .then((res) => {
                this.article = res.data
            })
            .catch((error) => {
                console.log(error);
            })

        http.get(`/articles/${id}/com`)
            .then((res) => {
                this.comments = res.data;
            })
            .catch((error) => {
                console.log(error);
            })

    }
}

</script>

<style scoped>
#article-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#comment-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#comments-list {
    padding: 10px;
    margin-top: 10px;
}
#comment-content {
    box-shadow: 2px 2px 2px gray;
    padding: 10px;
    border-radius: 10px;
}
</style>
