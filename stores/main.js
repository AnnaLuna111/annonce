export const useMainStore = defineStore('main', {
  state: () => ({
    name: {},
    rating: {},
    products: [],
    agents: [],
    info: {},
    isLoading: false,
    error: null,
}),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const data = await $fetch('/api/products');
        this.products = data;
      } catch (error) {
        this.error = 'Не удалось загрузить данные о продуктах';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchAgents() {
      this.isLoading = true;
      try {
        const data = await $fetch('/api/agents');
        this.agents = data;
      } catch (error) {
        this.error = 'Не удалось загрузить данные об агентах';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchInfo() {
      this.isLoading = true;
      try {
        const data = await $fetch('/api/info');
        this.info = data;
      } catch (error) {
        this.error = 'Не удалось загрузить данные о компании';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchCompanyName() {
      this.isLoading = true;
      try {
        const data = await $fetch('/api/name');
        this.name = data;
      } catch (error) {
        this.error = 'Не удалось загрузить данные о компании';
      } finally {
        this.isLoading = false;
      }
    },
    async fetchCompanyRating() {
      this.isLoading = true;
      try {
        const data = await $fetch('/api/rating');
        this.rating = data;
      } catch (error) {
        this.error = 'Не удалось загрузить данные о компании';
      } finally {
        this.isLoading = false;
      }
    },
  },
  getters: {
    getCompanyName: (state) => state.name,
    getCompanyRating: (state) => state.rating,
    getProducts: (state) => state.products,
    getAgents: (state) => state.agents,
    getInfo: (state) => state.info,
  },
})