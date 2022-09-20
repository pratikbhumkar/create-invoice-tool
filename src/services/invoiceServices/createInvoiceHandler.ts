import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../interfaces/invoiceInterface'

export const createInvoiceHandler = async (invoice: InvoiceInterface): Promise<InvoiceInterface> => {
  const invoiceInstance = new InvoiceModel(invoice)
  return await invoiceInstance.save() as InvoiceInterface
}
