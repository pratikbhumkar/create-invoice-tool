import { CustomerInterface } from '../../dataInterface/customerInterface'
import { addCustomerHandler } from './addCustomerHandler'
import { disableCustomerHandler } from './disableCustomerHandler'
import { enableCustomerHandler } from './enableCustomerHandler'
import { getCustomerHandler } from './getCustomerHandler'
import { updateCustomerHandler } from './updateCustomerHandler'

export const addCustomer = async (customer: CustomerInterface): Promise<CustomerInterface> => await addCustomerHandler(customer)

export const updateCustomer = async (customer: CustomerInterface): Promise<CustomerInterface> => await updateCustomerHandler(customer)

export const disableCustomer = async (customerPhoneNumber: String): Promise<boolean> => await disableCustomerHandler(customerPhoneNumber)

export const enableCustomer = async (customerPhoneNumber: String): Promise<boolean> => await enableCustomerHandler(customerPhoneNumber)

export const getCustomer = async (customerPhoneNumber: String): Promise<CustomerInterface | null> => await getCustomerHandler(customerPhoneNumber)
