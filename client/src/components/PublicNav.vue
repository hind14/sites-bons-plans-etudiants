<template >
  <nav id="nav">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

      <div class="relative flex h-16 items-center justify-between">

       <!--<img id="logo" :src="logo" />--> 

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

          <div class="hidden sm:ml-6 sm:block">

            <div class="flex space-x-4">
              <router-link to="/"
                class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold">Accueil
              </router-link>

              <router-link to="/articles"
                class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                Voir les articles
              </router-link>

              <span v-if="userStore.isAdmin && userStore.isConnected">
                <router-link to="/add-article"
                  class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                  Ajouter un article</router-link>
                <router-link to="/users"
                  class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                  Listes des utilisateurs</router-link>
              </span>

              <span v-if="userStore.isConnected && !userStore.isAdmin">
                <router-link :to="{
                  name: 'profil'
                }" class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold">
                  Mon profil </router-link>
                <router-link to="/favorite-articles"
                  class="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"> Mes
                  articles favoris</router-link>
              </span>

            </div>
          </div>
        </div>

        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div v-if="!userStore.isConnected">
            <router-link to="/signup" class="text-gray-300 rounded-md px-3 py-2 text-sm font-medium"> S'inscrire
            </router-link>
            <button
              class="bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <router-link to="/login"> Se connecter </router-link>
            </button>
          </div>
          <div v-else>
            <button @click="userStore.logout" ref="navToUpdate"
              class="bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Se deconnecter </button>
          </div>
        </div>

      </div>


    </div>
  </nav>
</template>

<script setup>
import router from '@/router';
import { useUserStore } from '../stores/useUserStore'
import { ref, onUpdated } from 'vue'
//import logoStudent from '@/assets/logo-student-tips.png'

const userStore = useUserStore()

const navToUpdate = ref()

onUpdated(() => {
  if (!userStore.userConnected) {
    navToUpdate.value
    router.push('/login')
  }
})

//const logo = ref(logoStudent)
</script>

<style scoped>
#nav {
  background-color: azure;
  padding: 5px;
}
</style>