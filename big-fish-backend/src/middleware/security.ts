import * as lusca from 'lusca'

/**
 * Middleware for security, that enables standard stuff: HSTS, xss protection and xframe only on same origin
 */
export const securityMiddleware = lusca({
  csrf: false,
  xframe: 'SAMEORIGIN',
  hsts: {
    maxAge: 31536000, // 1 year, in seconds
    includeSubDomains: true,
    preload: true,
  },
  xssProtection: true,
})
