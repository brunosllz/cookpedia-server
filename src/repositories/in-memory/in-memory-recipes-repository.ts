import { Recipe } from '@/entities/recipe'
import { RecipesRepository } from '../recipes-repository'

export class InMemoryRecipesRepository implements RecipesRepository {
  public recipes: Recipe[] = []

  async create(recipe: Recipe) {
    this.recipes.push(recipe)

    return recipe
  }

  async findById(recipeId: string) {
    const recipe = this.recipes.find((recipe) => recipe.id === recipeId)

    if (!recipe) {
      return null
    }

    return recipe
  }

  async save(recipe: Recipe) {
    const recipeIndex = this.recipes.findIndex((item) => item.id === recipe.id)

    if (recipeIndex >= 0) {
      this.recipes[recipeIndex] = recipe
    }
  }
}
