import { IBilledItem } from './BilledItemInterface'

export interface IInvoice {
  invoiceNumber: String
  customerName: String
  billeditems: IBilledItem[]
  price: Number
  description: String
  dateOfIssue: Date
  disabled: Boolean
}
