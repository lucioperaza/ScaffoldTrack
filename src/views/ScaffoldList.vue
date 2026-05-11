<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getScaffolds, deleteScaffold } from '../services/api'

const scaffolds = ref([])

async function loadScaffolds() {
  scaffolds.value = await getScaffolds()
}

async function handleDelete(id) {
  await deleteScaffold(id)

  await loadScaffolds()
}

onMounted(() => {
  loadScaffolds()
})
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-6">
    <RouterLink
      to="/"
      class="mb-5 inline-block text-sm text-amber-700 hover:text-orange-600"
    >
      ← Back Home
    </RouterLink>

    <h1 class="mb-1 text-2xl font-bold text-orange-900">Scaffold List</h1>
    <p class="mb-6 text-sm text-amber-800">All tracked scaffolds</p>

    <div
      v-for="scaffold in scaffolds"
      :key="scaffold.id"
      class="mb-4 rounded-xl border border-orange-200 bg-white p-5"
    >
      <div class="mb-2 flex items-center justify-between">
        <span class="text-base font-semibold text-orange-900">
          {{ scaffold.tagNumber }}
        </span>
      </div>

      <p class="mb-3 text-xs text-amber-700">
        {{ scaffold.length }}ft × {{ scaffold.width }}ft × {{ scaffold.height }}ft
      </p>

      <div class="mb-3">
        <p class="text-sm font-medium text-orange-800">
          {{ scaffold.location }}
        </p>
      </div>

      <div class="flex gap-2">
        <RouterLink
          :to="`/EditScaffold/${scaffold.id}`"
          class="flex-1 rounded-lg border border-yellow-300 bg-yellow-100 py-2 text-center text-sm font-medium text-yellow-800 transition-colors hover:bg-yellow-200"
        >
          Edit...
        </RouterLink>

        <RouterLink
          :to="`/ModifyScaffold/${scaffold.id}`"
          class="flex-1 rounded-lg border border-orange-300 bg-orange-100 py-2 text-center text-sm font-medium text-orange-800 transition-colors hover:bg-orange-200"
        >
          Modify
        </RouterLink>

        <button
          class="flex-1 rounded-lg border border-red-300 bg-red-100 py-2 text-sm font-medium text-red-800 transition-colors hover:bg-red-200"
          @click="handleDelete(scaffold.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
