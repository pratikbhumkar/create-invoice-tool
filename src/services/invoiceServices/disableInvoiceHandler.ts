import { InvoiceModel } from '../../data/models/invoiceModel'
import { IInvoice } from '../../interfaces/InvoiceInterface'
import { IInvoiceStatus } from '../../interfaces/InvoiceStatusInterface'

export const disableInvoiceHandler = async (invoicePhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: invoicePhoneNumber }
  const update: IInvoiceStatus = { disabled: true }
  return await InvoiceModel.findOneAndUpdate(filter, update, { new: true }) as IInvoice !== null
}
