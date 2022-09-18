import mongoose from 'mongoose'
import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'

export const updateCustomerHandler = (customer: CustomerInterface): String => {
  const db = mongoose.connection
  const filter = { phone_number: customer.phone_number }
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    CustomerModel.findOneAndUpdate(filter, customer, { new: true })
      .then((customerInstance) => {
        customer = customerInstance as CustomerInterface
        return customer.name
      })
      .catch(() => {
        return 'error updating customer'
      })
  })
  return customer.name
}
