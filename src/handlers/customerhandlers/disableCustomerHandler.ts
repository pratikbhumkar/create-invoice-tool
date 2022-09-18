import mongoose from 'mongoose'
import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { CustomerStatusInterface } from '../../DataInterface/customerStatusInterface'

export const disableCustomerHandler = (customerPhoneNumber: Number): void => {
  const db = mongoose.connection
  const filter = { phone_number: customerPhoneNumber }
  const update: CustomerStatusInterface = { disabled: true }
  let customer: CustomerInterface
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    CustomerModel.findOneAndUpdate(filter, update, { new: true })
      .then((customerInstance) => {
        customer = customerInstance as CustomerInterface
        return customer.name
      })
      .catch(() => {
        return 'error updating customer'
      })
  })
}
