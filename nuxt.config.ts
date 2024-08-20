// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-quasar-ui'],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  quasar: {
    config: {
      brand: {
        primary: '#337566',
        secondary: '#E8E8E8',
        accent: '#FFF7EB',
      }      
    },
    extras: {
      fontIcons: ['material-icons-round'],
    },
    components: {
      defaults: {
        QBtn: {
          color: 'primary',
          unelevated: true,
          textColor: 'white',
          size: '15px',
          noCaps: true
        },
        QBtnDropdown: {
          unelevated: true,
          size: '15px',
          noCaps: true
        }
      }
    }
  },
})