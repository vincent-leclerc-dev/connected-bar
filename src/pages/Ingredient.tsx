import { Ingredient } from '../features/ingredient/Ingredient'
import { IngredientList } from '../features/ingredient/IngredientList'

function IngredientPage() {
  return (
    <div className='flex dark:bg-gray-500'>
      <IngredientList />
      <Ingredient />
    </div>
  )
}

export default IngredientPage
