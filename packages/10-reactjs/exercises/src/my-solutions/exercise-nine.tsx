import { FC, useState } from 'react'

const useViewPortDimensions = () => {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  return {
    height,
    width
  }
}

export const ExerciseNine: FC = () => {
  const { height, width } = useViewPortDimensions()

  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  )
}
