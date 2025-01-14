<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeOnOverlayClick">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="closeModal">X</button>
      <h1 class="modal-content__title">Контакты</h1>
      <div class="modal-content-item">
        <div class="modal-content-item__subtitle">Email:</div>
        <div class="modal-content-item__value">
          <a href="mailto:paymallcase@gmail.com">paymallcase@gmail.com</a>
        </div>
      </div>
      <div class="modal-content-item">
        <div class="modal-content-item__subtitle">Телефон:</div>
        <div class="modal-content-item__value">
          <a href="tel:+79969817743">+7 996-981-77-43</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({
  isVisible: { type: Boolean, default: false },
  closeOnOverlay: { type: Boolean, default: true },
})
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const closeByKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', closeByKey)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', closeByKey)
})

const closeOnOverlayClick = () => {
  if (props.closeOnOverlay) closeModal()
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  background: #0f0f0f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;

  &__title {
    text-align: center;
    font-size: 24px;
    font-family: Inter-Bold, sans-serif;
    margin-bottom: 20px;
  }

  &-item {
    &__subtitle {
      color: #fff;
      font-size: 14px;
      margin-bottom: 5px;
    }

    &__value {
      color: #626262;
      font-size: 14px;
      cursor: pointer;
      transition: opacity 0.15s ease-in;

      &:hover {
        opacity: 0.7;
      }
    }

    & + .modal-content-item {
      margin-top: 15px;
    }
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  transition: opacity 0.15s ease-in;

  &:hover {
    opacity: 0.7;
  }
}
</style>
