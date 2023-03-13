import { describe, expect, it } from 'vitest'
import { Ingredient } from './ingredient'

describe('Ingredient', () => {
  it('Should be able create a ingredient', () => {
    const ingredient = new Ingredient({
      name: '1/4 Rice',
      recipeId: 'recipe-id',
      sortingIndex: 0,
    })

    expect(ingredient).toBeTruthy()
  })
})
