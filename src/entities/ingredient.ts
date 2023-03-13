import { Replace } from '@/helpers/Replace'
import { randomUUID } from 'node:crypto'

interface IngredientProps {
  name: string
  sortingIndex: number
  recipeId: string
}

export class Ingredient {
  private _id: string
  private props: IngredientProps

  constructor(
    props: Replace<IngredientProps, { recipeId?: string }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID()

    this.props = {
      ...props,
      recipeId: props.recipeId ?? randomUUID(),
    }
  }

  public get id() {
    return this._id
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get sortingIndex() {
    return this.props.sortingIndex
  }

  public set sortingIndex(sortingIndex: number) {
    this.props.sortingIndex = sortingIndex
  }

  public get recipeId() {
    return this.props.recipeId
  }

  public set recipeId(recipeId: string) {
    this.props.recipeId = recipeId
  }
}
