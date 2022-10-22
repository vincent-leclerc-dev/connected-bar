import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setIngredient } from './ingredientSlice'

export function Ingredient() {
  const dispatch = useAppDispatch()
  const [ingredientName, setIngredientName] = useState('')

  const ingredientNameValue = String(ingredientName) || ''

  return (
    <div>
      <div className=''>
        <input
          className='form-input px-4 py-3 rounded'
          aria-label='name'
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <button
          className='px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800'
          onClick={() => dispatch(setIngredient(ingredientNameValue))}
        >
          Save
        </button>
      </div>
    </div>
  )
}
