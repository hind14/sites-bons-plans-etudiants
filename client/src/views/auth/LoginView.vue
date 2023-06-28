<template>
    <h2>Connexion</h2>

    <Form @submit="login" :validation-schema="schema">

        Email :
        <Field name="email" v-model="user.email" />

        Mot de passe :
        <Field name="password" type="password" v-model="user.password" />
       
        <button>Se connecter</button>

    </Form>
</template>
    

<script setup>
import  http  from '../../_services/http.service'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Field, Form } from 'vee-validate'
import { useUserStore } from '../../stores/useUserStore'

const userStore = useUserStore()
const router = useRouter()

const user = reactive({
    email: '',
    password: '',
})


const login = () => {

    http.post('/auth/login', user)
        .then((res) => {

            userStore.user = localStorage.setItem("user", JSON.stringify(res.data.token))
            userStore.user = res.data

            if (res.data.role == 'admin') {
                console.log("ADMIN");
                router.push('/admin')
            } else {
                router.push('/')
            } 

        })
        .catch((error) => {
            if (error.data != user.password) {
                console.log("bad password");
            }
            console.log("Erreur lors de la connexion", error)
        })
}
</script>
      
<style></style>