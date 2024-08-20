<template>
  <q-card
    flat
    class="agent-card bg-grey-2"
  >
    <div class="row no-wrap gap20 items-start">
      <q-img
        :src="item.image"
        :alt="item.name"
        class="avatar"
        cover
      />
      <div>
        <div class="wrapper">
          <div class="text-h5">
            {{ item.name }}
          </div>
          <div class="row items-center q-mb-xs text-body1">
            <div
              v-if="item.documentsVerified"
              class="row items-center"
            >
              <q-icon
                name="verified"
                color="primary"
                size="16px"
              />
              {{ verificationText }}&nbsp;•
            </div>
            <div
              v-if="item.rating !== null"
              class="row items-center"
            >
              <q-icon
                name="star"
                color="primary"
                size="21px"
              />
              <span>{{ item.rating }}</span>&nbsp;•
            </div>  
            &nbsp;{{ item.reviews }}
          </div>
        </div>
        <div class="q-mt-sm text-body1">
          {{ item.description }}
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => {}
  }
});
const verificationText = ref('Документы проверены');

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    verificationText.value = 'Проверен';
  } else {
    verificationText.value = 'Документы проверены';
  }
});
</script>

<style lang="scss" scoped>
.agent-card {
  position: relative;
  max-width: 560px;
  padding: 20px;
  border-radius: 20px;
}

.avatar {
  width: 140px;
  height: 140px;
  border-radius: 20px;
  flex-shrink: 0;
}

.text-h5 {
  font-weight: 600;
}

.gap20 {
  gap: 20px;
}

@media (max-width: 768px) {
  .agent-card {
    padding: 16px;
  }
  
  .wrapper {
    margin-left: 60px;
  }

  .avatar {
    position: absolute;
    top: 16px;
    left:16px;
    width: 48px;
    height: 48px;
    border-radius: 10px;
  }
}
</style>