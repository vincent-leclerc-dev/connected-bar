import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cocktail from './pages/Cocktail'
import Ingredient from './pages/Ingredient'
import Recipe from './pages/Recipe'
import NotFound from './pages/NotFound'
import Setting from './pages/Setting'

function App() {
  return (
        <div className='flex flex-row dark:bg-green-500'>
        
        <SideBar />
        <div className='flex flex-col dark:bg-yellow'>
          <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cocktails' element={<Cocktail />} />
          <Route path='/ingredients' element={<Ingredient />} />
          <Route path='/recipes' element={<Recipe />} />
          <Route path='/settings' element={<Setting />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
        
      <Footer />
    </div>
  )
}

export default App
