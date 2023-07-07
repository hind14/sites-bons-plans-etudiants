<!-- <template >
    <div id="comment-container">
        <div>
            <div>
                <textarea id="textarea-comment" type="text" required v-model="comment"
                    placeholder="Ecrivez votre commentaire..." name="content">
          </textarea>
            </div>

            <button @click="sendComment" class="btn btn-success">
                Ajouter votre commentaire
            </button>
        </div>


        <ul>
            <li v-for="comment in comments" :key="comment.id" id="comment-list">

                <div>{{ comment }}</div>

                <button @click="modifyComment(comment)">
                    Modifier
                </button>
                <button @click="deleteComment(comment)">
                    Supprimer
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
            comments: [],
            comment: {}
        }
    },
    methods: {
        sendComment() {
            this.$emit("sendData", this.comment)
        },
        modifyComment() {
            console.log("modify");
        },
        deleteComment() {
            console.log("delete");
        }
    },
    mounted() {
        this.sendComment() 
            http.get(`articles/${id}/com`)
            .then((res) => {
                this.comments = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
       
    }
}
</script>

<style scoped>
#comment-container {
    border: 2px palevioletred solid;
}
</style> -->
