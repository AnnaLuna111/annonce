<template>
  <q-layout
    view="hHh lpR fFf"
    class="column"
  >
    <AppHeader />
    <q-page-container>
      <slot />
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>