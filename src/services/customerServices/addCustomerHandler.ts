import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../interfaces/customerInterface'

export const addCustomerHandler = async (customer: CustomerInterface): Promise<CustomerInterface> => {
  const customerInstance = new CustomerModel(customer)
  return await customerInstance.save() as CustomerInterface
}
