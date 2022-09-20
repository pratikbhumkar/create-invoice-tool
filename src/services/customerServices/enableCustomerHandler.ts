import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'
import { ICustomerStatus } from '../../interfaces/CustomerStatusInterface'

export const enableCustomerHandler = async (customerPhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: customerPhoneNumber }
  const update: ICustomerStatus = { disabled: false }
  return await CustomerModel.findOneAndUpdate(filter, update, { new: true }) as ICustomer !== null
}
