import { NextFunction, Request, Response } from 'express'
import { GameEntity } from 'src/entity/Game'
import { getConnection } from 'typeorm'
import { GameRequest } from 'types/game-request'

export async function decorateGame(req: GameRequest, res: Response, next: NextFunction) {
  const { gameId } = req.params
  const con = getConnection()
  const gameRepo = con.getRepository(GameEntity)
  try {
    const game = await gameRepo.findOne(gameId, { relations: ['results'] })
    if (game) {
      req.game = game
      next()
    } else {
      res.status(404).send({ message: 'Could not find game' })
    }
  } catch (e) {
    return res.status(400).send({ message: 'Error getting game' })
  }
}
