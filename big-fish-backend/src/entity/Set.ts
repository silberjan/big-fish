import { Set } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { GameEntity } from './Game'
import { LegEntity } from './Leg'

export const SET_TABLE_NAME = 'set'

@Entity(SET_TABLE_NAME)
export class SetEntitiy implements Set {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  index: number

  @CreateDateColumn()
  created: Date

  @OneToMany(() => LegEntity, (leg) => leg.set)
  legs: LegEntity[]

  @ManyToOne(() => GameEntity)
  game: GameEntity
}
