<template>
  <button
    :type="type"
    :class="['custom-button', `custom-button--${variant}`, `custom-button--${size}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // Options: 'primary', 'secondary', 'danger'
  },
  size: {
    type: String,
    default: 'medium', // Options: 'small', 'medium', 'large'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['click'])

const handleClick = (event: any) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped lang="scss">
.custom-button {
  font-family: Inter-Medium, sans-serif;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  max-width: 539px;
  width: 100%;
  height: 64px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.1s;
}

.custom-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.custom-button--primary {
  background-color: #007bff;
  color: white;
}

.custom-button--primary:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>
