import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCube,
  faHome,
  faCocktail,
  faSearch,
  faBook,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

library.add(faBook, faCocktail, faCube, faGear, faHome, faSearch);

interface State {
  title: string
}

export const SideBar = () => {
  const [appConfig] = useState<State>({
    title: 'Connected\u00A0Bar',
  })

  const NavLinkClasses = 'flex items-center justify-left h-8 mb-4 hover:text-white';
  const H2Classes = 'hidden md:block font-semibold ml-4';
  const IconClasses = 'w-6 h-6 text-white';

  return (
    <aside className='flex sm:w-16 md:w-52 p-6 bg-black text-gray-500'>
      <nav>
        <NavLink to='/' className={NavLinkClasses}>
          <FontAwesomeIcon icon='cube' className={IconClasses} />
          <h2 className={H2Classes}>{appConfig.title}</h2>
        </NavLink>
        <NavLink to='/' className={NavLinkClasses}>
          <FontAwesomeIcon icon='home' className={IconClasses} />
          <h2 className={H2Classes}>Accueil</h2>
        </NavLink>
        <NavLink to='/search' className={NavLinkClasses}>
          <FontAwesomeIcon icon='search' className={IconClasses} />
          <h2 className={H2Classes}>Rechercher</h2>
        </NavLink>
        <NavLink to='/cocktails' className={NavLinkClasses}>
          <FontAwesomeIcon icon='cocktail' className={IconClasses} />
          <h2 className={H2Classes}>Cocktails</h2>
        </NavLink>
        <NavLink to='/ingredients' className={NavLinkClasses}>
          <FontAwesomeIcon icon='book' className={IconClasses} />
          <h2 className={H2Classes}>Ingredients</h2>
        </NavLink>
        <NavLink to='/recipes' className={NavLinkClasses}>
          <FontAwesomeIcon icon='book' className={IconClasses} />
          <h2 className={H2Classes}>Recettes</h2>
        </NavLink>
        <NavLink to='/settings' className={NavLinkClasses}>
          <FontAwesomeIcon icon='gear' className={IconClasses} />
          <h2 className={H2Classes}>Settings</h2>
        </NavLink>
      </nav>
    </aside>
  )
}
