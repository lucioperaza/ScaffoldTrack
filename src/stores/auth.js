import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || null,

    user: JSON.parse(localStorage.getItem('user')) || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },

  actions: {
    login(accessToken, user) {
      this.accessToken = accessToken
      this.user = user

      localStorage.setItem('accessToken', accessToken)

      localStorage.setItem('user', JSON.stringify(user))
    },

    logout() {
      this.accessToken = null
      this.user = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
    },
  },
})
