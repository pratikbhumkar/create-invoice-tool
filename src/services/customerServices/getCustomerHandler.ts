import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../interfaces/customerInterface'
import { CustomerSearchInterface } from '../../interfaces/customerSearchInterface'

export const getCustomerHandler = async (phoneNumber: String): Promise<CustomerInterface | null> => {
  const filter: CustomerSearchInterface = { phone_number: phoneNumber }
  const cust = await CustomerModel.findOne(filter)
  return cust as CustomerInterface
}
