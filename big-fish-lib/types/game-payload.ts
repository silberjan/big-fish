import { Game, GameGoal } from 'big-fish-lib'
import { MinLength } from 'class-validator'

export class GamePayload implements Partial<Game> {
  @MinLength(2)
  players: string[]

  legs: number

  sets: number

  goal: GameGoal

  constructor(literal: GamePayload) {
    Object.assign(this, literal)
  }
}
