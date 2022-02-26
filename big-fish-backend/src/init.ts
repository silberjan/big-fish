import { Checkout } from 'big-fish-lib'
import { readFileSync } from 'fs'
import { getConnection } from 'typeorm'
import { CheckoutEntitiy } from './entity/Checkout'

export async function initDb() {
  const json = readFileSync(__dirname + '/checkouts.json', { encoding: 'utf-8' })
  const checkouts: Checkout[] = JSON.parse(json)
  return getConnection().transaction(async (em) => {
    console.log(`Inserting ${checkouts.length} checkouts to the db...`)
    await em.save(CheckoutEntitiy, checkouts, { chunk: 10000 })
    const count = await em.count(CheckoutEntitiy)
    console.log(`${count} checkouts are now in the db`)
  })
}
