import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { app } from './app'
import { EXPRESS_PORT } from './config'

console.log('Starting big-fish backend...')

app.listen(EXPRESS_PORT, () => {
  console.log(`Express listening on port ${EXPRESS_PORT}`)
})

createConnection()
  .then(() => {
    console.log('Successfully connected to db')
  })
  .catch((error) => console.log(error))
