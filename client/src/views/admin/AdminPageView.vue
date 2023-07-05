<template>
  <div class="admin-page">
    <PublicNav />
    <router-view />
    <PulicFooter />
  </div>
</template>

<script setup>
import PublicNav from '@/components/PublicNav.vue'
import PulicFooter from '@/components/PublicFooter.vue'
import { useUserStore } from '@/stores/useUserStore'
const userStore = useUserStore()


</script>

<style>
.admin-page {
  border: 3px blueviolet solid;
}
</style>