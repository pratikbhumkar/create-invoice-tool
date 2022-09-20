import { InvoiceModel } from '../../../data/models/invoiceModel'
import { disableInvoiceHandler } from '../disableInvoiceHandler'

describe('disableInvoiceHandler', () => {
  const invoice: any = {
    invoiceNumber: '1234',
    invoiceName: 'String',
    billeditems: [{ item: 'pre-work', rate: 50 }],
    price: 123,
    description: 'String',
    dateOfIssue: new Date(),
    disabled: true
  }
  test('should get invoice', async () => {
    InvoiceModel.findOneAndUpdate = jest.fn().mockResolvedValue(invoice)
    void expect(disableInvoiceHandler('1234')).resolves.toEqual(true)
  })
  test('should get invoice', async () => {
    InvoiceModel.findOneAndUpdate = jest.fn().mockResolvedValue(null)
    void expect(disableInvoiceHandler('1234')).resolves.toEqual(false)
  })
})
