import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetUserProfileUseCase } from './get-user-profile-use-case'

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get user profile use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('Should be able get user profile', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const sut = new GetUserProfileUseCase(usersRepository)

    const createdUser = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('John Doe')
  })

  it('Should be not able get user profile with wrong id', async () => {
    await expect(() =>
      sut.execute({
        userId: 'non-exist-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
