import { config } from 'dotenv'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { userRoutes } from './routes/users'

config()

const app = fastify()

app.register(cors, { origin: 'http://localhost:3000' })
app.register(userRoutes)

app.listen({
  port: 3500
})
