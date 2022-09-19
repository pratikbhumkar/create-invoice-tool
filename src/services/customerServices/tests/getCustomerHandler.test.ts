import { CustomerModel } from '../../../data/models/customerModel'
import { getCustomerHandler } from '../getCustomerHandler'

describe('getCustomerHandler', () => {
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
    CustomerModel.findOne = jest.fn().mockResolvedValue(customer)
  })
  test('should get customer', async () => {
    void expect(getCustomerHandler('1234')).resolves.toEqual(customer)
  })
})
