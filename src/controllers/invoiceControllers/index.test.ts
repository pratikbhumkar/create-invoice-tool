import { createInvoice, disableInvoice, enableInvoice, getInvoice, updateInvoice } from '../invoiceControllers'
import { InvoiceInterface } from '../../dataInterface/InvoiceInterface'
import * as createInvoiceHandlers from '../../services/invoiceServices/createInvoiceHandler'
import * as updateInvoiceHandlers from '../../services/invoiceServices/updateInvoiceHandler'
import * as enableInvoiceHandlers from '../../services/invoiceServices/enableInvoiceHandler'
import * as disableInvoiceHandlers from '../../services/invoiceServices/disableInvoiceHandler'
import * as getInvoiceHandlers from '../../services/invoiceServices/getInvoiceHandler'

describe('invoice controller tests', () => {
  const invoice: InvoiceInterface = {
    invoiceNumber: 'String',
    customerName: 'String',
    billeditems: [{ item: 'pre-work', rate: 50 }],
    price: 123,
    description: 'String',
    dateOfIssue: new Date(),
    disabled: true
  }
  test('should call appropriate handler for add invoice', async () => {
    const createInvoiceHandlerSpy = jest
      .spyOn(createInvoiceHandlers, 'createInvoiceHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(invoice))
    await createInvoice(invoice)
    expect(createInvoiceHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for add invoice', async () => {
    const getInvoiceHandlerSpy = jest
      .spyOn(getInvoiceHandlers, 'getInvoiceHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(invoice))
    await getInvoice('1234')
    expect(getInvoiceHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for update invoice', async () => {
    const updateInvoiceHandlerSpy =
    jest.spyOn(updateInvoiceHandlers, 'updateInvoiceHandler')
      .mockImplementation()
      .mockReturnValue(Promise.resolve(invoice))
    await updateInvoice(invoice)
    expect(updateInvoiceHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for enable invoice', async () => {
    const enableInvoiceHandlerSpy = jest.spyOn(enableInvoiceHandlers, 'enableInvoiceHandler')
      .mockReturnValue(Promise.resolve(true))
    await enableInvoice('1234')
    expect(enableInvoiceHandlerSpy).toHaveBeenCalled()
  })
  test('should call appropriate handler for enable invoice', async () => {
    const disableInvoiceHandlerSpy = jest.spyOn(disableInvoiceHandlers, 'disableInvoiceHandler')
      .mockReturnValue(Promise.resolve(false))
    await disableInvoice('1234')
    expect(disableInvoiceHandlerSpy).toHaveBeenCalled()
  })
})
