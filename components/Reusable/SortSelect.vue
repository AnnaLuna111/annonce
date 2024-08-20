<template>
  <Multiselect
    v-model="selectedOption"
    :groups="true"
    :options="options"
  >
    <template #option="{ option }">
      {{ option.label }} {{ option.count }}
    </template>
  </Multiselect>
</template>

<script setup>
import Multiselect from '@vueform/multiselect';


const options = [
  { options: [{ label: 'Все товары и услуги', value: 'Все товары и услуги' }] },
  {
    label: 'Категория 1',
    options: [{ label: 'Гробы', count: 15, value: 'Гробы' }, { label: 'Урны', count: 5, value: 'Урны' }]
  },
  {
    label: 'Категория 2',
    options: [{ label: 'Тапки', count: 1, value: 'Тапки' }, { label: 'Покрывало', count: 12, value: 'Покрывало' }]
  },
]

const selectedOption = ['Все товары и услуги'];

</script>
<style>
@import "@vueform/multiselect/themes/default.css";

.multiselect {
  max-width: 400px;
  width: 100%;
}
</style>
