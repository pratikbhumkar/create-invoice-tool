import router, { Router } from 'express'
import { checkJwt } from '../../utils/jwtTokenChecker'
const loginRouter: Router = router.Router()

loginRouter.get('/', checkJwt, function (req, res, next) {
  res.send('Welcome')
})

export default loginRouter
