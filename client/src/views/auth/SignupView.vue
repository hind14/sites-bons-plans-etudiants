<template>
  <div v-if="!submited.submited" id="signup" class="grid grid-cols justify-items-center gap-4 content-center">
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
        class="bg-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-purple-950 rounded">S'inscrire</button>
    </Form>

    <div id="to-login">
      Déja membre?
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link to="/login">Connectez-vous !</router-link>
      </button>
    </div>

  </div>


  <div v-else>
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div>
          <p class="font-bold">Bravo ! Vous êtes maintenant inscrits, bienvenue parmis nous ! </p>
        </div>
      </div>
    </div>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      <router-link to="/login"> Je me connecte </router-link>
    </button>
  </div>
</template>

<script setup>

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { reactive } from 'vue'
import http from '@/_services/http.service'

YupPassword(yup)
const schema = yup.object({
  name: yup.string().required("Ce champ est obligatoire ").trim(),
  lastname: yup.string().required("Ce champ est obligatoire").trim(),
  username: yup.string().required("Ce champ est obligatoire").trim(),
  age: yup.number().required("Ce champ est obligatoire").typeError("Veuillez indiquer uniqement des nombres"),
  email: yup.string().required("Ce champ est obligatoire").email("L'email n'est pas correct").trim(),
  password: yup.string().required("oups vous n'avez rien écrit")
    .minNumbers(2, 'Le mot de passe doit contenir au moins deux chiffres')
    .max(20).typeError("Le mot de passe doit contenir une majuscule").trim("Ce champ esr obligatoire"),
})

const submited = reactive({ submited: false })

const user = reactive({
  name: '',
  lastname: '',
  username: '',
  age: '',
  email: '',
  password: ''
})

const toSignUp = () => {
  http
    .post('/auth/signup', user)
    .then(() => {
      submited.submited = true
    })
    .catch((error) => {
      console.log(error, "Inscription impossible, veuillez vérifier les champs")
    })
}
</script>

<style scoped>
#signup {
  padding: 50px;
}
#signup>h2 {
 padding-bottom: 40px;
 font-weight: bold;
 font-size: 20px;
}
#to-login {
  padding-top: 50px ;
}
</style>