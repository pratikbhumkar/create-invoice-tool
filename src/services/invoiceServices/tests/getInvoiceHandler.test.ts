import { InvoiceModel } from '../../../data/models/invoiceModel'
import { getInvoiceHandler } from '../getInvoiceHandler'

describe('getInvoiceHandler', () => {
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
    InvoiceModel.findOne = jest.fn().mockResolvedValue(invoice)
  })
  test('should get invoice', async () => {
    void expect(getInvoiceHandler('1234')).resolves.toEqual(invoice)
  })
})
