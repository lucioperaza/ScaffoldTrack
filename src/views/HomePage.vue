<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-12">
    <div class="mb-12 text-center">
      <h1 class="mb-2 text-3xl font-bold text-orange-900">ScaffoldTrack</h1>
      <p class="text-amber-800">Manage your scaffolding inventory with ease</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <RouterLink
        to="/AddScaffold"
        class="flex flex-col items-center rounded-2xl border-2 border-orange-200 bg-white p-8 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
      >
        <h2 class="mb-2 text-lg font-semibold text-orange-900">Add Scaffold</h2>
        <p class="mb-4 text-sm leading-relaxed text-amber-800">
          Log a new scaffold with tag number, dimensions, and full material list.
        </p>
        <span class="mt-auto text-xl text-amber-500">...</span>
      </RouterLink>

      <RouterLink
        to="/ScaffoldList"
        class="flex flex-col items-center rounded-2xl border-2 border-orange-200 bg-white p-8 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
      >
        <h2 class="mb-2 text-lg font-semibold text-orange-900">Scaffold List</h2>
        <p class="mb-4 text-sm leading-relaxed text-amber-800">
          View all tracked scaffolds. Edit details or modify materials on any entry.
        </p>
        <span class="mt-auto text-xl text-amber-500">...</span>
      </RouterLink>
    </div>
  </div>
</template>
