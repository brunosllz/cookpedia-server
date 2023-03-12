import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { compare } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { RegisterUseCase } from './register-use-case'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })

  it('Should be able register', async () => {
    const { user } = await sut.execute({
      name: 'john Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'john Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('Should be not able register with same email twice', async () => {
    await sut.execute({
      name: 'john Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'john Doe',
        email: 'johndoe@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
