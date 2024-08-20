<template>
  <q-btn-dropdown
    color="secondary"
    text-color="black"
    align="between"
    dropdown-icon="expand_more"
    disable
  >
    <template #label>
      <div class="text-left">
        <div class="text-h5">
          {{ title }}
        </div>
        <div class="q-mt-xs text-body1">
          Сегодня {{ currentDayTime }}
        </div>
      </div>
    </template>
    <q-list>
      <q-item
        v-for="item in items"
        :key="item.id"
      >
        {{ item.day }} {{ item.time }}
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  }
});

const today = new Date().getDay();

const getTodaySchedule = (items) => {
  const todaySchedule = items.find(item => item.id === today);
  return todaySchedule ? todaySchedule.time : '';
};

const currentDayTime = getTodaySchedule(props.items);
</script>

<style lang="scss" scoped>
.q-btn {
  width: 100%;
}
</style>

