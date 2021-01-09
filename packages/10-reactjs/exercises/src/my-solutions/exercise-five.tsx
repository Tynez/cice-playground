import { FC, useEffect, useState } from 'react'

export const ExerciseFive: FC = () => {
  const [counter, setCounter] = useState(10)
  const [showBoom, setShowBoom] = useState(false)

  useEffect(() => {
    if (counter < 1) {
      setShowBoom(true)
      setCounter(0)
    } else {
      setShowBoom(false)
    }
  }, [counter])

  if (showBoom) {
    return (
      <div>
        <button>Reset</button>
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
