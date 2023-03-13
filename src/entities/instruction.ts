import { Replace } from '@/helpers/Replace'
import { randomUUID } from 'node:crypto'

interface InstructionProps {
  description: string
  sortingIndex: number
  recipeId: string
}

export class Instruction {
  private _id: string
  private props: InstructionProps

  constructor(
    props: Replace<InstructionProps, { recipeId?: string }>,
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

  public get description() {
    return this.props.description
  }

  public set description(description: string) {
    this.props.description = description
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
