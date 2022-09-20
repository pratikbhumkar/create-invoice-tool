import mongoose from 'mongoose'
import { dbName } from '../constants'

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.1iuwqow.mongodb.net/${dbName}?retryWrites=true&w=majority`
export const connection = async (): Promise<void> => {
  await mongoose.connect(uri)
}

connection().catch((err: string) => console.log('error connecting to mongo', err))
