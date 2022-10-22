import { useEffect } from 'react'
import { Ingredient } from 'types/Ingredient'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getIngredients } from './ingredientSlice'

export function IngredientList() {
  const dispatch = useAppDispatch()

  const { ingredients } = useAppSelector((state) => state.ingredients)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  const ingredientsRow = ingredients.map((ingredient: Ingredient) => {
    return (
      <tr
        key={ingredient.name}
        className='text-right border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-800'
      >
        <td className='px-3 py-2 text-left'>
          <span>{ingredient.name}</span>
        </td>
      </tr>
    )
  })

  return (
    <div className='container p-2 mx-auto rounded-md sm:p-4 dark:text-gray-100 dark:bg-gray-900'>
      <h2 className='mb-3 text-2xl font-semibold leading-tight'>Standings</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full text-xs'>
          <thead className='rounded-t-lg dark:bg-gray-700'>
            <tr className='text-right'>
              <th title='Ranking' className='p-3 text-left'>
                ingredient
              </th>
            </tr>
          </thead>
          <tbody>{ingredientsRow}</tbody>
        </table>
      </div>
    </div>
  )
}
