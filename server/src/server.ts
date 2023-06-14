import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const PORT: number = 3333

const app = fastify()
app.register(cors, {
  origin: true,
})
app.register(authRoutes)
app.register(memoriesRoutes)
app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server is running on http://localhost:' + PORT)
  })
