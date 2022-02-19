import { Connection, createConnection } from 'typeorm'
let con: Connection

beforeAll(async () => {
  con = await createConnection()
  await con.dropDatabase()
  await con.synchronize()
})

afterAll(async () => con?.close())
