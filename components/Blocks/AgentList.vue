<template>
  <q-list class="column items-center">
    <q-item
      v-for="item in items"
      :key="item.id"
    >
      <CardsAgentCard :item="item" />
    </q-item>
  </q-list>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
.column {
  margin-top: 25px;
  margin-bottom: 58px;
}

.q-item {
  padding: 6px 0;
}
</style>
