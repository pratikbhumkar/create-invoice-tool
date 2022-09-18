import router, { Router, Request, Response } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
import { CustomerInterface } from '../../DataInterface/customerInterface'
import { addCustomer, disableCustomer, enableCustomer, getCustomer, updateCustomer } from '../../controllers/customerControllers/customerController'

const customerRouter: Router = router.Router()

customerRouter.put('/addCustomer', checkJwt, function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  return addCustomer(req.body)
})

customerRouter.get('/getCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  return await getCustomer(req.body)
})

customerRouter.post('/disableCustomer', checkJwt, async function (req: Request<{}, {}, String>, res: Response, next) {
  return disableCustomer(req.body)
})

customerRouter.post('/enableCustomer', checkJwt, function (req: Request<{}, {}, String>, res: Response, next) {
  return enableCustomer(req.body)
})

customerRouter.post('/updateCustomer', checkJwt, function (req: Request<{}, {}, CustomerInterface>, res: Response, next) {
  return updateCustomer(req.body)
})

export default customerRouter
