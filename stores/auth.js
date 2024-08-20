import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)

  function login(username, password) {
    if (username === 'admin' && password === 'secret') {
      token.value = 'jwt-token'
      return true
    }
    return false
  }

  function logout() {
    token.value = null
  }

  return {
    token,
    login,
    logout
  }
})
