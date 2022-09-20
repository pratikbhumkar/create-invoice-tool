import { InvoiceModel } from '../../../data/models/invoiceModel'
import { createInvoiceHandler } from '../createInvoiceHandler'

describe('createInvoiceHandler', () => {
  test('should add invoice', async () => {
    const invoice: any = {
      invoiceNumber: 'String',
      customerName: 'String',
      billeditems: [{ item: 'pre-work', rate: 50 }],
      price: 123,
      description: 'String',
      dateOfIssue: new Date(),
      disabled: true
    }
    const spy = jest.spyOn(InvoiceModel.prototype, 'save')
      .mockImplementationOnce(async () => await Promise.resolve(invoice))
    await createInvoiceHandler(invoice)
    expect(spy).toBeCalledTimes(1)
  })
})
