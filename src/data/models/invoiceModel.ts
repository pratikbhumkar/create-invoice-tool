import mongoose from 'mongoose'
import { invoiceSchema } from '../schema/invoiceSchema'

export const InvoiceModel = mongoose.model('Invoice', invoiceSchema, 'invoice')
