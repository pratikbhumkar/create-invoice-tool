import mongoose from 'mongoose'

export const billedItemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  rate: { type: Number, required: true }
})
