<template>
  <main class="main">
    <div class="main__image">
      <img src="/images/main.png" alt="Logo" />
    </div>
    <Payment />
  </main>
</template>

<script setup lang="ts">
import Payment from '@/components/Payment.vue'
</script>

<style lang="scss">
.main {
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;

  &__image {
    width: 50%;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 767px) {
  .main {
    &__image {
      display: none;
    }
  }
}
</style>
