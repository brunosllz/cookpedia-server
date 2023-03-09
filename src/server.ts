import { prisma } from './lib/prisma'
import { z } from 'zod'
import { app } from './app'
import { env } from './env'

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, name, password } = registerBodySchema.parse(request.body)

  await prisma.user.create({
    data: {
      email,
      name,
      password_hash: password,
    },
  })

  return reply.status(201).send()
})

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log('🚀 Server is running!')
  })
