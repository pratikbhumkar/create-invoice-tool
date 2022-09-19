import { CustomerModel } from '../../../data/models/customerModel'
import { enableCustomerHandler } from '../enableCustomerHandler'

describe('enableCustomerHandler', () => {
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
  beforeAll(() => {
    CustomerModel.findOneAndUpdate = jest.fn().mockResolvedValue(customer)
  })
  test('should get customer', async () => {
    void expect(enableCustomerHandler('1234')).resolves.toEqual(true)
  })
})
