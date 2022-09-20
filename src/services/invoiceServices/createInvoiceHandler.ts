import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'

export const createInvoiceHandler = async (invoice: IInvoice): Promise<IInvoice> => {
  const invoiceInstance = new InvoiceModel(invoice)
  return await invoiceInstance.save() as IInvoice
}
