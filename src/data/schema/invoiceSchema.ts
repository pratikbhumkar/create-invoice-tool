import mongoose from 'mongoose'

export const invoiceSchema = new mongoose.Schema({
  invoiceNumber: Number,
  customerName: String,
  billeditems: [{ item: String, rate: Number }],
  price: Number,
  description: String,
  dateOfIssue: { type: Date, default: Date.now },
  disabled: Boolean
})
