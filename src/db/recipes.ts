import { createCollection } from '.'
import { Recipe } from '../types/Recipe'

export const recipesCol = createCollection<Recipe>('recipes')
