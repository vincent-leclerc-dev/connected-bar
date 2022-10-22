import { useEffect, useState } from 'react'

interface State {
  date: Date
}

export const Clock = () => {
  const [clock, setClock] = useState<State>({
    date: new Date(),
  })

  useEffect(() => {
    const clock = setInterval(() => setClock({ date: new Date() }), 1000)

    return () => clearInterval(clock)
  })

  return (
    <div className='flex items-center mr-4'>
      {clock.date.toLocaleDateString('fr-FR') + ' ' + clock.date.toLocaleTimeString('fr-FR')}
    </div>
  )
}
