import { BilledItem } from './billedItemInterface'

export interface InvoiceInterface {
  invoiceNumber: String
  customerName: String
  billeditems: BilledItem[]
  price: Number
  description: String
  dateOfIssue: Date
  disabled: Boolean
}
