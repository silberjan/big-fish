import { Router } from 'express'

export const playersRouter = Router()

/**
 * Create new player
 */
playersRouter.post('/')

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
