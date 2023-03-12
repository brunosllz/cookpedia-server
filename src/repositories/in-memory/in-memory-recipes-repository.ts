import { Prisma, Recipe } from '@prisma/client'
import { randomUUID } from 'crypto'
import { RecipesRepository } from '../recipes-repository'

export class InMemoryRecipesRepository implements RecipesRepository {
  public database: Recipe[] = []

  async create(data: Prisma.RecipeUncheckedCreateInput): Promise<Recipe> {
    const recipe: Recipe = {
      id: randomUUID(),
      cookTime: data.cookTime,
      description: data.description,
      image_url: data.image_url,
      origin: data.origin,
      published_at: data.published_at ? new Date(data.published_at) : null,
      serve_to: data.serve_to,
      name: data.name,
      user_id: data.user_id,
      created_at: new Date(),
    }

    this.database.push(recipe)

    return recipe
  }

  async findByNameAndUserId(name: string, userId: string) {
    const recipe = this.database.find(
      (recipe) => recipe.name === name && recipe.user_id === userId,
    )

    if (!recipe) {
      return null
    }

    return recipe
  }
}
