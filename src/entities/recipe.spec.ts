import { InstructionImage } from './instruction-image'
import { describe, expect, it } from 'vitest'
import { MakeRecipe } from '@/test/factories/recipe-factory'

describe('Recipe', () => {
  it('Should be able create a recipe', () => {
    const recipe = MakeRecipe()

    expect(recipe).toBeTruthy()
  })

  it('Should be not able create a recipe with instruction images length more than 3', () => {
    expect(() =>
      MakeRecipe({
        instructionImages: Array.from<InstructionImage>({ length: 5 }).map(
          () => {
            return new InstructionImage({
              imageUrl: 'image-example.png',
              instructionId: 'instruction-id',
            })
          },
        ),
      }),
    ).toThrow()
  })
})
