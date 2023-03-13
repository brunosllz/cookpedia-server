import { describe, expect, it } from 'vitest'
import { Instruction } from './instruction'

describe('Instruction', () => {
  it('Should be able create a instructions', () => {
    const instructions = new Instruction({
      description: 'Description example',
      recipeId: 'recipe-id',
      sortingIndex: 0,
    })

    expect(instructions).toBeTruthy()
  })
})
