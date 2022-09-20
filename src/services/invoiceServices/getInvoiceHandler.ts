import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../dataInterface/invoiceInterface'
import { InvoiceSearchInterface } from '../../dataInterface/invoiceSearchInterface'

export const getInvoiceHandler = async (invoiceNumber: String): Promise<InvoiceInterface | null> => {
  const filter: InvoiceSearchInterface = { invoiceNumber }
  const cust = await InvoiceModel.findOne(filter)
  return cust as InvoiceInterface
}
