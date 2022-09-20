import { addCustomer, disableCustomer, enableCustomer, getCustomer, updateCustomer } from '..'
import { CustomerInterface } from '../../../dataInterface/CustomerInterface'
import * as addCustomerHandlers from '../../../services/customerServices/addCustomerHandler'
import * as updateCustomerHandlers from '../../../services/customerServices/updateCustomerHandler'
import * as enableCustomerHandlers from '../../../services/customerServices/enableCustomerHandler'
import * as disableCustomerHandlers from '../../../services/customerServices/disableCustomerHandler'
import * as getCustomerHandlers from '../../../services/customerServices/getCustomerHandler'

describe('customer controller tests', () => {
  const customer: CustomerInterface = {
    abn: 1233,
    name: 'undefined',
    address: 'undefined',
    phone_number: 'undefined',
    disabled: true,
    rate: 100,
    subject: 'undefined',
    email: 'undefined'
  }
  test('should call appropriate handler for add customer', async () => {
    const addCustomerHandlerSpy = jest
      .spyOn(addCustomerHandlers, 'addCustomerHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(customer))
    await addCustomer(customer)
    expect(addCustomerHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for add customer', async () => {
    const getCustomerHandlerSpy = jest
      .spyOn(getCustomerHandlers, 'getCustomerHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(customer))
    await getCustomer('1234')
    expect(getCustomerHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for update customer', async () => {
    const updateCustomerHandlerSpy =
    jest.spyOn(updateCustomerHandlers, 'updateCustomerHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(customer))
    await updateCustomer(customer)
    expect(updateCustomerHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for enable customer', async () => {
    const enableCustomerHandlerSpy = jest.spyOn(enableCustomerHandlers, 'enableCustomerHandler')
      .mockReturnValue(Promise.resolve(true))
    await enableCustomer('1234')
    expect(enableCustomerHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for enable customer', async () => {
    const disableCustomerHandlerSpy = jest.spyOn(disableCustomerHandlers, 'disableCustomerHandler')
      .mockReturnValue(Promise.resolve(false))
    await disableCustomer('1234')
    expect(disableCustomerHandlerSpy).toHaveBeenCalled()
  })
})
