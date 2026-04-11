<script setup>
import { RouterLink } from 'vue-router'
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

    <div class="mb-4 rounded-xl border border-orange-200 bg-white p-5">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-base font-semibold text-orange-900">0001</span>
      </div>

      <p class="mb-3 text-xs text-amber-700">10ft × 7ft × 14ft</p>

      <div class="mb-1">
        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Legs</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 10ft Legs</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 7ft Legs</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Runners</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 10ft Runners</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 4ft Runners</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Boards</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >3 - 10ft Boards</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">
          Miscellaneous
        </p>
        <div class="mb-3 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - Jacks</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - Starters</span
          >
        </div>
      </div>

      <div class="flex gap-2">
        <RouterLink
          to="/EditScaffold/1"
          class="flex-1 rounded-lg border border-yellow-300 bg-yellow-100 py-2 text-center text-sm font-medium text-yellow-800 transition-colors hover:bg-yellow-200"
        >
          Edit
        </RouterLink>
        <RouterLink
          to="/ModifyScaffold/1"
          class="flex-1 rounded-lg border border-orange-300 bg-orange-100 py-2 text-center text-sm font-medium text-orange-800 transition-colors hover:bg-orange-200"
        >
          Modify
        </RouterLink>
      </div>
    </div>

    <div class="mb-4 rounded-xl border border-orange-200 bg-white p-5">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-base font-semibold text-orange-900">0002</span>
      </div>
      <p class="mb-3 text-xs text-amber-700">7ft × 7ft × 10ft</p>

      <div class="mb-1">
        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Legs</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 7ft Legs</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 5ft Legs</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Runners</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 7ft Runners</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 5ft Runners</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Boards</p>
        <div class="mb-3 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 7ft Boards</span
          >
        </div>
      </div>

      <div class="flex gap-2">
        <RouterLink
          to="/EditScaffold/2"
          class="flex-1 rounded-lg border border-yellow-300 bg-yellow-100 py-2 text-center text-sm font-medium text-yellow-800 transition-colors hover:bg-yellow-200"
        >
          Edit
        </RouterLink>
        <RouterLink
          to="/ModifyScaffold/2"
          class="flex-1 rounded-lg border border-orange-300 bg-orange-100 py-2 text-center text-sm font-medium text-orange-800 transition-colors hover:bg-orange-200"
        >
          Modify
        </RouterLink>
      </div>
    </div>

    <div class="mb-4 rounded-xl border border-orange-200 bg-white p-5">
      <div class="mb-2 flex items-center justify-between">
        <span class="text-base font-semibold text-orange-900">0003</span>
      </div>
      <p class="mb-3 text-xs text-amber-700">10ft × 10ft × 21ft</p>

      <div class="mb-1">
        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Legs</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 10ft Legs</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 7ft Legs</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Runners</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - 10ft Runners</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 7ft Runners</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">Boards</p>
        <div class="mb-2 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >6 - 10ft Boards</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - 5ft Boards</span
          >
        </div>

        <p class="mb-1 text-xs font-semibold tracking-wide text-orange-700 uppercase">
          Miscellaneous
        </p>
        <div class="mb-3 flex flex-wrap gap-1.5">
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >8 - Jacks</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >2 - Swivels</span
          >
          <span
            class="rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs text-yellow-800"
            >4 - Beam Clamps</span
          >
        </div>
      </div>

      <div class="flex gap-2">
        <RouterLink
          to="/EditScaffold/3"
          class="flex-1 rounded-lg border border-yellow-300 bg-yellow-100 py-2 text-center text-sm font-medium text-yellow-800 transition-colors hover:bg-yellow-200"
        >
          Edit
        </RouterLink>
        <RouterLink
          to="/ModifyScaffold/3"
          class="flex-1 rounded-lg border border-orange-300 bg-orange-100 py-2 text-center text-sm font-medium text-orange-800 transition-colors hover:bg-orange-200"
        >
          Modify
        </RouterLink>
      </div>
    </div>
  </div>
</template>
