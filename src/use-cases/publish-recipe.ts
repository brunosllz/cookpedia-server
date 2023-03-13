import { Recipe } from '@/entities/recipe'
import { RecipesRepository } from '@/repositories/recipes-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface PublishRecipeUseCaseRequest {
  recipeId: string
}

interface PublishRecipeUseCaseResponse {
  recipe: Recipe
}

export class PublishRecipeUseCase {
  constructor(private recipesRepository: RecipesRepository) {}

  async execute({
    recipeId,
  }: PublishRecipeUseCaseRequest): Promise<PublishRecipeUseCaseResponse> {
    const recipe = await this.recipesRepository.findById(recipeId)

    if (!recipe) {
      throw new ResourceNotFoundError()
    }

    recipe.publish()

    await this.recipesRepository.save(recipe)

    return { recipe }
  }
}
