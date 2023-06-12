<template>
    <h2>Connexion</h2>

    <Form @submit="login" :validation-schema="schema">

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
import { accountService } from '@/_services'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Field, Form, ErrorMessage } from 'vee-validate'

const router = useRouter()

const user = reactive({
    email: '',
    password: '',
})

const login = () => {
    accountService.login(user)
        .then((res) => {
            accountService.saveToken(res.data.token)
            if(res.data.role == 'admin') {
                console.log("ADMIN");
                router.push('/admin')
            } else {
                router.push('/user')
            }
           
             console.log(res.data);
             console.log(res.data.role);
        
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