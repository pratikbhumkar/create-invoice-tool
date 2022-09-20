import { CustomerInterface } from '../../dataInterface/CustomerInterface'
import { addCustomerHandler } from '../../services/customerServices/addCustomerHandler'
import { disableCustomerHandler } from '../../services/customerServices/disableCustomerHandler'
import { enableCustomerHandler } from '../../services/customerServices/enableCustomerHandler'
import { getCustomerHandler } from '../../services/customerServices/getCustomerHandler'
import { updateCustomerHandler } from '../../services/customerServices/updateCustomerHandler'

export const addCustomer = async (customer: CustomerInterface): Promise<CustomerInterface> => await addCustomerHandler(customer)

export const updateCustomer = async (customer: CustomerInterface): Promise<CustomerInterface> => await updateCustomerHandler(customer)

export const disableCustomer = async (customerPhoneNumber: String): Promise<boolean> => await disableCustomerHandler(customerPhoneNumber)

export const enableCustomer = async (customerPhoneNumber: String): Promise<boolean> => await enableCustomerHandler(customerPhoneNumber)

export const getCustomer = async (customerPhoneNumber: String): Promise<CustomerInterface | null> => await getCustomerHandler(customerPhoneNumber)
