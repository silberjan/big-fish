import { Game, GameGoal } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PlayerEntity } from './Player'
import { VisitEntity } from './Visit'

export const GAME_TABLE_NAME = 'game'

@Entity(GAME_TABLE_NAME)
export class GameEntity implements Game {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created: Date

  @ManyToMany(() => PlayerEntity)
  players: string[]

  @ManyToOne(() => PlayerEntity)
  winner?: string

  @Column()
  legs: number

  @Column({ default: 1 })
  sets: number

  @Column({ type: 'enum', enum: GameGoal, default: GameGoal.FIVE_OH_ONE })
  goal: GameGoal

  @Column({ default: false })
  finished: boolean

  @OneToMany(() => VisitEntity, (visit) => visit.game)
  results: VisitEntity[]
}
