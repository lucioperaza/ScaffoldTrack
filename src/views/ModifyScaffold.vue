<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-2xl px-4 py-6">
    <RouterLink
      to="/ScaffoldList"
      class="mb-5 inline-block text-sm text-amber-700 hover:text-orange-600"
    >
      ← Back to List
    </RouterLink>

    <h1 class="mb-1 text-2xl font-bold text-orange-900">Modify Scaffold</h1>
    <p class="mb-6 text-sm text-amber-800">
      Adding extra materials to scaffold <strong>0001</strong>
    </p>

    <div class="mb-4 rounded-xl border border-orange-200 bg-amber-50 p-5">
      <h2 class="mb-3 border-b border-yellow-200 pb-2 text-sm font-semibold text-amber-700">
        Current Materials
      </h2>
      <div class="flex flex-wrap gap-1.5">
        <span
          class="rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs text-yellow-800"
          >4 - 10ft Legs</span
        >
        <span
          class="rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs text-yellow-800"
          >4 - 7ft Legs</span
        >
        <span
          class="rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs text-yellow-800"
          >2 - 10ft Runners</span
        >
        <span
          class="rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-xs text-yellow-800"
          >3 - 10ft Boards</span
        >
      </div>
    </div>

    <div class="mb-6 rounded-xl border border-orange-200 bg-white p-5">
      <h2 class="mb-3 border-b border-yellow-200 pb-2 text-sm font-semibold text-amber-700">
        Add Extra Materials
      </h2>
      <p class="mb-3 text-xs text-amber-700">
        Enter additional quantities to add on top of existing counts
      </p>

      <p class="mb-2 text-xs font-semibold tracking-wide text-orange-700 uppercase">Legs</p>
      <div class="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800"
            >10ft Legs</label
          >
          <input
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
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
            type="number"
            value="0"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
        <div
          class="flex items-center gap-2 rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5"
        >
          <label class="flex-1 text-xs font-medium whitespace-nowrap text-amber-800">Swivels</label>
          <input
            type="number"
            value="0"
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
            type="number"
            value="0"
            min="0"
            class="w-12 rounded-md border border-orange-200 bg-white px-1 py-1 text-center text-orange-900 outline-none focus:border-amber-400"
          />
        </div>
      </div>
    </div>

    <button
      class="w-full cursor-pointer rounded-lg border-none bg-linear-to-r from-amber-400 to-orange-500 py-3 font-semibold text-white transition-all hover:opacity-90 active:scale-95"
    >
      Update Materials
    </button>
  </div>
</template>
