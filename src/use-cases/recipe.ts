import { Ingredient } from '@/entities/ingredient'
import { Instruction } from '@/entities/instruction'
import { InstructionImage } from '@/entities/instruction-image'
import { Recipe } from '@/entities/recipe'
import { RecipesRepository } from '@/repositories/recipes-repository'

interface RecipeUseCaseRequest {
  name: string
  imageUrl: string
  description: string
  cookTime: string
  serveTo: number
  origin: string
  ingredients: Array<{ name: string; sortingIndex: number }>
  instructions: Array<{ description: string; sortingIndex: number }>
  instructionImages: Array<{ imageUrl: string }>
  userId: string
  publishedAt?: Date | undefined
}

interface RecipeUseCaseResponse {
  recipe: Recipe
}

export class RecipeUseCase {
  constructor(private recipesRepository: RecipesRepository) {}

  async execute({
    name,
    imageUrl,
    ingredients,
    instructions,
    instructionImages,
    description,
    cookTime,
    serveTo,
    origin,
    userId,
    publishedAt,
  }: RecipeUseCaseRequest): Promise<RecipeUseCaseResponse> {
    const createdRecipe = new Recipe({
      cookTime,
      description,
      imageUrl,
      ingredients: ingredients.map((ingredient) => {
        const ingredientCreated = new Ingredient({
          name: ingredient.name,

          sortingIndex: ingredient.sortingIndex,
        })

        return ingredientCreated
      }),
      instructionImages: instructionImages.map((instructionImage) => {
        const instructionImageCreated = new InstructionImage({
          imageUrl: instructionImage.imageUrl,
        })

        return instructionImageCreated
      }),
      instructions: instructions.map((instruction) => {
        const instructionCreated = new Instruction({
          description: instruction.description,
          sortingIndex: instruction.sortingIndex,
        })

        return instructionCreated
      }),
      name,
      origin,
      serveTo,
      userId,
      publishedAt,
    })

    const recipe = await this.recipesRepository.create(createdRecipe)

    return { recipe }
  }
}
