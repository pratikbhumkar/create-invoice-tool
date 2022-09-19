import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../dataInterface/customerInterface'

export const updateCustomerHandler = async (customer: CustomerInterface): Promise<CustomerInterface> => {
  const filter = { phone_number: customer.phone_number }
  return await CustomerModel.findOneAndUpdate(filter, customer, { new: true }) as CustomerInterface
}