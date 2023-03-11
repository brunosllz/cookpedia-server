import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class UserRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async FindByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
