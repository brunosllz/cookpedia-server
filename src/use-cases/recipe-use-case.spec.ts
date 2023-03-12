import { InMemoryRecipesRepository } from '@/repositories/in-memory/in-memory-recipes-repository'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { describe, it, expect, beforeEach } from 'vitest'
import { RecipeWithSameNameError } from './errors/recipe-with-same-name-error'

import { RecipeUseCase } from './recipe-use-case'

let recipesRepository: InMemoryRecipesRepository
let usersRepository: InMemoryUsersRepository
let sut: RecipeUseCase

describe('Recipe use case', () => {
  beforeEach(() => {
    recipesRepository = new InMemoryRecipesRepository()
    usersRepository = new InMemoryUsersRepository()
    sut = new RecipeUseCase(recipesRepository, usersRepository)
  })

  it('Should be able create a recipe', async () => {
    const { recipe } = await sut.execute({
      cookTime: '1hr',
      description: 'Recipe description example',
      image_url: 'recipe-image-example',
      origin: 'brazil',
      serve_to: 3,
      name: 'Rice and bean',
      user_id: 'user-1',
    })

    expect(recipe.id).toEqual(expect.any(String))
  })

  it('Should be not able create recipe with same name', async () => {
    const user = await usersRepository.create({
      email: 'johndoe@email.com',
      name: 'John Doe',
      password_hash: await hash('123456', 6),
    })

    await sut.execute({
      cookTime: '1hr',
      description: 'Recipe description example',
      image_url: 'recipe-image-example',
      origin: 'brazil',
      serve_to: 3,
      name: 'Rice and bean',
      user_id: user.id,
    })

    await expect(() =>
      sut.execute({
        cookTime: '1hr',
        description: 'Recipe description example',
        image_url: 'recipe-image-example',
        origin: 'brazil',
        serve_to: 3,
        name: 'Rice and bean',
        user_id: user.id,
      }),
    ).rejects.toBeInstanceOf(RecipeWithSameNameError)
  })
})
