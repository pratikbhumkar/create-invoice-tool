import { CustomerInterface } from '../../../interfaces/customerInterface'
import { CustomerModel } from '../customerModel'

describe('testing mongoose models', () => {
  test('should create a mongoose model for customer', () => {
    const customer: CustomerInterface = {
      name: 'test',
      address: 'address',
      phone_number: 'phone_number',
      disabled: false,
      rate: 100,
      subject: 'node',
      email: 'node@node.com',
      abn: 123345
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.name).toEqual(customer.name)
    expect(customerInstance.address).toEqual(customer.address)
    expect(customerInstance.phone_number).toEqual(customer.phone_number)
    expect(customerInstance.disabled).toEqual(customer.disabled)
    expect(customerInstance.rate).toEqual(customer.rate)
    expect(customerInstance.subject).toEqual(customer.subject)
    expect(customerInstance.email).toEqual(customer.email)
    expect(customerInstance.abn).toEqual(customer.abn)
  })

  test('should not create an object if name is missing', () => {
    const customer = {
      address: 'address',
      phone_number: 'phone_number',
      disabled: false,
      rate: 100,
      subject: 'node',
      email: 'node@node.com',
      abn: 123345
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
  test('should not create an object if phone_number is missing', () => {
    const customer = {
      name: 'test',
      address: 'address',
      disabled: false,
      rate: 100,
      subject: 'node',
      email: 'node@node.com',
      abn: 123345
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
  test('should not create an object if disabled is missing', () => {
    const customer = {
      name: 'test',
      address: 'address',
      phone_number: 'phone_number',
      rate: 100,
      subject: 'node',
      email: 'node@node.com',
      abn: 123345
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
  test('should not create an object if rate is missing', () => {
    const customer = {
      name: 'test',
      address: 'address',
      phone_number: 'phone_number',
      subject: 'node',
      email: 'node@node.com',
      abn: 123345,
      disabled: true
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
  test('should not create an object if subject is missing', () => {
    const customer = {
      name: 'test',
      address: 'address',
      phone_number: 'phone_number',
      email: 'node@node.com',
      abn: 123345,
      disabled: true,
      rate: 100
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
  test('should not create an object if email is missing', () => {
    const customer = {
      name: 'test',
      address: 'address',
      phone_number: 'phone_number',
      abn: 123345,
      disabled: true,
      rate: 100,
      subject: 'sub'
    }
    const customerInstance = new CustomerModel(customer)
    expect(customerInstance.validateSync).toThrowError()
  })
})
