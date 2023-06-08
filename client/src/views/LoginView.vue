<template>
    <h2>Connexion</h2>

    <Form @submit="toLogin" :validation-schema="schema">

        Email :
        <Field name="email" v-model="user.email" />
        <ErrorMessage name="email" />

        Mot de passe :
        <Field name="password" type="password" v-model="user.password" />
        <ErrorMessage name="password" />

        <button>Se connecter</button>

    </Form>
</template>
    

<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Field, Form, ErrorMessage } from 'vee-validate'

const router = useRouter()
const user = reactive({
    email: '',
    password: ''
})

const toLogin = () => {
    axios.post('http://localhost:8080/auth/login', user)
        .then((res) => {
            localStorage.setItem("user", res.data)
            router.push('/articles')
        })
        .catch((error) => {
            if(error.data !=user.password) {
                console.log("bad password");
            }
            console.log("Erreur lors de la connexion", error)
        })
}
</script>
      
<style></style>