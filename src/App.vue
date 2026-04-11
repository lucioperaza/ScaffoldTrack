<script setup>
import { RouterView } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <div class="min-h-screen bg-linear-to-br from-orange-200 via-orange-300 to-orange-200">
    <NavMenu />
    <RouterView />
  </div>
</template>
