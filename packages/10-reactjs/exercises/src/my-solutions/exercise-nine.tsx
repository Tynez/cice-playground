import { FC, useEffect, useState } from 'react'

const useViewPortDimensions = () => {
  //Todo: Probar con objeto
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateViewportDimensions = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateViewportDimensions)

    return () => window.removeEventListener('resize', updateViewportDimensions)
  }, [])

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
