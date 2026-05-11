<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

import {
  getScaffoldById,
  updateScaffold,
  updateScaffoldMaterials,
  getScaffoldMaterials,
} from '@/services/api'

const route = useRoute()
const router = useRouter()

const scaffoldId = route.params.id

const location = ref('')
const tagNumber = ref('')
const length = ref(0)
const width = ref(0)
const height = ref(0)

const materials = ref({
  '10ft Legs': 0,
  '7ft Legs': 0,
  '5ft Legs': 0,
  '3ft Legs': 0,

  '10ft Runners': 0,
  '7ft Runners': 0,
  '5ft Runners': 0,
  '4ft Runners': 0,
  '2ft Runners': 0,

  '10ft Boards': 0,
  '7ft Boards': 0,
  '5ft Boards': 0,

  Jacks: 0,
  Starters: 0,
  'Right Angles': 0,
  Swivels: 0,
  'Beam Clamps': 0,
})

const materialList = computed(() => {
  return Object.entries(materials.value)
    .filter(([_, quantity]) => quantity > 0)
    .map(([materialName, quantity]) => ({
      materialName,
      quantity,
    }))
})

async function loadScaffold() {
  const scaffold = await getScaffoldById(scaffoldId)

  location.value = scaffold.location
  tagNumber.value = scaffold.tagNumber
  length.value = scaffold.length
  width.value = scaffold.width
  height.value = scaffold.height

  const existingMaterials = await getScaffoldMaterials(scaffoldId)

  existingMaterials.forEach((material) => {
    materials.value[material.materialName] = material.quantity
  })
}

async function handleSubmit() {
  await updateScaffold(scaffoldId, {
    location: location.value,
    tagNumber: tagNumber.value,
    length: Number(length.value),
    width: Number(width.value),
    height: Number(height.value),
  })
  await updateScaffoldMaterials(scaffoldId, materialList.value)

  router.push('/ScaffoldList')
}

onMounted(() => {
  loadScaffold()
})
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-6">
    <RouterLink
      to="/ScaffoldList"
      class="mb-5 inline-block text-sm text-amber-700 hover:text-orange-600"
    >
      ← Back to List
    </RouterLink>

    <h1 class="mb-1 text-2xl font-bold text-orange-900">Edit Scaffold</h1>
    <p class="mb-6 text-sm text-amber-800">Correct any mistakes in the scaffold details</p>

    <div class="mb-4 rounded-xl border border-orange-200 bg-white p-5">
      <h2 class="mb-4 border-b border-yellow-200 pb-2 text-sm font-semibold text-amber-700">
        Scaffold Identification
      </h2>
      <div class="mb-4">
        <label class="mb-1 block text-xs font-medium text-amber-800"> Location </label>

        <input
          v-model="location"
          type="text"
          class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 transition-colors outline-none focus:border-amber-400"
        />
      </div>
      <div>
        <label class="mb-1 block text-xs font-medium text-amber-800">Tag Number</label>
        <input
          v-model="tagNumber"
          type="text"
          class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 transition-colors outline-none focus:border-amber-400"
        />
      </div>
    </div>

    <div class="mb-4 rounded-xl border border-orange-200 bg-white p-5">
      <h2 class="mb-4 border-b border-yellow-200 pb-2 text-sm font-semibold text-amber-700">
        Scaffold Dimension L x W x H
      </h2>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label class="mb-1 block text-xs font-medium text-amber-800">Length (ft)</label>
          <input
            v-model="length"
            type="number"
            min="0"
            class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 transition-colors outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-medium text-amber-800">Width (ft)</label>
          <input
            v-model="width"
            type="number"
            min="0"
            class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 transition-colors outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label class="mb-1 block text-xs font-medium text-amber-800">Height (ft)</label>
          <input
            v-model="height"
            type="number"
            min="0"
            class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 transition-colors outline-none focus:border-amber-400"
          />
        </div>
      </div>
    </div>

    <div class="mb-6 rounded-xl border border-orange-200 bg-white p-5">
      <h2 class="mb-3 border-b border-yellow-200 pb-2 text-sm font-semibold text-amber-700">
        Material List
      </h2>
      <p class="mb-3 text-xs text-amber-700">Update quantities as needed</p>

      <p class="mb-2 text-xs font-semibold tracking-wide text-orange-700 uppercase">Legs</p>
      <div class="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >10ft Legs</label
          >
          <input
            v-model="materials['10ft Legs']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >7ft Legs</label
          >
          <input
            v-model="materials['7ft Legs']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >5ft Legs</label
          >
          <input
            v-model="materials['5ft Legs']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >3ft Legs</label
          >
          <input
            v-model="materials['3ft Legs']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <p class="mb-2 text-xs font-semibold tracking-wide text-orange-700 uppercase">Runners</p>
      <div class="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >10ft Runners</label
          >
          <input
            v-model="materials['10ft Runners']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >7ft Runners</label
          >
          <input
            v-model="materials['7ft Runners']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >5ft Runners</label
          >
          <input
            v-model="materials['5ft Runners']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >4ft Runners</label
          >
          <input
            v-model="materials['4ft Runners']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >2ft Runners</label
          >
          <input
            v-model="materials['2ft Runners']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <p class="mb-2 text-xs font-semibold tracking-wide text-orange-700 uppercase">Boards</p>
      <div class="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >10ft Boards</label
          >
          <input
            v-model="materials['10ft Boards']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >7ft Boards</label
          >
          <input
            v-model="materials['7ft Boards']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >5ft Boards</label
          >
          <input
            v-model="materials['5ft Boards']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <p class="mb-2 text-xs font-semibold tracking-wide text-orange-700 uppercase">
        Miscellaneous
      </p>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800">Jacks</label>
          <input
            v-model="materials['Jacks']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >Starters</label
          >
          <input
            v-model="materials['Starters']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >Right Angles</label
          >
          <input
            v-model="materials['Right Angles']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800">Swivels</label>
          <input
            v-model="materials['Swivels']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >Beam Clamps</label
          >
          <input
            v-model="materials['Beam Clamps']"
            type="number"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
      </div>
    </div>

    <button
      class="w-full cursor-pointer rounded-lg border-none bg-linear-to-r from-amber-400 to-orange-500 py-3 font-semibold text-white transition-all hover:opacity-90 active:scale-95"
      @click="handleSubmit"
    >
      Save Changes
    </button>
  </div>
</template>
