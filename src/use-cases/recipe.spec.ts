import { InMemoryRecipesRepository } from '@/repositories/in-memory/in-memory-recipes-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { RecipeUseCase } from './recipe'

let recipesRepository: InMemoryRecipesRepository
let sut: RecipeUseCase

describe('Recipe use case', () => {
  beforeEach(() => {
    recipesRepository = new InMemoryRecipesRepository()
    sut = new RecipeUseCase(recipesRepository)
  })

  it('Should be able create a recipe', async () => {
    const { recipe } = await sut.execute({
      cookTime: '1 hr',
      description: 'Recipe description',
      imageUrl: 'recipe-image.png',
      name: 'Rice and bean',
      origin: 'Brazil',
      serveTo: 2,
      userId: 'user-1',
      ingredients: [
        {
          name: 'Rice and bean',
          sortingIndex: 0,
        },
        {
          name: 'Rice and bean',
          sortingIndex: 1,
        },
        {
          name: 'Rice and bean',
          sortingIndex: 2,
        },
      ],
      instructions: [
        {
          description: 'Description example',
          sortingIndex: 0,
        },
      ],
      instructionImages: [
        {
          imageUrl: 'image-example.png',
        },
      ],
    })

    expect(recipe.id).toEqual(expect.any(String))
  })
})
