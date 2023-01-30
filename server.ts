import { config } from 'dotenv'
import fastify from 'fastify'

config()

const app = fastify()

app.listen({
  port: +process.env.PORT!
})
