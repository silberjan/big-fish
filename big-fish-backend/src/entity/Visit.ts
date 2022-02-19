import { Visit } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { LegEntity } from './Leg'
import { PlayerEntity } from './Player'

@Entity()
export class VisitEntity implements Visit {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  created: Date

  @ManyToOne(() => PlayerEntity)
  player: PlayerEntity

  @ManyToOne(() => LegEntity)
  leg: LegEntity

  @Column({ nullable: false })
  value: number

  @Column({ nullable: false, default: 3 })
  attempts: number
}
