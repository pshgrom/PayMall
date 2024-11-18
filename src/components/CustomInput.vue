<template>
  <div class="custom-input">
    <label v-if="label" class="custom-input__label">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      class="custom-input__field"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'text',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'text',
  },
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.custom-input {
  display: flex;
  flex-direction: column;

  &__label {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 0.25rem;
  }

  &__field {
    padding: 0.5rem;
    font-size: 1rem;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }
}
</style>
