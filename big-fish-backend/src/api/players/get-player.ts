import { Request, Response } from 'express'
import { PlayerEntity } from 'src/entity/Player'
import { getConnection } from 'typeorm'

export async function getPlayer(req: Request, res: Response) {
  const { playerId } = req.params
  const con = getConnection()
  const playerRepo = con.getRepository(PlayerEntity)
  try {
    const player = await playerRepo.findOne(playerId)
    return res.status(200).send(player)
  } catch (e) {
    return res.status(400).send({ message: 'Error getting player' })
  }
}
