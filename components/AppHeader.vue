<template>
  <q-header
    class="bg-accent text-black"
  >
    <q-toolbar class="q-py-sm q-px-lg">
      <q-btn
        flat
        dense
        class="q-mr-sm q-pl-xs q-pr-xs mobile-menu"
        icon="menu"
        text-color="black"
        @click="toggleMenu"
      />
      <!-- Логотип -->
      <q-btn
        to="/"
        flat
        dense
        class="q-pl-sm q-pr-xs"
      >
        <q-img
          :src="logoSrc"
          class="logo"
          style="width: 156px; height: 38px;"
          contain
        />
      </q-btn>
      <!-- Кнопки -->
      <q-btn
        label="Все категории"
        color="secondary"
        text-color="black"
        rounded
        icon="r_grid_view"
        icon-size="24px"
        class="q-ml-sm desktop-only"
        style="padding: 11px 16px;"
      />
      <div
        class="row items-center q-ml-auto desktop-only"
        style="margin-right: 22px;"
      >
        <q-icon name="place" />
        <span>Ростов-на-Дону</span>
      </div>
      <q-separator
        vertical
        inset
        color="#CCCCCC"
        class="q-ml-sm desktop-only"
        style="margin-right: 6px;"
      />
      <q-btn
        label="Разместить объявление"
        text-color="primary"
        flat
        class="q-mx-md desktop-only"
      />
      <q-btn
        class="q-ml-xs q-mr-sm q-pr-xs desktop-only"
        color="secondary"
        text-color="black"
        rounded
        icon="menu"
        icon-size="24px"
        to="/login"
        style="padding-left: 11px;"
      >
        <q-avatar
          size="40px"
          class="q-ml-xs"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
          >
        </q-avatar>
      </q-btn>
      <q-btn
        flat
        dense
        class="q-ml-xs mobile-cart"
        text-color="black"
        icon="shopping_bag"
        @click="toggleCart"
      >
        <q-badge
          floating
          color="primary"
          content="1"
        />
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const logoSrc = '/images/logo.svg';
function toggleMenu() {
  //Добавить логику открытия меню 
}
function toggleCart() {
  //Добавить логику открытия меню 
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 100%;
  max-height: 100%;
}
.gap4 {
  gap: 4px;
}

:deep(.q-icon) {
  margin-right: 4px;
}

.mobile-menu, .mobile-cart {
  display: none;
}

.desktop-only {
  display: flex !important;
}

@media (max-width: 991px) {
  .q-toolbar {
    justify-content: space-between;
  }
  .desktop-only {
    display: none !important;;
  }
  .mobile-menu, .mobile-cart {
    display: flex;
  }
}

</style>