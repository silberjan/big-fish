import { VisitPayload } from 'big-fish-lib'
import { validate } from 'class-validator'
import { Response } from 'express'
import { CheckoutEntitiy } from 'src/entity/Checkout'
import { VisitEntity } from 'src/entity/Visit'
import { getConnection } from 'typeorm'
import { GameRequest } from 'types/game-request'

export async function recordVisit(req: GameRequest, res: Response) {
  const payload = new VisitPayload(req.body)
  const validationErrors = await validate(payload)

  if (validationErrors.length > 0) {
    return res.status(400).send(validationErrors)
  }

  if (payload.set !== req.game.currentSet) {
    return res.status(400).send({ message: 'Cannot record a visit for this set' })
  }

  if (payload.leg !== req.game.currentLeg) {
    return res.status(400).send({ message: 'Cannot record a visit for this leg' })
  }

  const currentStandings = req.game.getStandings(payload.set, payload.leg)
  const requiredPoints = currentStandings.requiredPoints[payload.player]

  if (payload.value > requiredPoints) {
    return res.status(400).send({ message: 'Cannot record visit: Value too high' })
  }

  if (requiredPoints - payload.value === 1) {
    return res.status(400).send({ message: 'Cannot record visit: Would result in 1 left' })
  }

  if (payload.player !== req.game.currentThrowSituation.nextToThrow) {
    return res.status(400).send({ message: 'Cannot record visit: Its not the turn of this player' })
  }

  const con = getConnection()
  if (payload.value === requiredPoints) {
    if (!payload.checkout) {
      return res.status(400).send({ message: 'Cannot record visit: Missing checkout' })
    }
    const checkoutRepo = con.getRepository(CheckoutEntitiy)
    const checkout = await checkoutRepo.findOne(payload.checkout)
    if (checkout.value !== payload.value) {
      return res.status(400).send({ message: 'Cannot record visit: Checkout does not match required points' })
    }
    const visitRepo = con.getRepository(VisitEntity)
    const saved = await visitRepo.save({ ...payload, game: req.game, checkout })
    return res.status(201).send(saved)
  }

  const visitRepo = con.getRepository(VisitEntity)
  const saved = await visitRepo.save({ ...payload, game: req.game, checkout: null })
  return res.status(201).send(saved)
}
