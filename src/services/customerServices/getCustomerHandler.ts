import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'
import { ICustomerSearch } from '../../interfaces/CustomerSearchInterface'

export const getCustomerHandler = async (phoneNumber: String): Promise<ICustomer | null> => {
  const filter: ICustomerSearch = { phone_number: phoneNumber }
  const cust = await CustomerModel.findOne(filter)
  return cust as ICustomer
}
