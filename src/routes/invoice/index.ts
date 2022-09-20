import router, { Request, Response, Router } from 'express'
import { createInvoice, disableInvoice, getInvoice, invoiceList, updateInvoice } from '../../controllers/invoiceControllers'
import { InvoiceInterface } from '../../dataInterface/invoiceInterface'
import { checkJwt } from '../../utils/jwtTokenChecker'
const invoiceRouter: Router = router.Router()

invoiceRouter.post('/createInvoice', checkJwt, async function (req: Request<{}, {}, InvoiceInterface>, res: Response, next) {
  const response = await createInvoice(req.body)
  res.send(response)
})

invoiceRouter.get('/getInvoice', checkJwt, async function (req: Request<{}, {}, string>, res: Response, next) {
  const response = await getInvoice(req.query.invoiceNumber as string)
  res.send(response)
})

invoiceRouter.post('/disableInvoice', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await disableInvoice(req.query.invoiceNumber as string)
  res.send(response)
})

invoiceRouter.post('/updateInvoice', checkJwt, async function (req: Request<{}, {}, InvoiceInterface>, res: Response, next) {
  const response = await updateInvoice(req.body)
  res.send(response)
})

invoiceRouter.get('/invoiceList', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await invoiceList()
  res.send(response)
})

export default invoiceRouter
