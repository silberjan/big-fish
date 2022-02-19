import { Router } from 'express'
import { createGame } from './create-game'

export const gamesRouter = Router()

/**
 * Create new game
 */
gamesRouter.post('/', createGame)

/**
 * Get game details
 */
gamesRouter.get('/:gameId')

/**
 * Save a visit to a game
 */
gamesRouter.post('/:gameId/:setIndex/:legIndex/visits')

/**
 * Revert last visit
 */
gamesRouter.put('/:gameId/:setIndex/:legIndex/visits/revert')
