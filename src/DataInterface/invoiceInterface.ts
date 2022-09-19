export interface InvoiceInterface {
  invoiceNumber: Number
  customerName: String
  billeditems: [{ item: String, rate: Number }]
  price: Number
  description: String
  dateOfIssue: Date
  disabled: Boolean
}
