import { Request, Response } from 'express'
import { PlayerEntity } from 'src/entity/Player'
import { getConnection } from 'typeorm'

export async function createPlayer(req: Request, res: Response) {
  const { username } = req.body
  const con = getConnection()
  const playerRepo = con.getRepository(PlayerEntity)
  try {
    const saved = await playerRepo.save({ username })
    return res.status(201).send(saved)
  } catch (e) {
    return res.status(400).send({ message: 'Error Saving player' })
  }
}
