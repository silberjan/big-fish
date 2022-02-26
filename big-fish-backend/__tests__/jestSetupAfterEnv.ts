import { initDb } from 'src/init'
import { Connection, createConnection } from 'typeorm'
let con: Connection

beforeAll(async () => {
  con = await createConnection()
  await con.dropDatabase()
  await con.synchronize()
  await initDb()
})

afterAll(async () => con?.close())
