import { Player } from './player'

export interface Visit {
  id: number
  created: Date
  value: number // max 180
  attempts: number // in a checkout it could be less than 3
  player: Player
  leg: number
  set: number
}

export enum GameGoal {
  ONE_OH_ONE = 101,
  THREE_OH_ONE = 301,
  FIVE_OH_ONE = 501,
  SEVEN_OH_ONE = 701,
}

export interface Game {
  id: number
  created: Date
  players: string[]
  winner?: string
  legs: number
  sets: number
  goal: GameGoal
  finished: boolean
  results: Visit[]
  checkout?: string
}
