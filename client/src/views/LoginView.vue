<template>
    <h1>Authentification</h1>
    <form @submit.prevent="connexion">
        <div>
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" required="true">
        </div>
        <div>
            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" required="true">
        </div>
        <button>Se connecter</button>
    </form>
</template>
    

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        connexion() {
            axios.post('http://localhost:8080/auth/connexion', { email: this.email, password: this.password })
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify(res.data))
                    this.$router.push('/articles')
                    console.log(res.data.token)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>
      
<style></style>