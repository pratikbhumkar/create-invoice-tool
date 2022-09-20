import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'

export const addCustomerHandler = async (customer: ICustomer): Promise<ICustomer> => {
  const customerInstance = new CustomerModel(customer)
  return await customerInstance.save() as ICustomer
}
