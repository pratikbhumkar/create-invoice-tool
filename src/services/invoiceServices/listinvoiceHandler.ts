import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'

export const listInvoiceHandler = async (): Promise<IInvoice[]> => {
  const invoiceList: IInvoice[] = await InvoiceModel.find({}, function (_err: any, invoices: IInvoice[]) {
    invoices.forEach(function (invoice: IInvoice) {
      invoiceList.push(invoice)
    })
  }).clone() as IInvoice[]
  return invoiceList
}
