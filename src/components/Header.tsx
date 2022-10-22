import { Clock } from './Clock'

export const Header = () => {
  return (
    <header className='w-full bg-red-500 text-white h-screen'>
      <div className='flex justify-end h-16'>
        <Clock />
      </div>
    </header>
  )
}
