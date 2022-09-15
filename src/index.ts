import express from 'express'
import { auth } from 'express-openid-connect'
import * as dotenv from 'dotenv'
import loginRouter from './routes/login'

const app = express()
const port = process.env.PORT ?? 4000

dotenv.config()

app.use(auth({
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL
}))

app.use('/', loginRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
