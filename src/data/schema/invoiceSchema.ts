import mongoose from 'mongoose'

export const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: Number, required: true },
  customerName: { type: String, required: true },
  billeditems: { type: [{ item: String, rate: Number }], required: true },
  price: { type: Number, required: true },
  description: String,
  dateOfIssue: { type: Date, default: Date.now },
  disabled: { type: Boolean, required: true }
})
