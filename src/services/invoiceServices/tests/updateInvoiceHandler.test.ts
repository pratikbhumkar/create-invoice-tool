import { InvoiceModel } from '../../../data/models/invoiceModel'
import { updateInvoiceHandler } from '../updateInvoiceHandler'

describe('disableInvoiceHandler', () => {
  const invoice: any = {
    invoiceNumber: '1234',
    customerName: 'String',
    billeditems: [{ item: 'pre-work', rate: 50 }],
    price: 123,
    description: 'String',
    dateOfIssue: new Date(),
    disabled: true
  }
  test('should get invoice', async () => {
    InvoiceModel.findOneAndUpdate = jest.fn().mockResolvedValue(invoice)
    void expect(updateInvoiceHandler(invoice)).resolves.toEqual(invoice)
  })
})
