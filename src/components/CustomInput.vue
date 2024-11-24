<template>
  <div class="custom-input">
    <label v-if="label" class="custom-input__label">{{ label }}</label>
    <Field
      :id="name"
      :name="name"
      as="input"
      :type="type"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      :rules="rules"
      class="custom-input__field"
    />
    <ErrorMessage :name="name" class="custom-input__error" />
  </div>
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  rules: {
    type: Array,
    default: () => [],
  },
  name: {
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
  position: relative;

  &__label {
    font-family: Inter-Medium, sans-serif;
    margin-bottom: 8px;
    color: #626262;
  }

  &__error {
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: #cc0000;
  }

  &__field {
    padding: 0 32px;
    border: 1px solid #393939;
    background: transparent;
    border-radius: 8px;
    color: #fff;
    font-family: Inter-Medium, sans-serif;
    height: 64px;
    font-size: 16px;
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

  & + .custom-input {
    margin-top: 22px;
  }
}
</style>
