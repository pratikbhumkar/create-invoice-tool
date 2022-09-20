import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../dataInterface/InvoiceInterface'
import { InvoiceSearchInterface } from '../../dataInterface/InvoiceSearchInterface'

export const getInvoiceHandler = async (invoiceNumber: String): Promise<InvoiceInterface | null> => {
  const filter: InvoiceSearchInterface = { invoiceNumber }
  const cust = await InvoiceModel.findOne(filter)
  return cust as InvoiceInterface
}
