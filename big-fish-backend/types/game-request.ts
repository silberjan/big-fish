import { Request } from 'express'
import { GameEntity } from 'src/entity/Game'

export interface GameRequest extends Request {
  game: GameEntity
}
