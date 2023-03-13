import { Replace } from '@/helpers/Replace'
import { Ingredient } from './ingredient'
import { randomUUID } from 'node:crypto'
import { Instruction } from './instruction'
import { InstructionImage } from './instruction-image'

export interface RecipeProps {
  name: string
  imageUrl: string
  description: string
  cookTime: string
  serveTo: number
  origin: string
  ingredients: Ingredient[]
  instructions: Instruction[]
  instructionImages: InstructionImage[]
  userId: string
  publishedAt?: Date | undefined
  createdAt: Date
}

export class Recipe {
  private _id: string
  private props: RecipeProps

  private validateAmountInstructionsImage(
    instructionImage: InstructionImage[],
  ): boolean {
    return instructionImage.length <= 3
  }

  constructor(props: Replace<RecipeProps, { createdAt?: Date }>, id?: string) {
    const isAmountInstructionImagesValid = this.validateAmountInstructionsImage(
      props.instructionImages,
    )

    if (!isAmountInstructionImagesValid) {
      throw new Error('Amount instructions images not valid.')
    }

    this._id = id ?? randomUUID()

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
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

  public get image_url() {
    return this.props.name
  }

  public set image_url(name: string) {
    this.props.name = name
  }

  public get description() {
    return this.props.name
  }

  public set description(description: string) {
    this.props.description = description
  }

  public get cookTime() {
    return this.props.cookTime
  }

  public set cookTime(cookTime: string) {
    this.props.cookTime = cookTime
  }

  public get serveTo() {
    return this.props.serveTo
  }

  public set serveTo(serveTo: number) {
    this.props.serveTo = serveTo
  }

  public get ingredients() {
    return this.props.ingredients
  }

  public set ingredients(ingredient: Ingredient[]) {
    this.props.ingredients = ingredient
  }

  public get instructions() {
    return this.props.instructions
  }

  public set instructions(instruction: Instruction[]) {
    this.props.instructions = instruction
  }

  public get userId() {
    return this.props.userId
  }

  public set userId(userId: string) {
    this.props.userId = userId
  }

  public get origin() {
    return this.props.origin
  }

  public set origin(origin: string) {
    this.props.origin = origin
  }

  public publish() {
    this.props.publishedAt = new Date()
  }

  public get publishedAt(): Date | undefined {
    return this.props.publishedAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}
