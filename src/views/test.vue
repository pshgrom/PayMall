<template>
  <CustomInput v-model="username" label="Username1" placeholder="Enter your username" />
  <CustomButton @click="handleClick" variant="primary" size="large">Primary</CustomButton>
</template>

<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue'
import { ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'

const username = ref('')

const handleClick = () => {
  console.log(123)
}
</script>

<style scoped></style>
