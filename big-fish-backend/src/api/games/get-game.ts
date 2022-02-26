import { Response } from 'express'
import { GameRequest } from 'types/game-request'

export async function getGame(req: GameRequest, res: Response) {
  return res.status(200).send(req.game)
}
