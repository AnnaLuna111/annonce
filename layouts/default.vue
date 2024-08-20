<template>
  <q-layout
    view="hHh lpR fFf"
    class="column"
  >
    <AppHeader />
    <q-page-container class="column">
      <BlocksPageHeader
        :item="store.getCompanyName"
        :rating="store.getCompanyRating"
        :number="store.getAgents.length"
      />
      <slot />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
const store = useMainStore();

onMounted(() => {
  store.fetchCompanyName();
  store.fetchCompanyRating();
  store.fetchAgents();
})
</script>