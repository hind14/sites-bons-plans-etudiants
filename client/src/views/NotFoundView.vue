<template>
    <h1>
        Erreur 404: Page "{{ $route.params.pathMatch }}" non trouvée 
    </h1>

    <button @click="toHome"> Page d'accueil</button>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

const toHome = () => {
    router.push({name: 'home'})
}

</script>

<style scoped>
    h1 {
        color: red;
    }
</style>