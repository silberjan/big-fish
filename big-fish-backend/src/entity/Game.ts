import { Game, GameGoal } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PlayerEntity } from './Player'

@Entity()
export class GameEntity implements Game {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created: Date

  @ManyToMany(() => PlayerEntity)
  playerIds: string[]

  @ManyToOne(() => PlayerEntity)
  winner?: string

  @Column({ nullable: false })
  legs: number

  @Column({ nullable: false, default: 1 })
  sets: number

  @Column({ type: 'enum', enum: GameGoal, default: GameGoal.FIVE_OH_ONE })
  goal: GameGoal

  @Column({ nullable: false, default: false })
  finished: boolean
}
