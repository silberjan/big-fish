import { Player } from 'big-fish-lib'
import { app } from 'src/app'
import { agent } from 'supertest'

describe('Testing games', () => {
  let playerOne, playerTwo, playerThree: Player

  beforeAll(async () => {
    // add 3 players
    let response = await agent(app).post(`/players/`).send({ username: 'edthecat' })
    playerOne = response.body
    response = await agent(app).post(`/players/`).send({ username: 'flash' })
    playerTwo = response.body
    response = await agent(app).post(`/players/`).send({ username: 'thereiter' })
    playerThree = response.body
  })

  test('create a game', async () => {
    let response = await agent(app)
      .post(`/games/`)
      .send({ players: [playerOne.id, playerTwo.id, playerThree.id], legs: 3, sets: 1, goal: 501 })
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.created).toBeDefined()
  })
})
