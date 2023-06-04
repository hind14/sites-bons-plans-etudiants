<template>
  <h2>N'attendez plus, inscrivez-vous !</h2>

  <Form @submit="toSignUp" :validation-schema="schema">
    Prénom : 
    <Field name="name"  v-model="user.name" /> 
    <ErrorMessage name="name" />

    Nom : 
    <Field name="lastname"   v-model="user.lastname"/>
    <ErrorMessage name="lastname" />

    Username : 
    <Field name="username"  v-model="user.username"/> 
    <ErrorMessage name="username" />

    Age : 
    <Field name="age"   v-model="user.age"/>
    <ErrorMessage name="age" />

    Email : 
    <Field name="email"  v-model="user.email"/> 
    <ErrorMessage name="email" />

    Mot de passe :
    <Field name="password" type="password" v-model="user.password"/> 
    <ErrorMessage name="password" />

    <button>S'inscrire</button>
  </Form>

  <div>
    Déja membre?
    <router-link to="/login">Connectez-vous !</router-link>
  </div>

</template>

<script setup>

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import axios from 'axios'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

YupPassword(yup)
const schema = yup.object({
  name: yup.string().required("Ce champ est obligatoire ").trim(),
  lastname: yup.string().required("Ce champ est obligatoire").trim(),
  username: yup.string().required("Ce champ est obligatoire").trim(),
  age: yup.number().required("Ce champ est obligatoire").typeError("Veuillez indiquer uniqement des nombres"),
  email: yup.string().required("Ce champ est obligatoire").email("L'email n'est pas correct").trim(),
  password: yup.string().required("oups vous n'avez rien écrit")
  .minNumbers(2, 'Le mot de passe doit contenir  au moins deux chiffres')
  .max(20).typeError("Le mot de passe doit contenirune majuscule").trim("oups vous n'avez rien écrit"),
})

const router = useRouter()
const user = reactive({ 
      name: '',
      lastname: '',
      username: '',
      age: '',
      email: '',
      password: ''
    })

const toSignUp = () => {
  axios
    .post('http://localhost:8080/auth/signup', user)
    .then(() => {
      router.push({ name: 'login'})
    })
    .catch((error) => {
      console.log("errr", error)
    })
}
</script>

<style></style>