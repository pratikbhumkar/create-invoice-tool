import express from 'express'
import * as dotenv from 'dotenv'
import loginRouter from './routes/login'

dotenv.config({ path: '.env' })
const app = express()
const port = process.env.PORT ?? 4000
app.use('/', loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
