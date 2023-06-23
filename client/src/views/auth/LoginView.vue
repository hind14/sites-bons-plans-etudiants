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
import { accountService } from '@/_services'
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
    accountService.login(user)
        .then((res) => {
            if (res.data.role == 'admin') {
                console.log("ADMIN");
                router.push('/admin')
            } else {
                router.push('/')
            }

            userStore.user = res.data
            localStorage.setItem("user", user)

        })
        .catch((error) => {
            if (error.data != user.password) {
                console.log("bad password");
                message = "Mauvais mot de passe"
            }
            console.log("Erreur lors de la connexion", error)
            message = "Vous n'êtes pas inscrit"
        })
}
</script>
      
<style></style>