import mongoose from 'mongoose'
import { billedItemSchema } from './billedItemSchema'

export const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  customerName: { type: String, required: true },
  billeditems: { type: [billedItemSchema], required: true },
  price: { type: Number, required: true },
  description: String,
  dateOfIssue: { type: Date, default: Date.now },
  disabled: { type: Boolean, required: true }
})
