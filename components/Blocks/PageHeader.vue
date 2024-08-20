<template>
  <div class="header column">
    <!-- Блок с логотипом и информацией -->
    <q-toolbar class="title-block row justify-center">
      <div
        class="column items-center"
        style="margin-bottom: 32px;"
      >
        <q-img
          :src="item.src"
          class="logo q-mb-lg"
          style="width: 120px; height: 120px;"
        />
        <span class="text-h5 q-mb-sm">{{ item.title }}</span>

        <div class="row items-center gap5 q-mb-lg q-mr-auto">
          <div class="row items-center">
            <q-icon
              name="verified"
              color="primary"
              size="16px"
            />
            <span class="q-ml-xs">Документы проверены</span>
          </div>
          <span>•</span>
          <div class="row items-center">
            <q-icon
              name="star"
              color="primary"
              size="20px"
            />
            <span class="q-ml-xs">{{ rating.rating }}</span>
          </div>
          <span>•</span>
          <span>{{ rating.reviewsCount }}</span>
        </div>
        <q-btn
          label="Показать номер телефона"
          color="primary"
          style="padding: 15px 20px;"
          @click="showPhone = !showPhone"
        />
        <div
          v-if="showPhone"
          class="q-ml-md"
        >
          {{ item.phone }}
        </div>
      </div>
    </q-toolbar>
    <div class="tags row justify-center q-mb-lg">
      <q-btn
        color="secondary"
        text-color="black"
        to="/products"
        :class="{'active-class': isCurrent('/products')}"
      >
        Товары и услуги
      </q-btn>
      <q-btn
        color="secondary"
        text-color="black"
        to="/agents"
        class="q-mx-sm"
        :class="{'active-class': isCurrent('/agents')}"
      >
        Агенты {{ number > 0 ? number : '' }}
      </q-btn>
      <q-btn
        color="secondary"
        text-color="black"
        to="/about"
        :class="{'active-class': isCurrent('/about')}"
      >
        О компании
      </q-btn>
    </div>
    <q-separator
      class="q-mt-sm"
      color="#CCCCCC"
    />
  </div>
</template>

<script setup>
  defineProps({
    item: {
      type: Object,
      default: () => {}
    },
    rating: {
      type: Object,
      default: () => {}
    },
    number: {
      type: Number,
      default: null
    }
  });

  const showPhone = ref(false);
  const route = useRoute();

  const isCurrent = (path) => {
    return route.path === path;
  };
</script>

<style lang="scss" scoped>
.logo {
  max-width: 100%;
  max-height: 100%;
}
.gap5 {
  gap: 5px;
}

.q-btn {
  width: max-content;
  padding: 8px 12px;
}

.active-class {
  padding: 7px 11px;
  border: 1px solid #0F0F0F
}

@media (max-width: 768px) {
  .title-block {
    display: none;
  }

  .tags {
    flex-wrap: nowrap;
    overflow-x: scroll;

    overflow-x: scroll;

    scrollbar-width: none;
    /*IE10+*/
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      display: none;
    }
  }
}
</style>