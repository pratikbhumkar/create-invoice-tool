import mongoose from 'mongoose'
import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'

export const addCustomerHandler = (customer: CustomerInterface): String => {
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    const customerInstance = new CustomerModel(customer)
    customerInstance.save()
      .then(() => {
        return customerInstance.name
      })
      .catch(() => {
        return 'error storing customer'
      })
  })
  return customer.name
}
