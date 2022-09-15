import router, { Router } from 'express'
import { requiresAuth } from 'express-openid-connect'

const loginRouter: Router = router.Router()

loginRouter.get('/', requiresAuth(), function (req, res, next) {
  res.send('Welcome')
})

export default loginRouter
