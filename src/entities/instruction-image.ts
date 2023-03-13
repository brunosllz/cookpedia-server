import { Replace } from '@/helpers/Replace'
import { randomUUID } from 'node:crypto'

interface InstructionImageProps {
  imageUrl: string
  instructionId: string
}

export class InstructionImage {
  private _id: string
  private props: InstructionImageProps

  constructor(
    props: Replace<InstructionImageProps, { instructionId?: string }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID()

    this.props = {
      ...props,
      instructionId: props.instructionId ?? randomUUID(),
    }
  }

  public get id() {
    return this._id
  }

  public get imageUrl() {
    return this.props.imageUrl
  }

  public set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl
  }

  public get instructionId() {
    return this.props.instructionId
  }

  public set instructionId(instructionId: string) {
    this.props.instructionId = instructionId
  }
}
