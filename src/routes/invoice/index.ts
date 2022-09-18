import router, { Router } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
const invoiceRouter: Router = router.Router()

invoiceRouter.put('/createInvoice', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

invoiceRouter.get('/getInvoice', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

invoiceRouter.post('/disableInvoice', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

invoiceRouter.post('/updateInvoice', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

invoiceRouter.get('/invoiceList', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

export default invoiceRouter
