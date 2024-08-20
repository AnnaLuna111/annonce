<template>
  <q-list class="row">
    <q-item
      v-for="item in items"
      :key="item.id"
    >
      <CardsProductCard :item="item" />
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