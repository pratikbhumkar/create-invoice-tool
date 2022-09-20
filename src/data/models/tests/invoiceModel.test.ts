import { InvoiceInterface } from '../../../dataInterface/InvoiceInterface'
import { InvoiceModel } from '../invoiceModel'

describe('testing mongoose models', () => {
  test('should create a mongoose model for invoice', () => {
    const invoice: InvoiceInterface = {
      invoiceNumber: '1234',
      customerName: 'customerName',
      billeditems: [{ item: 'item', rate: 100 }],
      price: 100,
      description: 'description',
      dateOfIssue: new Date(),
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.invoiceNumber).toEqual(invoice.invoiceNumber)
    expect(invoiceInstance.customerName).toEqual(invoice.customerName)
    expect(invoiceInstance.billeditems[0].item).toEqual(invoice.billeditems[0].item)
    expect(invoiceInstance.billeditems[0].rate).toEqual(invoice.billeditems[0].rate)
    expect(invoiceInstance.price).toEqual(invoice.price)
    expect(invoiceInstance.description).toEqual(invoice.description)
    expect(invoiceInstance.dateOfIssue).toEqual(invoice.dateOfIssue)
    expect(invoiceInstance.disabled).toEqual(invoice.disabled)
  })
  test('should throw an error for missing invoice Number', () => {
    const invoice = {
      customerName: 'customerName',
      billeditems: [{ item: 'item', rate: 100 }],
      price: 100,
      description: 'description',
      dateOfIssue: new Date(),
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
  test('should throw an error for missing customer name', () => {
    const invoice = {
      invoiceNumber: '1234',
      billeditems: [{ item: 'item', rate: 100 }],
      price: 100,
      description: 'description',
      dateOfIssue: new Date(),
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
  test('should throw an error for missing billedItems', () => {
    const invoice = {
      invoiceNumber: '1234',
      customerName: 'customerName',
      price: 100,
      description: 'description',
      dateOfIssue: new Date(),
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
  test('should throw an error for missing price', () => {
    const invoice = {
      invoiceNumber: '1234',
      customerName: 'customerName',
      billeditems: [{ item: 'item', rate: 100 }],
      description: 'description',
      dateOfIssue: new Date(),
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
  test('should throw an error for missing dateOfIssue', () => {
    const invoice = {
      invoiceNumber: '1234',
      customerName: 'customerName',
      billeditems: [{ item: 'item', rate: 100 }],
      price: 100,
      description: 'description',
      disabled: true
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
  test('should throw an error for missing disabled', () => {
    const invoice = {
      invoiceNumber: '1234',
      customerName: 'customerName',
      billeditems: [{ item: 'item', rate: 100 }],
      price: 100,
      description: 'description',
      dateOfIssue: new Date()
    }
    const invoiceInstance = new InvoiceModel(invoice)
    expect(invoiceInstance.validateSync).toThrowError()
  })
})
