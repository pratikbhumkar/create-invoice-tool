import { InvoiceModel } from '../../data/models/invoiceModel'
import { InvoiceInterface } from '../../dataInterface/invoiceInterface'
import { InvoiceStatusInterface } from '../../dataInterface/invoiceStatusInterface'

export const enableInvoiceHandler = async (invoicePhoneNumber: String): Promise<boolean> => {
  const filter = { phone_number: invoicePhoneNumber }
  const update: InvoiceStatusInterface = { disabled: false }
  return await InvoiceModel.findOneAndUpdate(filter, update, { new: true }) as InvoiceInterface !== null
}
