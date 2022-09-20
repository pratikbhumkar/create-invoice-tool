import router, { Request, Response, Router } from 'express'
import { createInvoice, disableInvoice, getInvoice, invoiceList, updateInvoice } from '../../controllers/invoiceControllers'
import { InvoiceInterface } from '../../dataInterface/InvoiceInterface'
import { checkJwt } from '../../utils/jwtTokenChecker'
const invoiceRouter: Router = router.Router()

invoiceRouter.post('/createInvoice', checkJwt, async function (req: Request<{}, {}, InvoiceInterface>, res: Response, next) {
  const invoice = await createInvoice(req.body)
  res.send(invoice)
})

invoiceRouter.get('/getInvoice', checkJwt, async function (req: Request<{}, {}, string>, res: Response, next) {
  const invoice = await getInvoice(req.query.invoiceNumber as string)
  ;(invoice != null) ? res.send(invoice) : res.status(404).send(`Invoice not found for Invoice number:${req.query.invoiceNumber}`)
})

invoiceRouter.post('/disableInvoice', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const invoice = await disableInvoice(req.query.invoiceNumber as string)
  res.send(invoice)
})

invoiceRouter.post('/updateInvoice', checkJwt, async function (req: Request<{}, {}, InvoiceInterface>, res: Response, next) {
  const invoice = await updateInvoice(req.body)
  ;(invoice != null) ? res.send(invoice) : res.status(404).send(`Invoice not found for Invoice number:${req.query.invoiceNumber}`)
})

invoiceRouter.get('/invoiceList', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const invoice = await invoiceList()
  ;(invoice != null && invoice.length !== 0) ? res.send(invoice) : res.status(404).send('Invoices not found')
  res.send(invoice)
})

export default invoiceRouter
