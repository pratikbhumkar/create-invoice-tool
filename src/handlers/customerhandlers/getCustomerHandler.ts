import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { CustomerSearchInterface } from '../../DataInterface/customerSearchInterface'

export const getCustomerHandler = async (phoneNumber: String): Promise<CustomerInterface> => {
  const filter: CustomerSearchInterface = { phone_number: phoneNumber }
  const customer = await CustomerModel.findOne(filter) as CustomerInterface
  return customer
}
