import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../dataInterface/customerInterface'
import { CustomerSearchInterface } from '../../dataInterface/customerSearchInterface'

export const getCustomerHandler = async (phoneNumber: String): Promise<CustomerInterface | null> => {
  const filter: CustomerSearchInterface = { phone_number: phoneNumber }
  const cust = await CustomerModel.findOne(filter)
  return cust as CustomerInterface
}
