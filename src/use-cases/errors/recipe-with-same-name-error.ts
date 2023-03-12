export class RecipeWithSameNameError extends Error {
  constructor() {
    super('Recipe with same name.')
  }
}
