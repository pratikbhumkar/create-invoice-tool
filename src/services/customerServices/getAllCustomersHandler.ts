import { CustomerModel } from '../../data/models/customerModel'
import { ICustomer } from '../../interfaces/CustomerInterface'

export const getAllCustomersHandler = async (): Promise<ICustomer[]> => {
  const customerList: ICustomer[] = await CustomerModel.find({}, function (_err: any, customer: ICustomer[]) {
    customer.forEach(function (customer: ICustomer) {
      customerList.push(customer)
    })
  }).clone() as ICustomer[]
  return customerList
}
