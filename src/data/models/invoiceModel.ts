import mongoose from 'mongoose'
import { invoiceSchema } from '../schema/invoiceSchema'

export const CustomerModel = mongoose.model('Invoice', invoiceSchema, 'invoice')
