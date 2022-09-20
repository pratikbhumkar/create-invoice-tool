import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../dataInterface/invoiceInterface'

export const listInvoiceHandler = async (): Promise<InvoiceInterface[]> => {
  const invoiceList: InvoiceInterface[] = await InvoiceModel.find({}, function (_err: any, invoices: InvoiceInterface[]) {
    invoices.forEach(function (invoice: InvoiceInterface) {
      invoiceList.push(invoice)
    })
  }).clone() as InvoiceInterface[]
  return invoiceList
}
