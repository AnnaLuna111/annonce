<template>
  <q-card flat>
    <q-img
      :src="item.image"
      class="img"
    />
    <q-card-section>
      <div class="text-subtitle2">
        {{ item.price }} ₽
      </div>
      <div class="text-h6">
        {{ item.title }}
      </div>
      <q-separator color="secondary" />
      <!-- Hidden state -->
      <div
        v-if="!item.status"
        class="text-center text-red"
      >
        Объявление скрыто
      </div>
      
      <!-- Promoted state -->
      <div
        v-else-if="item.isPromoted"
        class="text-center text-positive"
      >
        Объявление активно и продвигается
      </div>
    
      <!-- Active state -->
      <q-toolbar
        v-else
        class="row justify-between"
      >
        <span>Увеличьте количество просмотров</span>
        <q-btn
          label="Продвигать"
          color="primary"
          @click="promoteItem(item)"
        />
      </q-toolbar>
    </q-card-section>
  </q-card>
</template>

<script setup>
  defineProps({
    item: {
      type: Object, 
      default: () => {}
    }
  });

  function promoteItem(item) {
    item.isPromoted = true;
    // Необходимо подключить store для обновления данных
  }

</script>

<style lang="scss" scoped>
.q-card {
  max-width: 414px;
  width: 100%;
}

.img {
  height: 322px;
  border-radius: 20px !important;
}
</style>