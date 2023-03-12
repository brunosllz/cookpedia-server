import { Prisma, Recipe } from '@prisma/client'

export interface RecipesRepository {
  create(data: Prisma.RecipeUncheckedCreateInput): Promise<Recipe>
  findByNameAndUserId(name: string, userId: string): Promise<Recipe | null>
}
