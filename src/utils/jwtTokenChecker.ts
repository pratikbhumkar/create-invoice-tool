import { expressjwt } from 'express-jwt'
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })
export const checkJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.ISSUER_BASE_URL}/.well-known/jwks.json`
  }) as GetVerificationKey,

  audience: process.env.API_IDENTIFIER,
  algorithms: ['RS256']
})
