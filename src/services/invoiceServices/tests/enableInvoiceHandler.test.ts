import { InvoiceModel } from '../../../data/models/invoiceModel'
import { enableInvoiceHandler } from '../enableInvoiceHandler'

describe('enableInvoiceHandler', () => {
  const invoice: any = {
    invoiceNumber: '1234',
    customerName: 'String',
    billeditems: [{ item: 'pre-work', rate: 50 }],
    price: 123,
    description: 'String',
    dateOfIssue: new Date(),
    disabled: true
  }
  beforeAll(() => {
    InvoiceModel.findOneAndUpdate = jest.fn().mockResolvedValue(invoice)
  })
  test('should get invoice', async () => {
    void expect(enableInvoiceHandler('1234')).resolves.toEqual(true)
  })
})
