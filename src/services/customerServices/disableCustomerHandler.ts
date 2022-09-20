import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'
import { ICustomerStatus } from '../../interfaces/CustomerStatusInterface'

export const disableCustomerHandler = async (customerPhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: customerPhoneNumber }
  const update: ICustomerStatus = { disabled: true }
  return await CustomerModel.findOneAndUpdate(filter, update, { new: true }) as ICustomer !== null
}
