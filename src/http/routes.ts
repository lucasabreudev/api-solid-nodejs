import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { autheticate } from './controllers/authenticate'
import { profile } from './controllers/profile'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', autheticate)

  app.get('/me', profile)
}
