import { FC, useEffect, useState } from 'react'

export const ExerciseFive: FC = () => {
  const [counter, setCounter] = useState(10)
  let showBoom: boolean = counter < 1

  useEffect(() => {
    setCounter(counter < 1 ? 0 : counter)
  }, [counter])

  if (showBoom) {
    return (
      <div>
        <button onClick={() => setCounter(10)}>Reset</button>
        <h1>¡Boom!</h1>
      </div>
    )
  }
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>Counter {counter}</button>
    </div>
  )
}
