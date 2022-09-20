import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'

export const updateCustomerHandler = async (customer: ICustomer): Promise<ICustomer> => {
  const filter = { phone_number: customer.phone_number }
  return await CustomerModel.findOneAndUpdate(filter, customer, { new: true }) as ICustomer
}
