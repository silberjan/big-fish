import { Visit } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { CheckoutEntitiy } from './Checkout'
import { GameEntity } from './Game'
import { PlayerEntity } from './Player'

export const VISIT_TABLE_NAME = 'visit'

@Entity(VISIT_TABLE_NAME)
export class VisitEntity implements Visit {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created: Date

  @Column()
  player: string

  @ManyToOne(() => GameEntity)
  game: GameEntity

  @Column()
  leg: number

  @Column()
  set: number

  @Column()
  value: number

  @ManyToOne(() => CheckoutEntitiy, { nullable: true })
  checkout?: CheckoutEntitiy
}
