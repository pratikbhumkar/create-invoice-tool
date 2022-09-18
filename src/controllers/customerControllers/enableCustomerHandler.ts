import { CustomerModel } from '../../data/models/customerModel'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { CustomerStatusInterface } from '../../DataInterface/customerStatusInterface'

export const enableCustomerHandler = async (customerPhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: customerPhoneNumber }
  const update: CustomerStatusInterface = { disabled: false }
  return await CustomerModel.findOneAndUpdate(filter, update, { new: true }) as CustomerInterface !== null
}
