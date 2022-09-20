import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../interfaces/invoiceInterface'

export const updateInvoiceHandler = async (invoice: InvoiceInterface): Promise<InvoiceInterface> => {
  const filter = { phone_number: invoice.invoiceNumber }
  return await InvoiceModel.findOneAndUpdate(filter, invoice, { new: true }) as InvoiceInterface
}
