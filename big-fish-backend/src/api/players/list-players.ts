import { Request, Response } from 'express'
import { PlayerEntity } from 'src/entity/Player'
import { getConnection } from 'typeorm'

export async function listPlayers(req: Request, res: Response) {
  const con = getConnection()
  const playerRepo = con.getRepository(PlayerEntity)
  try {
    const players = await playerRepo.find()
    return res.status(200).send(players)
  } catch (e) {
    return res.status(400).send({ message: 'Error getting player' })
  }
}
