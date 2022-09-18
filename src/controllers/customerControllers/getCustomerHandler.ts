import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { CustomerSearchInterface } from '../../DataInterface/customerSearchInterface'

export const getCustomerHandler = async (phoneNumber: String): Promise<CustomerInterface | null> => {
  const filter: CustomerSearchInterface = { phone_number: phoneNumber }
  return await CustomerModel.findOne(filter)
}
