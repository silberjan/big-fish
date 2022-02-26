import { Checkout, CheckoutInOne, CheckoutInThree, CheckoutInTwo } from 'big-fish-lib'
import { Column, Entity, PrimaryColumn } from 'typeorm'

export const VISIT_TABLE_NAME = 'checkout'

@Entity(VISIT_TABLE_NAME)
export class CheckoutEntitiy implements Checkout {
  @PrimaryColumn()
  readonly id: string

  @Column('int')
  readonly value: number

  @Column('varchar', { array: true })
  readonly sequence: CheckoutInOne | CheckoutInTwo | CheckoutInThree
}
