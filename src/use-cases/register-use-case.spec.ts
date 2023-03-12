import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { compare } from 'bcryptjs'
import { describe, it, expect } from 'vitest'
import { UserAlreadyExists } from './errors/user-already-exists'
import { RegisterUseCase } from './register-use-case'

describe('Register use case', () => {
  it('Should be able register', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository()
    const registerUseCase = new RegisterUseCase(inMemoryUserRepository)

    const { user } = await registerUseCase.execute({
      name: 'john Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should hash user password upon registration', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository()
    const registerUseCase = new RegisterUseCase(inMemoryUserRepository)

    const { user } = await registerUseCase.execute({
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

  it('Should be able register with a same email twice', async () => {
    const inMemoryUserRepository = new InMemoryUserRepository()
    const registerUseCase = new RegisterUseCase(inMemoryUserRepository)

    await registerUseCase.execute({
      name: 'john Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    await expect(() =>
      registerUseCase.execute({
        name: 'john Doe',
        email: 'johndoe@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExists)
  })
})
