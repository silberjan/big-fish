import { Player } from 'big-fish-lib'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

export const PLAYER_TABLE_NAME = 'player'

@Entity(PLAYER_TABLE_NAME)
export class PlayerEntity implements Player {
  @PrimaryGeneratedColumn('increment')
  id: number

  @CreateDateColumn()
  created: Date

  @Column({ unique: true })
  username: string

  @Column({ nullable: true })
  email?: string
}
