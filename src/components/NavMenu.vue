<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex h-14 items-center gap-6 bg-linear-to-r from-amber-400 to-orange-600 px-6 shadow-md"
  >
    <RouterLink
      to="/"
      class="flex items-center gap-2 text-lg font-bold text-white no-underline"
      @click="closeMenu"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 6h18v2H3V6m2 4h14v2H5v-2m3 4h8v2H8v-2z" />
      </svg>
      ScaffoldTrack
    </RouterLink>

    <div class="ml-auto hidden gap-1 md:flex">
      <RouterLink
        to="/"
        class="rounded-lg border border-white/25 bg-white/15 px-4 py-1.5 text-sm text-white no-underline transition-colors hover:bg-white/30"
        exact-active-class="bg-white/35 font-semibold"
        @click="closeMenu"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/AddScaffold"
        class="rounded-lg border border-white/25 bg-white/15 px-4 py-1.5 text-sm text-white no-underline transition-colors hover:bg-white/30"
        active-class="bg-white/35 font-semibold"
        @click="closeMenu"
      >
        Add Scaffold
      </RouterLink>
      <RouterLink
        to="/ScaffoldList"
        class="rounded-lg border border-white/25 bg-white/15 px-4 py-1.5 text-sm text-white no-underline transition-colors hover:bg-white/30"
        active-class="bg-white/35 font-semibold"
        @click="closeMenu"
      >
        Scaffold List
      </RouterLink>
    </div>

    <button
      class="ml-auto flex h-5 w-6 cursor-pointer flex-col justify-between border-none bg-transparent p-0 md:hidden"
      aria-label="Toggle menu"
      @click="toggleMenu"
    >
      <span
        class="block h-0.5 w-full origin-center rounded bg-white transition-transform duration-200"
        :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
      ></span>
      <span
        class="block h-0.5 w-full rounded bg-white transition-opacity duration-200"
        :class="menuOpen ? 'opacity-0' : ''"
      ></span>
      <span
        class="block h-0.5 w-full origin-center rounded bg-white transition-transform duration-200"
        :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
      ></span>
    </button>

    <div
      v-if="menuOpen"
      class="absolute top-14 right-0 left-0 z-50 flex flex-col bg-linear-to-b from-amber-400 to-orange-600 shadow-lg"
    >
      <RouterLink
        to="/"
        class="border-b border-white/15 px-6 py-3.5 text-base font-medium text-white no-underline transition-colors hover:bg-white/15"
        exact-active-class="bg-white/25 font-bold"
        @click="closeMenu"
      >
        Home
      </RouterLink>
      <RouterLink
        to="/AddScaffold"
        class="border-b border-white/15 px-6 py-3.5 text-base font-medium text-white no-underline transition-colors hover:bg-white/15"
        active-class="bg-white/25 font-bold"
        @click="closeMenu"
      >
        Add Scaffold
      </RouterLink>
      <RouterLink
        to="/ScaffoldList"
        class="px-6 py-3.5 text-base font-medium text-white no-underline transition-colors hover:bg-white/15"
        active-class="bg-white/25 font-bold"
        @click="closeMenu"
      >
        Scaffold List
      </RouterLink>
    </div>
  </nav>
</template>
