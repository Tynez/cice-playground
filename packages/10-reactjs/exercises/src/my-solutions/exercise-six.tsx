import { FC, useEffect, useState } from 'react'

export const ExerciseSix: FC = () => {
  const [value, setValue] = useState(localStorage.getItem('input') ?? '')

  useEffect(() => {
    localStorage.setItem('input', value)
  }, [value])

  return (
    <div>
      <input onChange={e => setValue(e.target.value)} type="text" value={value} />
    </div>
  )
}
