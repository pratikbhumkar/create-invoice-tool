import router, { Router, Request, Response } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
import { addCustomerHandler } from '../../handlers/customerhandlers/addCustomerhandler'
import { CustomerInterface } from '../../DataInterface/customerInterface'

const customerRouter: Router = router.Router()

customerRouter.put('/addCustomer', checkJwt, function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  addCustomerHandler(req.body)
})

customerRouter.get('/getCustomer', checkJwt, function (req: Request, res: Response, next) {
  res.send('Welcome')
})

customerRouter.post('/disableCustomer', checkJwt, function (req: Request<{}, {}, String>, res: Response, next) {
  res.send('Welcome')
})

customerRouter.post('/enableCustomer', checkJwt, function (req: Request<{}, {}, String>, res: Response, next) {
  res.send('Welcome')
})

customerRouter.post('/updateCustomer', checkJwt, function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  res.send('Welcome')
})

export default customerRouter
