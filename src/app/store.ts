import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import ingredientsReducer from '../features/ingredient/ingredientSlice'
import recipeReducer from '../features/recipe/recipeSlice'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ingredients: ingredientsReducer,
    recipe: recipeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
