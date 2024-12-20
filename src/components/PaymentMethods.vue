<template>
  <div class="payment-methods">
    <div class="payment-methods__img">
      <img src="/images/spb.png" alt="Spb" />
    </div>
    <div class="payment-methods__text">СБП</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.payment-methods {
  background: #242424;
  width: 164px;
  height: 77px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #0071e3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  &__img {
    max-width: 40px;
  }

  &__text {
    margin-left: 10px;
  }
}
</style>
