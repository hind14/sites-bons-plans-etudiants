<template>
    <div class="one-article">
        <div id="article-container">
            <h2>{{ article.title }}</h2>

            <img :src="article.image" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin"
                @click="updateArticle">Modifier</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-if="usersStore.isAdmin"
                @click="deleteArticle">Supprimer</button>
        </div>

        <div id="article-content">{{ article.content }}</div>

        <!-- Comments-->

        <div v-if="usersStore.isConnected">
            <div>
                <textarea id="textarea-comment" type="text" required v-model="comment.commentContent"
                    placeholder="Ecrivez votre commentaire..." name="content">
          </textarea>
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="sendComment">
                Ajouter votre commentaire
            </button>
        </div>

        <ul>
            <li v-for="(comment, index) in comments" :key="comment.id" id="comments-list">
                {{ comment.commentContent }}
                <button v-if="usersStore.userId == comment.userId" @click="updateComment(comment.id)"> Modifier </button>
                <button  v-if="usersStore.isAdmin || usersStore.userId == comment.userId" @click="deleteComment(comment.id, index)"> Supprimer </button>
            </li>
        </ul>

        <!-- <div> com {{ comment.commentContent }}</div>
    <Comment @send-data="displayComment"/> -->

    </div>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore'
import http from '../../_services/http.service'
import { mapStores } from 'pinia'
// import Comment from '@/components/Comment.vue'

export default {
    // components: { Comment },
    data() {
        return {
            article: {},
            comments: [],
            comment: {},
        };
    },
    computed: {
        ...mapStores(useUserStore)
    },
    methods: {
        updateArticle() {
            http.put(`/articles/${this.article.id}`)
                .then(() => {
                    console.log("update");
                })
                .catch(() => {
                    console.log("error");
                });
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
        // displayComment(value) {
        //     this.comment = value
        // }

        sendComment() {
            let data = {
                commentContent: this.comment.commentContent,
                userId: this.usersStore.userId
            }

            http.post(`/articles/${this.article.id}/com`, data)
                .then((res) => {
                    data = res.data
                    this.comments.push(data.commentContent)
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        updateComment() {

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
                this.article = res.data;
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
#comment-list {
    background-color: aquamarine;
}
</style>
