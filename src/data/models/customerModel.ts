import mongoose from 'mongoose'
import { customerSchema } from '../schema/customerSchema'

export const CustomerModel = mongoose.model('Customer', customerSchema, 'customer')
