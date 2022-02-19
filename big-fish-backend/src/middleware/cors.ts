import { NextFunction, Request, Response } from 'express'

/**
 * Middleware that sets some required headers on the response object, needed in the client and the other services
 */
export function corsHeaders(req: Request, res: Response, next: NextFunction) {
  res.header('Access-Control-Allow-Origin', req.header('origin') || '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, X-XSRF-TOKEN, Authorization, X-TOTAL-COUNT'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Expose-Headers', 'X-TOTAL-COUNT')
  next()
}
