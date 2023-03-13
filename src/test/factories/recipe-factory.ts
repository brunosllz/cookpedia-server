import { Ingredient } from '@/entities/ingredient'
import { Instruction } from '@/entities/instruction'
import { InstructionImage } from '@/entities/instruction-image'
import { Recipe, RecipeProps } from '@/entities/recipe'

type Override = Partial<RecipeProps>

export function MakeRecipe(override: Override = {}, id?: string) {
  return new Recipe(
    {
      cookTime: '1 hr',
      description: 'Recipe description',
      imageUrl: 'recipe-image.png',
      name: 'Rice and bean',
      origin: 'Brazil',
      serveTo: 2,
      userId: 'user-1',
      ingredients: Array.from<Ingredient>({ length: 3 }).map((_, i) => {
        return new Ingredient({
          name: '1/4 Rice',
          sortingIndex: i,
        })
      }),
      instructions: Array.from<Instruction>({ length: 3 }).map((_, i) => {
        return new Instruction({
          description: 'Example description',
          sortingIndex: i,
        })
      }),
      instructionImages: Array.from<InstructionImage>({ length: 3 }).map(() => {
        return new InstructionImage({
          imageUrl: 'image-example.png',
        })
      }),
      ...override,
    },
    id,
  )
}
