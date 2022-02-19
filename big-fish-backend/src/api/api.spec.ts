import { app } from 'src/app'
import { agent } from 'supertest'

describe('Add a User', () => {
  test('should add a player', async () => {
    const response = await agent(app).post(`/players/`).send({ username: 'edthecat' })
    expect(response.status).toBe(201)
    expect(response.body.id).toBeDefined()
    expect(response.body.username).toBe('edthecat')
  })
})
