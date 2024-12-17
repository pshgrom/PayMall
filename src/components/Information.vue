<template>
  <div class="information">
    <div class="information__title" @click="showModal = true">Контакты</div>
    <transition name="bounce" mode="out-in">
      <ModalInfo :isVisible="showModal" @close="showModal = false" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import ModalInfo from '@/components/ModalInfo.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style scoped lang="scss">
.information {
  margin-top: 35px;

  &__title {
    cursor: pointer;
    transition: color 0.15s ease-in;
    font-size: 14px;
    color: #626262;

    &:hover {
      color: #fff;
    }
  }
}
</style>
