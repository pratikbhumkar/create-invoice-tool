import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../dataInterface/invoiceInterface'
import { InvoiceStatusInterface } from '../../dataInterface/invoiceStatusInterface'

export const disableInvoiceHandler = async (invoicePhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: invoicePhoneNumber }
  const update: InvoiceStatusInterface = { disabled: true }
  return await InvoiceModel.findOneAndUpdate(filter, update, { new: true }) as InvoiceInterface !== null
}
