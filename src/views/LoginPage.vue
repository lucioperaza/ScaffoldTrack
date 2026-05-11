<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

import { loginUser } from '@/services/api'

const router = useRouter()

const email = ref('')
const password = ref('')

const isLoading = ref(false)
const errorMessage = ref('')

async function handleLogin() {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const response = await loginUser({
      email: email.value,
      password: password.value,
    })

    if (response.error) {
      errorMessage.value = response.error
      return
    }

    localStorage.setItem('accessToken', response.accessToken)

    alert('Login successful')

    window.location.href = '/'
  } catch (error) {
    errorMessage.value = 'Unable to login'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-md px-4 py-10">
    <RouterLink
      to="/"
      class="mb-5 inline-block text-sm text-amber-700 hover:text-orange-600"
    >
      ← Back Home
    </RouterLink>

    <div class="rounded-xl border border-orange-200 bg-white p-6">
      <h1 class="mb-1 text-2xl font-bold text-orange-900">Login</h1>

      <p class="mb-6 text-sm text-amber-800">Access your scaffold account</p>

      <div
        v-if="errorMessage"
        class="mb-4 rounded-lg border border-red-300 bg-red-100 px-3 py-2 text-sm text-red-800"
      >
        {{ errorMessage }}
      </div>

      <div class="mb-4">
        <label class="mb-1 block text-xs font-medium text-amber-800"> Email </label>

        <input
          v-model="email"
          type="email"
          class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 outline-none focus:border-amber-400"
        />
      </div>

      <div class="mb-6">
        <label class="mb-1 block text-xs font-medium text-amber-800"> Password </label>

        <input
          v-model="password"
          type="password"
          class="w-full rounded-lg border border-orange-200 bg-amber-50 px-3 py-2.5 text-orange-900 outline-none focus:border-amber-400"
        />
      </div>

      <button
        :disabled="isLoading"
        class="w-full rounded-lg bg-linear-to-r from-amber-400 to-orange-500 py-3 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
        @click="handleLogin"
      >
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>

      <p class="mt-4 text-center text-sm text-amber-800">
        Need an account?

        <RouterLink
          to="/register"
          class="font-medium text-orange-700 hover:text-orange-900"
        >
          Register
        </RouterLink>
      </p>
    </div>
  </div>
</template>
