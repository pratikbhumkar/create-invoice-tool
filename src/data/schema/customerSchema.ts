import mongoose from 'mongoose'

export const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone_number: { type: String, required: true },
  disabled: { type: Boolean, required: true, default: false },
  rate: { type: Number, required: true },
  subject: { type: String, required: true },
  email: { type: String, required: true },
  abn: String,
  acn: String
})
