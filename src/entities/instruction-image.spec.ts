import { describe, expect, it } from 'vitest'
import { InstructionImage } from './instruction-image'

describe('Instruction image', () => {
  it('Should be able create a instruction image', () => {
    const instructionImage = new InstructionImage({
      imageUrl: 'image-example.png',
      instructionId: 'instruction-id',
    })

    expect(instructionImage).toBeTruthy()
  })
})
