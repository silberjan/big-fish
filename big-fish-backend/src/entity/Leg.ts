import { Leg } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { SetEntitiy } from './Set'

@Entity()
export class LegEntity implements Leg {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  index: number

  @CreateDateColumn()
  created: Date

  @ManyToOne(() => SetEntitiy)
  set: SetEntitiy
}
