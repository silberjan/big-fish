import { Router } from 'express'

export const gamesRouter = Router()

/**
 * Create new game
 */
gamesRouter.post('/')

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
