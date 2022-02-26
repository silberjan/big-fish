import { Response } from 'express'
import { GameEntity } from 'src/entity/Game'
import { getConnection } from 'typeorm'
import { GameRequest } from 'types/game-request'

export async function createGame(req: GameRequest, res: Response) {
  const con = getConnection()
  const gameRepo = con.getRepository(GameEntity)
  try {
    const saved = await gameRepo.save(req.body, { transaction: true })
    return res.status(201).send(saved)
  } catch (e) {
    return res.status(400).send({ message: 'Error creating game' })
  }
}
