import { InMemoryRecipesRepository } from '@/repositories/in-memory/in-memory-recipes-repository'
import { MakeRecipe } from '@/test/factories/recipe-factory'

import { describe, it, expect, beforeEach } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PublishRecipeUseCase } from './publish-recipe'

let recipesRepository: InMemoryRecipesRepository
let sut: PublishRecipeUseCase

describe('Publish recipe use case', () => {
  beforeEach(() => {
    recipesRepository = new InMemoryRecipesRepository()
    sut = new PublishRecipeUseCase(recipesRepository)
  })

  it('Should be able publish a recipe', async () => {
    const createdRecipe = MakeRecipe({}, 'recipe-1')

    recipesRepository.create(createdRecipe)

    const { recipe } = await sut.execute({
      recipeId: createdRecipe.id,
    })

    expect(recipe.publishedAt).toEqual(expect.any(Date))
  })

  it('Should be not able publish a recipe with a invalid recipeId', async () => {
    await expect(() =>
      sut.execute({
        recipeId: 'non-recipe-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
