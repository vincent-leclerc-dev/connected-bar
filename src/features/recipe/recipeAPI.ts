import { doc, setDoc, getDocs, query, where, orderBy } from '@firebase/firestore'
import { recipesCol } from '../../db/recipes'
import { Recipe } from '../../types/Recipe'

export function listRecipes() {
  return new Promise<{ data: string }>((resolve) => resolve({ data: '' }))
}

export function createRecipe(name = '') {
  return new Promise<{ data: string }>((resolve) => {
    const recipeRef = doc(recipesCol)
    setDoc(recipeRef, {
      name,
    })
    console.log(recipeRef.id)

    setTimeout(() => resolve({ data: name }), 500)
  })
}

export function searchRecipeByName(name: string): Promise<Recipe[]> {
  return new Promise<Recipe[]>((resolve, reject) => {
    const recipes: Recipe[] = []
    try {
      /*
      const byPrefix = query(recipesCol, where('name', '>=', name), where('name', '<=', name + '~'))
      const byPrefixSnapshot = getDocs(byPrefix)
      byPrefixSnapshot.forEach((doc) => {
        recipes.push(doc.data())
      })*/

      resolve(recipes)
    } catch (e) {
      reject(e)
    }
  })
}
