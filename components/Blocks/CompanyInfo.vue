<template>
  <div class="row justify-center">
    <q-card flat>
      <q-card-section>
        <div class="text-h5">
          {{ item.aboutTitle }}
        </div>
        <div class="q-mt-md text-body1">
          <p>
            {{ item.aboutDescription }}
          </p>
        </div>
      </q-card-section>
  
      <q-card-section>
        <ReusableScheduleDropdown
          :items="item.scheduleList"
          :title="item.scheduleTitle"
        />
      </q-card-section>
  
      <q-card-section class="row no-wrap">
        <div>
          <div class="text-h5">
            {{ item.locationTitle }}
          </div>
          <div class="q-mt-xs text-body1">
            {{ item.locationDescription }}
          </div>
        </div>
        <!-- можно подключить API карты вместо картинки -->
        <q-img
          src="/images/map.png"
          alt=""
          class="image"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object, 
    default: () => {}
  }
});
</script>

<style lang="scss" scoped>
.q-card {
  max-width: 560px;
}

.image {
  flex-shrink: 0;
  width: 200px;
  border-radius: 8px 8px 8px 0px;
}

@media (max-width: 768px) {
  .q-card__section {
    flex-direction: column-reverse;
  }

  .image {
    width: 100%;
    height: 96px;
    object-fit: cover;
  }
}
</style>