import router, { Router, Request, Response } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { addCustomer, disableCustomer, enableCustomer, getCustomer, updateCustomer } from '../../controllers/customerControllers'

const customerRouter: Router = router.Router()

customerRouter.put('/addCustomer', checkJwt, async function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  const response = await addCustomer(req.body)
  res.send(response)
})

customerRouter.get('/getCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const customer = await getCustomer(req.query.customerPhoneNumber as string)
  res.send(customer)
})

customerRouter.get('/disableCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await disableCustomer(req.query.customerPhoneNumber as string)
  res.send(response)
})

customerRouter.get('/enableCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  const response = await enableCustomer(req.query.customerPhoneNumber as string)
  res.send(response)
})

customerRouter.post('/updateCustomer', checkJwt, async function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  const response = await updateCustomer(req.body)
  res.send(response)
})

export default customerRouter
