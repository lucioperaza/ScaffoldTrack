<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getScaffolds, deleteScaffold, getScaffoldMaterials } from '../services/api'

const isLoading = ref(true)
const scaffolds = ref([])

async function loadScaffolds() {
  isLoading.value = true

  try {
    const scaffoldData = await getScaffolds()

    for (const scaffold of scaffoldData) {
      const materials = await getScaffoldMaterials(scaffold.id)

      scaffold.materialCount = materials.reduce(
        (total, material) => total + Number(material.quantity),

        0,
      )
    }

    scaffolds.value = scaffoldData
  } finally {
    isLoading.value = false
  }
}

async function handleDelete(id) {
  const confirmed = confirm('Are you sure you want to delete this scaffold?')

  if (!confirmed) {
    return
  }

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
      v-if="isLoading"
      class="rounded-xl border border-orange-200 bg-white p-8 text-center"
    >
      <p class="text-sm text-amber-700">Loading scaffolds...</p>
    </div>
    <div
      v-else-if="!scaffolds.length"
      class="rounded-xl border border-orange-200 bg-white p-8 text-center"
    >
      <h2 class="mb-2 text-lg font-semibold text-orange-900">No scaffolds yet</h2>

      <p class="mb-4 text-sm text-amber-700">Create your first scaffold to get started.</p>

      <RouterLink
        to="/AddScaffold"
        class="inline-block rounded-lg bg-linear-to-r from-amber-400 to-orange-500 px-4 py-2 font-medium text-white"
      >
        Add Scaffold
      </RouterLink>
    </div>

    <div v-else>
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

        <p class="mb-3 text-xs text-orange-700">{{ scaffold.materialCount }} total pieces</p>

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
  </div>
</template>
