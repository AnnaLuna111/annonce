<template>
  <q-page class="flex flex-center">
    <q-card style="width: 300px">
      <q-card-section>
        <div
          v-if="authStore.token"
          class="text-h6 q-mb-lg"
        >
          Welcome!
        </div>
        <q-form @submit.prevent="authStore.token ? handleLogout() : handleLogin()">
          <q-input
            v-if="!authStore.token"
            v-model="username"
            label="Username"
            class="q-mb-sm"
            autofocus
          />
          <q-input
            v-if="!authStore.token"
            v-model="password"
            label="Password"
            type="password"
            class="q-mb-sm"
          />
          <q-btn
            :label="authStore.token ? 'Logout' : 'Login'"
            :color="authStore.token ? 'secondary' : 'primary'"
            :loading="authStore.isLoading"
            @click="authStore.token ? handleLogout() : handleLogin()"
          />
        </q-form>
        <q-banner
          v-if="authStore.error"
          color="negative"
          class="q-mt-md"
        >
          {{ authStore.error }}
        </q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
definePageMeta({
  layout: 'login'
});

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

async function handleLogin() {
  const success = await authStore.login(username.value, password.value)
  if (success) {
    router.push('/')
  }
}

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
