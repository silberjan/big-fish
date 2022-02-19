import { Player } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PlayerEntity implements Player {
  @PrimaryGeneratedColumn('increment')
  id: string

  @CreateDateColumn()
  created: Date

  @Column()
  username: string

  @Column()
  email: string
}
