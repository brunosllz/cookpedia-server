import { RecipesRepository } from '@/repositories/recipes-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { Recipe } from '@prisma/client'
import { RecipeWithSameNameError } from './errors/recipe-with-same-name-error'

interface RecipeUseCaseRequest {
  name: string
  image_url: string
  description: string
  cookTime: string
  serve_to: number
  origin: string
  user_id: string
  published_at?: Date
}

interface RecipeUseCaseResponse {
  recipe: Recipe
}

export class RecipeUseCase {
  constructor(
    private recipesRepository: RecipesRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    name,
    image_url,
    description,
    cookTime,
    serve_to,
    origin,
    user_id,
    published_at,
  }: RecipeUseCaseRequest): Promise<RecipeUseCaseResponse> {
    const recipeWithSameName = await this.recipesRepository.findByNameAndUserId(
      name,
      user_id,
    )

    if (recipeWithSameName) {
      throw new RecipeWithSameNameError()
    }

    const recipe = await this.recipesRepository.create({
      name,
      image_url,
      description,
      cookTime,
      serve_to,
      origin,
      user_id,
      published_at,
    })

    return { recipe }
  }
}
