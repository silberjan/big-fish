import { Router } from 'express'
import { createPlayer } from './create-player'
import { getPlayer } from './get-player'
import { listPlayers } from './list-players'

export const playersRouter = Router()

/**
 * Create new player
 */
playersRouter.post('/', createPlayer)

/**
 * Get all players
 */
playersRouter.get('/', listPlayers)

/**
 * Get a player
 */
playersRouter.get('/:playerId', getPlayer)

/**
 * Update a player
 */
playersRouter.put('/:payerId')

/**
 * Delete Player
 */
playersRouter.delete('/:playerId')
