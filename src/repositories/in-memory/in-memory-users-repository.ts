import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUserRepository implements UsersRepository {
  public database: User[] = []

  async create(data: Prisma.UserCreateInput) {
    const user: User = {
      id: randomUUID(),
      email: data.email,
      name: data.name,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.database.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.database.find((user) => user.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
