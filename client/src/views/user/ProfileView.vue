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
import { mapStores } from 'pinia'
import { useUserStore } from '@/stores/useUserStore'

export default {
    data() {
        return {
            user: {}
        }
    },
    computed: {
        ...mapStores(useUserStore)
    },
    methods: {
        deleteUser() {
            alert("T'es sur??")

            http.delete(`/users/${this.usersStore.userId}`)
                .then(() => {
                    this.usersStore.deleteUser()
                    this.$router.push({ name: 'login'})
                })
                .catch(err => alert(err))

        },
    },
    mounted(){
      
        http.get(`/users/${this.usersStore.userId}`)
            .then((res) => this.user = res.data.user)
            .catch(err => alert(err))
    }
}
</script>
<style scoped>
#mon-profil {
    background-color: aquamarine;
}
</style>