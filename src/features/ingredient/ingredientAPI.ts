import { doc, setDoc, getDocs, query, where, orderBy } from '@firebase/firestore'
import { ingredientsCol } from '../../db/ingredients'
import { Ingredient } from '../../types/Ingredient'

export const listIngredients = async () => await getDocs(ingredientsCol)

export function createIngredient(name = '') {
  return new Promise<{ data: string }>((resolve) => {
    const ingredientRef = doc(ingredientsCol)
    setDoc(ingredientRef, {
      name,
    })
    console.log(ingredientRef.id)
    /*
        const recipeRef = doc(recipesCol)
        await setDoc(recipeRef, {
            name: 'Skrewdriver ' + new Date().getSeconds()
        })
        console.log(recipeRef.id);

        const ingredients = await searchIngredientByName('rhum bla');
        console.log(ingredients);
*/
    // const recipe = await searchRecipeByIngredientId();
    // console.log(ingredients);
    setTimeout(() => resolve({ data: name }), 500)
  })
}

export function searchIngredientByName(name: string): Promise<Ingredient[]> {
  return new Promise<Ingredient[]>((resolve, reject) => {
    const ingredients: Ingredient[] = []
    try {
      /*
            const byPrefix = query(
                ingredientsCol, 
                where('name', '>=', name), 
                where('name', '<=', name + '~')
            );
            */
      /*
            const byPrefixSnapshot = getDocs(byPrefix);
            byPrefixSnapshot.forEach((doc) => {
                ingredients.push(doc.data());
            });*/
      /*
            const exact = query(
                ingredientsCol, 
                where('name', '==', name), );
            const exactSnapshot = await getDocs(exact);
            exactSnapshot.forEach((doc) => {
                ingredients.push(doc.data());
            });

            const bySuffix = query(ingredientsCol, where('name', '<=', name));
            const bySuffixSnapshot = await getDocs(bySuffix);
            bySuffixSnapshot.forEach((doc) => {
                ingredients.push(doc.data());
            });
            */
      resolve(ingredients)
    } catch (e) {
      reject(e)
    }
  })
}
