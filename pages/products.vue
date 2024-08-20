<template>
  <div>
    <div class="row justify-center">
      <SortSelect />
    </div>
    <ProductList :items="store.getProducts" />
  </div>
</template>

<script setup>
const store = useMainStore();

onMounted(() => {
  store.fetchProducts();
})
</script>

<style lang="scss" scoped>
.logo-large {
  max-width: 100%;
  max-height: 100%;
}

.gap4 {
  gap: 4px;
}
</style>