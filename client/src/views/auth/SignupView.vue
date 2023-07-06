<template>
  <div class="grid grid-cols justify-items-center gap-4 content-center">
    <h2>N'attendez plus, inscrivez-vous !</h2>

    <Form @submit="toSignUp" :validation-schema="schema" class="w-full max-w-lg">

      <div class="flex flex-wrap -mx-3 mb-6">

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
            Prénom
          </label>

          <Field v-model="user.name" name="name" type="text"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-name" />
          <ErrorMessage name="name" class="text-red-500 text-xs italic" />
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Nom
          </label>

          <Field v-model="user.lastname" name="lastname" type="text"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" />
          <ErrorMessage name="lastname" class="text-red-500 text-xs italic" />
        </div>

      </div>

      <div class="flex flex-wrap -mx-3 mb-6">

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
            Username
          </label>
          <Field v-model="user.username" name="username" type="text"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-username" />
          <ErrorMessage name="username" class="text-red-500 text-xs italic" />
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
            Email
          </label>
          <Field v-model="user.email" name="email" type="email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email" />
          <ErrorMessage name="email" class="text-red-500 text-xs italic" />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-age">
            Age
          </label>
          <Field v-model="user.age" name="age" type="number"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-age" />
          <ErrorMessage name="age" class="text-red-500 text-xs italic" />
        </div>
      </div>


      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Mot de passe
          </label>

          <Field v-model="user.password" name="password" type="password"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" placeholder="**********" />
          <p class="text-gray-600 text-xs italic">Le mot de passe doit contenir au moins une majuscule et 2 nombres.
            Longeur minimum de 8 caractères</p>
          <ErrorMessage name="password" class="text-red-500 text-xs italic" />
        </div>
      </div>

      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">S'inscrire</button>
    </Form>

    <div>
      Déja membre?
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link to="/login">Connectez-vous !</router-link>
      </button>

    </div>

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
    .max(20).typeError("Le mot de passe doit contenirune majuscule").trim("Ce champ esr obligatoire"),
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
    .post('http://localhost:3000/auth/signup', user)
    .then(() => {
      router.push({ name: 'login' })
    })
    .catch((error) => {
      console.log("errr", error)
    })
}
</script>

<style scoped>
#signup-form {
  border: 2px rgb(255, 238, 0) solid;
}
</style>