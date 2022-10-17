import { expressjwt } from 'express-jwt'
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })
const domain = process.env.AUTH0_DOMAIN ?? ''
const audience = process.env.AUDIENCE ?? ''

export const checkJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }) as GetVerificationKey,

  audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256']
})
