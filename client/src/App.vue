<template>
<router-view/>
</template>

<script>
import { useUserStore } from '@/stores/useUserStore';

export default {
  data() {
    return {
      userStore: useUserStore()
    }
  },
  mounted() {
    this.userStore.lastConnectionAvailable()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
