<template>
  <section class="payment">
    <div class="container">
      <div class="payment__wrapper">
        <h1>Пополнение Steam</h1>
        <label class="payment__label">Методы оплаты </label>
        <PaymentMethods />
        <Form class="payment-inputs" as="v-form" ref="form" @submit.prevent>
          <CustomInput
            v-model="steamName"
            label="Steam Аккаунт"
            :id="'steamName'"
            :name="'steamName'"
            :rules="[rules.required]"
            placeholder="SteamNickName"
          />
          <CustomInput
            v-model="sum"
            :id="'sum'"
            :name="'sum'"
            label="Сумма Пополнения"
            :rules="[rules.required, numericWithNoLeadingZero]"
            placeholder="500"
            prefix="₽"
            @input="filterInput"
          />
          <div class="payment__sum">Сумма к оплате {{ calculateSum }} ₽</div>
          <CustomButton variant="primary" size="large" type="submit" @click="onSubmit">
            Перейти к оплате
          </CustomButton>
        </Form>
        <div class="payment-card">
          <div class="payment-card__img payment-card__img_first">
            <img src="/images/mir.png" alt="Mir" />
          </div>
          <div class="payment-card__img payment-card__img_second">
            <img src="/images/visa.png" alt="Mir" />
          </div>
          <div class="payment-card__img payment-card__img_third">
            <img src="/images/master.png" alt="Mir" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue'
import { computed, ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'
import PaymentMethods from '@/components/PaymentMethods.vue'
import { Form } from 'vee-validate'
import PayApi from '@/api/PayApi'

const steamName = ref('')
const sum = ref('')
const form = ref<any>(null)

const setRules = (errorMsg = '') => {
  return {
    required: (value: string) => {
      return typeof value === 'object' ? !!value?.id || errorMsg : !!value || errorMsg
    },
  }
}

const filterInput = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '')

  if (event.target.value.startsWith('0')) {
    event.target.value = event.target.value.replace(/^0+/, '') // Удаляет все ведущие нули
  }
}

const rules = setRules('Заполните это поле')

const numericWithNoLeadingZero = (value: string) => {
  if (!/^\d+$/.test(value)) {
    return 'Допускаются только цифры'
  }
  if (/^0/.test(value)) {
    return 'Число не может начинаться с 0'
  }
  return true
}

const calculateSum = computed(() => {
  if (Number.isInteger(+sum.value)) {
    const res = +sum.value * 1.17
    return res.toFixed(1)
  }
  return 0
})

const onSubmit = async () => {
  console.log(123)

  const { valid } = await form.value.validate()
  if (!valid) return
  const data = {
    name: steamName.value,
    sum: sum.value,
  }
  const res = await PayApi.pay(data)
  console.warn(res)
}
</script>

<style scoped lang="scss">
.payment {
  width: 50%;

  h1 {
    margin-bottom: 36px;
    font-family: 'Inter-Bold', sans-serif;
    font-size: 40px;
  }

  &__wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 544px;
    margin-left: 54px;
    padding-left: 16px;
  }

  &__label {
    font-family: 'Inter-Medium', sans-serif;
    color: #626262;
    margin-bottom: 8px;
  }

  &-inputs {
    margin-bottom: 35px;
  }

  &__sum {
    color: #fff;
    font-size: 16px;
    margin-bottom: 36px;
    margin-top: 35px;
  }

  &-card {
    display: flex;
    margin-top: 28px;

    &__img {
      &_first {
        max-width: 106px;
      }

      &_second {
        max-width: 92px;
      }

      &_third {
        max-width: 50px;
      }

      & + .payment-card__img {
        margin-left: 10px;
      }
    }
  }
}

@media (max-width: 767px) {
  .payment {
    width: 100%;

    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    &__wrapper {
      margin-left: 0;
      padding-left: 0;
    }
  }
}
</style>
