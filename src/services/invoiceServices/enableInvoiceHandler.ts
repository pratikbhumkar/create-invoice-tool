import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'
import { IInvoiceStatus } from '../../interfaces/InvoiceStatusInterface'

export const enableInvoiceHandler = async (invoicePhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: invoicePhoneNumber }
  const update: IInvoiceStatus = { disabled: false }
  return await InvoiceModel.findOneAndUpdate(filter, update, { new: true }) as IInvoice !== null
}
