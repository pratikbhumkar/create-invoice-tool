import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'
import { IInvoiceSearch } from '../../interfaces/InvoiceSearchInterface'

export const getInvoiceHandler = async (invoiceNumber: String): Promise<IInvoice | null> => {
  const filter: IInvoiceSearch = { invoiceNumber }
  const cust = await InvoiceModel.findOne(filter)
  return cust as IInvoice
}
