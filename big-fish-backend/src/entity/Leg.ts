import { Leg } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SetEntitiy } from './Set'
import { VisitEntity } from './Visit'

export const LEG_TABLE_NAME = 'leg'

@Entity(LEG_TABLE_NAME)
export class LegEntity implements Leg {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  index: number

  @CreateDateColumn()
  created: Date

  @OneToMany(() => VisitEntity, (visit) => visit.leg)
  visits: SetEntitiy[]

  @ManyToOne(() => SetEntitiy)
  set: SetEntitiy
}
