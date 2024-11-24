import axios from 'axios'
import type { IPayModel } from '@/interfaces/PayModel'

export default {
  pay(data: IPayModel) {
    const instWithCred = axios.create({
      baseURL: 'https://api.payapi.com',
    })
    return instWithCred.post('/pay', data)
  },
}
