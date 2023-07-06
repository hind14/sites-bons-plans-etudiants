<template>
    <div id="mon-profil">
        <h2>Mon profil</h2>
        <div>Bienvenue {{ user.username }}</div>
        <div> email {{ user.email }}</div>
        <button @click="deleteUser"> Supprimer mon compte </button>
    </div>
</template>
<script>
import http from '@/_services/http.service'
// import { useUserStore } from '@/stores/useUserStore'
// import { onMounted } from 'vue'


export default {
    data() {
        return {
            user: {}
        }
    },
    computed: {
        id(){
            return this.$route.params.id
        },
    },
    methods: {
        deleteUser() {
            http.delete(`/users/${this.id}`)
                .then(() => this.$router.push({ name: 'login'}))
                .catch(err => alert(err))

        },
    },
    mounted(){
        this.id = this.$route.params.id
        http.get(`/users/${this.id}`)
            // .then((res) => this.user = res.data.user)
            .then(res => console.log(res, "okkk"))
            .catch(err => alert(err))
    }

}
// const userStore = useUserStore()

// const user = reactive({
//     username: null
// })

// const id = userStore.getUserId

// onMounted(() => {
//     http.get(`/users/${id}`)
//         .then((res) =>{
//             res.data.user
//             console.log(res);
//         })
//         .catch(err => console.log("ouppsiii", err))
// })

// const deleteUser = (id) => {

//     http.delete(`/users/${id}`)
//         .then(res => console.log(res, "delete user"))
//         .catch(err => console.log("ouppsiii", err))
// }

</script>
<style scoped>
#mon-profil {
    background-color: aquamarine;
}
</style>