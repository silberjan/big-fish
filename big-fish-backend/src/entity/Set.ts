import { Leg, Player, Set } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { GameEntity } from './Game'
import { LegEntity } from './Leg'

@Entity()
export class SetEntitiy implements Set {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  index: number

  @CreateDateColumn()
  created: Date

  @ManyToOne(() => GameEntity)
  game: GameEntity
}
