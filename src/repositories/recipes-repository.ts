import { Recipe } from '@/entities/recipe'

export interface RecipesRepository {
  create(recipe: Recipe): Promise<Recipe>
  findById(recipeId: string): Promise<Recipe | null>
  save(recipe: Recipe): Promise<void>
}
