<!--PixelPerfect desktop version-->
<!--Need Auth-->
<template>
  <div>
    <BlocksAgentList :items="store.getAgents" />
  </div>
</template>

<script setup>
const store = useMainStore();
definePageMeta({
  middleware: 'auth'
});
onMounted(() => {
  store.fetchAgents();
})
</script>