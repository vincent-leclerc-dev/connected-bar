import { useState } from 'react'

interface State {
  title: string
  year: number
}

export const Footer = () => {
  const [appConfig] = useState<State>({
    title: 'Connected Bar',
    year: new Date().getFullYear(),
  })

  return (
    <footer
      className='w-full h-20 bg-blue-500 text-white
      fixed left-0 bottom-0 
      flex items-center justify-center '
    >
      <a
        rel='noopener noreferrer'
        href='/'
        aria-label='Back to homepage'
        className='flex items-center'
      >
        {`© ${appConfig.year} ${appConfig.title}`}
      </a>
    </footer>
  )
}
