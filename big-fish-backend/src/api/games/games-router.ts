import { Router } from 'express'
import { decorateGame } from 'src/middleware/decorateGame'
import { createGame } from './create-game'
import { getGame } from './get-game'
import { recordVisit } from './record-visit'

export const gamesRouter = Router()

/**
 * Create new game
 */
gamesRouter.post('/', createGame)

/**
 * Get game details
 */
gamesRouter.get('/:gameId', decorateGame, getGame)

/**
 * Save a visit to a game
 */
gamesRouter.post('/:gameId/visits', decorateGame, recordVisit)

/**
 * Revert last visit
 */
gamesRouter.put('/:gameId/:setIndex/:legIndex/visits/revert')
