import { CustomerModel } from '../../../data/models/customerModel'
import { updateCustomerHandler } from '../updateCustomerHandler'

describe('disableCustomerHandler', () => {
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
  test('should get customer', async () => {
    CustomerModel.findOneAndUpdate = jest.fn().mockResolvedValue(customer)
    void expect(updateCustomerHandler(customer)).resolves.toEqual(customer)
  })
})
