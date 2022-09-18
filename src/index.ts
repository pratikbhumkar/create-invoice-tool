import express from 'express'
import * as dotenv from 'dotenv'
import loginRouter from './routes/login'
import customerRouter from './routes/customer'
import invoiceRouter from './routes/invoice'
import { connection } from './data/connection'

dotenv.config({ path: '.env' })
const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', loginRouter)
app.use('/customer', customerRouter)
app.use('/invoice', invoiceRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  void connection()
})
