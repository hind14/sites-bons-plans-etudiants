<template>
  <div id="login" class="grid grid-cols justify-items-center gap-4 content-center">
    <h2>Connexion</h2>

    <Form @submit="login" :validation-schema="schema" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <Field type="email" name="email" v-model="user.email" />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Mot de passe
        </label>
        <Field name="password" type="password" v-model="user.password" />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Se connecter
        </button>
      </div>
    </Form>
  </div>
</template>
  

<script setup>
import http from '@/_services/http.service'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Field, Form } from 'vee-validate'
import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()
const router = useRouter()

const user = reactive({
  email: '',
  password: '',
})


const login = () => {

  http.post('/auth/login', user)
    .then((res) => {

      userStore.login(res.data.token)
      router.push('/')

    })
    .catch((e) => { console.log('err')})
}
</script>
    
      
<style scoped>
#login {
  padding: 50px;
}

#login>h2 {
  padding-bottom: 40px;
  font-weight: bold;
  font-size: 20px;
}
</style> 