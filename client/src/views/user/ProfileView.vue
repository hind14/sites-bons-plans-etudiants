<template lang="">
    <div id="mon-profil">
        <h2>Mon profil</h2>
        <div>Bienvenue {{user.username}}</div>
        <div> email  {{user.email}}</div>
        <button @click="deleteUser"> Supprimer mon compte </button>
    </div>
</template>
<script>
import http from '@/_services/http.service'
import {useUserStore} from '@/stores/useUserStore'

export default {
    data() {
        return {
            user: {},
        }
    },
    computed: {
        id(){
            return this.$route.params.id
        }
    },
    mounted() {
        http.get(`/users/${this.id}`)
            .then((res) => this.user = res.data)
            .catch(err => console.log("ouppsiii", err))
    },
    methods: {
        deleteUser() {
           http.delete(`/users/${this.id}`) 
           .then(response => response.data)
           .catch(err => console.log("ouppsiii", err))
        }  

    },

}
   


</script>
<style scoped>
    #mon-profil {
        background-color: aquamarine;
    }
</style>