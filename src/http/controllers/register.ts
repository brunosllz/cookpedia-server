import { FastifyRequest, FastifyReply } from 'fastify'
import { RegisterUseCase } from '@/use-cases/register'
import { z } from 'zod'
import { PrismaUserRepository } from '@/repositories/prisma-user-repository'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, name, password } = registerBodySchema.parse(request.body)

  try {
    const prismaUserRepository = new PrismaUserRepository()

    const registerUseCase = new RegisterUseCase(prismaUserRepository)

    await registerUseCase.execute({ email, name, password })
  } catch (error) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
