import { Game, GameGoal } from 'big-fish-lib'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { PlayerEntity } from './Player'
import { VisitEntity } from './Visit'

export const GAME_TABLE_NAME = 'game'

@Entity(GAME_TABLE_NAME)
export class GameEntity extends Game {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created: Date

  @Column('varchar', { array: true })
  players: string[]

  @ManyToOne(() => PlayerEntity)
  winner?: string

  @Column()
  legs: number

  @Column({ default: 1 })
  sets: number

  @Column({ type: 'enum', enum: GameGoal, default: GameGoal.FIVE_OH_ONE })
  goal: GameGoal

  @OneToMany(() => VisitEntity, (visit) => visit.game)
  results: VisitEntity[]
}
