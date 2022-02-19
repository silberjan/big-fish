import { Router } from 'express'
import { createPlayer } from './create-player'

export const playersRouter = Router()

/**
 * Create new player
 */
playersRouter.post('/', createPlayer)

/**
 * Get all players
 */
playersRouter.get('/')

/**
 * Get a player
 */
playersRouter.get('/:playerId')

/**
 * Update a player
 */
playersRouter.put('/:payerId')

/**
 * Delete Player
 */
playersRouter.delete('/:playerId')
