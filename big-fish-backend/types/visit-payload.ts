import { Visit } from 'big-fish-lib'
import { IsInt, Max, Min } from 'class-validator'

export class VisitPayload implements Partial<Omit<Visit, 'player' | 'checkout'>> {
  @IsInt()
  @Min(0)
  @Max(180)
  value!: number

  @IsInt()
  set!: number

  @IsInt()
  leg!: number

  player!: string

  checkout?: string

  constructor(literal: VisitPayload) {
    Object.assign(this, literal)
  }
}
