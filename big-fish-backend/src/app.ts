import * as compression from 'compression'
import * as express from 'express'
import { json, urlencoded } from 'express'
import * as morgan from 'morgan'
import { gamesRouter } from './api/games/games-router'
import { playersRouter } from './api/players/players-router'
import { corsHeaders } from './middleware/cors'

export const app = express()

// logging
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('[:date[clf]] :method :url :status :response-time ms - :res[content-length]'))
}

// use compression
app.use(compression())
// set some usual cors headers
app.use(corsHeaders)
// enable uploads
app.use(urlencoded({ extended: false }))
// enable json bodys
app.use(json({ limit: '1mb' }))

// setup api routes
app.use('/games', gamesRouter)
app.use('/players', playersRouter)
