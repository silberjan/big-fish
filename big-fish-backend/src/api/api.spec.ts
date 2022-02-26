import { Player } from 'big-fish-lib'
import exp = require('constants')
import { app } from 'src/app'
import { agent } from 'supertest'

describe('Testing games', () => {
  let playerOne, playerTwo, playerThree: Player

  // beforeAll(async () => {
  //   // add 3 players
  //   let response = await agent(app).post(`/players/`).send({ username: 'edthecat' })
  //   playerOne = response.body
  //   response = await agent(app).post(`/players/`).send({ username: 'flash' })
  //   playerTwo = response.body
  //   response = await agent(app).post(`/players/`).send({ username: 'thereiter' })
  //   playerThree = response.body
  // })

  // test('Get a player', async () => {
  //   let response = await agent(app).get(`/players/1`)
  //   expect(response.status).toBe(200)
  //   expect(response.body.username).toBe('edthecat')
  // })

  // test('Get all players', async () => {
  //   let response = await agent(app).get(`/players`)
  //   expect(response.status).toBe(200)
  //   expect(response.body.length).toBe(3)
  // })

  test.only('create a game and record scores', async () => {
    let response = await agent(app)
      .post(`/games/`)
      .send({ players: ['edthecat', 'flash', 'reiter'], legs: 3, sets: 1, goal: 501 })
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.created).toBeDefined()

    const gameId = response.body.id

    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'edthecat', set: 0, leg: 0, value: 180 })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'flash', set: 0, leg: 0, value: 26 })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'reiter', set: 0, leg: 0, value: 101 })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'edthecat', set: 0, leg: 0, value: 180 })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'flash', set: 0, leg: 0, value: 26 })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'reiter', set: 0, leg: 0, value: 101 })
    expect(response.status).toBe(201)
    response = await agent(app)
      .post(`/games/${gameId}/visits`)
      .send({ player: 'edthecat', set: 0, leg: 0, value: 141, checkout: '141-0001' })
    expect(response.status).toBe(201)
    response = await agent(app).post(`/games/${gameId}/visits`).send({ player: 'flash', set: 0, leg: 0, value: 26 })
    expect(response.status).toBe(400)
  })
})
