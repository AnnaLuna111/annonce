<template>
  <footer
    class="footer bg-grey-2 text-black q-mt-auto"
    bordered
  >
    <q-toolbar class="row items-center gap20">
      <div>© Annonce 2023</div>
      <q-btn
        flat
        label="Документы"
        to="/"
        text-color="grey-8"
        class="no-padding"
      />
      <q-btn
        flat
        label="О компании"
        to="/about"
        text-color="grey-8"
        class="no-padding"
      />
      <div class="column gap10 items-start">
        <q-btn
          flat
          label="Продавцам"
          to="/"
          text-color="grey-8"
          class="no-padding"
        />
        <q-btn
          flat
          label="Покупателям"
          to="/"
          text-color="grey-8"
          class="no-padding"
        />
        <q-btn
          flat
          label="Разместить объявление"
          to="/"
          text-color="grey-8"
          class="no-padding"
        />
        <!-- Добавить LangSelect c логикой -->
      </div>
    </q-toolbar>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 10px 20px 27px;
}

.gap20 {
  gap: 20px;
}

.gap10 {
  gap: 10px;
}

.column {
  display: none;
}

@media (max-width: 768px) {
  .footer {
    padding: 24px 16px 40px;
  }

  .row {
    flex-direction: column;
    align-items: start;
  }

  .column {
    display: flex;
  }

  .gap20 {
    gap: 10px;
  }
}
</style>