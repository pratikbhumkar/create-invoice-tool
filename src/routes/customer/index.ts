import router, { Router, Request, Response } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
import { ICustomer } from '../../interfaces/CustomerInterface'
import { addCustomer, disableCustomer, enableCustomer, getAllCustomers, getCustomer, updateCustomer } from '../../controllers/customerControllers'

const customerRouter: Router = router.Router()

customerRouter.post('/addCustomer', checkJwt, async function (req: Request<{}, {}, ICustomer>, res: Response, next) {
  const response = await addCustomer(req.body)
  res.send(response)
})

customerRouter.get('/getCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const customer = await getCustomer(req.query.customerPhoneNumber as string)
  ;(customer != null) ? res.send(customer) : res.status(404).send(`Customer not found for Phone number:${req.query.customerPhoneNumber}`)
})

customerRouter.get('/disableCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await disableCustomer(req.query.customerPhoneNumber as string)
  res.send(response)
})

customerRouter.get('/enableCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await enableCustomer(req.query.customerPhoneNumber as string)
  res.send(response)
})

customerRouter.post('/updateCustomer', checkJwt, async function (req: Request<{}, {}, ICustomer>, res: Response, next) {
  const customer = await updateCustomer(req.body)
  ;(customer != null) ? res.send(customer) : res.status(404).send('Customer not found')
})

customerRouter.get('/getAllCustomers', checkJwt, async function (req: Request<{}, {}, {}>, res: Response, next) {
  const response = await getAllCustomers()
  res.send(response)
})

export default customerRouter
