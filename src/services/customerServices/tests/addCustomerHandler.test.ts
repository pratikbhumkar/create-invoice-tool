import { CustomerModel } from '../../../data/models/customerModel'
import { addCustomerHandler } from '../../../services/customerServices/addCustomerHandler'

describe('addCustomerHandler', () => {
  test('should add customer', async () => {
    const customer: any = {
      abn: 1233,
      name: 'undefined',
      address: 'undefined',
      phone_number: 'undefined',
      disabled: true,
      rate: 100,
      subject: 'undefined',
      email: 'undefined'
    }
    const spy = jest.spyOn(CustomerModel.prototype, 'save')
      .mockImplementationOnce(async () => await Promise.resolve(customer))
    await addCustomerHandler(customer)
    expect(spy).toBeCalledTimes(1)
  })
})
