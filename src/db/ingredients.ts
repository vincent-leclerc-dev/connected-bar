import { createCollection } from '.'
import { Ingredient } from '../types/Ingredient'

export const ingredientsCol = createCollection<Ingredient>('ingredients')
