import { CustomerModel } from '../../../data/models/customerModel'
import { getAllCustomersHandler } from '../getAllCustomersHandler'

describe('getAllCustomersHandler', () => {
  const customerList: any = [{
    abn: 1233,
    name: 'undefined',
    address: 'undefined',
    phone_number: 'undefined',
    disabled: true,
    rate: 100,
    subject: 'undefined',
    email: 'undefined'
  }]
  beforeAll(() => {
    CustomerModel.find().clone = jest.fn().mockResolvedValue(customerList)
  })
  test('should get customer', async () => {
    void expect(getAllCustomersHandler()).resolves.toEqual(customerList)
  })
})
