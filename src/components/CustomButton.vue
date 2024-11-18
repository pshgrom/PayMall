<template>
  <button
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
    default: 'primary', // Options: 'primary', 'secondary', 'danger', etc.
  },
  size: {
    type: String,
    default: 'medium', // Options: 'small', 'medium', 'large'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const handleClick = (event) => {
  if (props.disabled) this.$emit('click', event)
}
</script>

<style scoped lang="scss">
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.1s;
}

.custom-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.custom-button--primary {
  background-color: #007bff;
  color: white;
}

.custom-button--primary:hover:not(:disabled) {
  background-color: #0056b3;
}

.custom-button--secondary {
  background-color: #6c757d;
  color: white;
}

.custom-button--secondary:hover:not(:disabled) {
  background-color: #545b62;
}

.custom-button--danger {
  background-color: #dc3545;
  color: white;
}

.custom-button--danger:hover:not(:disabled) {
  background-color: #c82333;
}

/* Sizes */
.custom-button--small {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.custom-button--medium {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.custom-button--large {
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
}

.custom-button:active:not(:disabled) {
  transform: scale(0.98);
}
</style>
