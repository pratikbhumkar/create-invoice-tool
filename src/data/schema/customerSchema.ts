import mongoose from 'mongoose'

export const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone_number: String,
  disabled: Boolean,
  rate: Number,
  subject: String,
  email: String,
  abn: Number
})
