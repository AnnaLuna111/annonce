<template>
  <div>
    <BlocksCompanyInfo :item="store.getInfo" />
  </div>
</template>

<script setup>
const store = useMainStore();

onMounted(() => {
  store.fetchInfo();
});
</script>

