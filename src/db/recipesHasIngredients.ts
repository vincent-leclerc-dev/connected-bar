import { createCollection } from '.'
import { RecipeHasIngredient } from '../types/RecipeHasIngredient'

export const recipesHasIngredientsCol =
  createCollection<RecipeHasIngredient>('recipes_has_ingredients')
