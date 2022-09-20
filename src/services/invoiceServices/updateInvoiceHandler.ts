import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'

export const updateInvoiceHandler = async (invoice: IInvoice): Promise<IInvoice> => {
  const filter = { phone_number: invoice.invoiceNumber }
  return await InvoiceModel.findOneAndUpdate(filter, invoice, { new: true }) as IInvoice
}
