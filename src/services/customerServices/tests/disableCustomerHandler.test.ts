import { CustomerModel } from '../../../data/models/customerModel'
import { disableCustomerHandler } from '../disableCustomerHandler'

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
    void expect(disableCustomerHandler('1234')).resolves.toEqual(true)
  })
  test('should get customer', async () => {
    CustomerModel.findOneAndUpdate = jest.fn().mockResolvedValue(null)
    void expect(disableCustomerHandler('1234')).resolves.toEqual(false)
  })
})
