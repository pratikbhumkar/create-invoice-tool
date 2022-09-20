import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../interfaces/customerInterface'
import { CustomerStatusInterface } from '../../interfaces/customerStatusInterface'

export const enableCustomerHandler = async (customerPhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: customerPhoneNumber }
  const update: CustomerStatusInterface = { disabled: false }
  return await CustomerModel.findOneAndUpdate(filter, update, { new: true }) as CustomerInterface !== null
}
