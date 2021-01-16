import { FC, useEffect, useState } from 'react'

const useKeyboardHistory = () => {
  const [keys, setKeys] = useState<string[]>([])
  useEffect(() => {
    const updateKeys = (e: KeyboardEvent) => {
      setKeys([...keys, e.key])
    }
    window.addEventListener('keyup', updateKeys)

    return () => window.removeEventListener('keyup', updateKeys)
  }, [keys])

  return keys
}

export const ExerciseTen: FC = () => {
  const keys = useKeyboardHistory()
  return (
    <ul>
      {keys.map((key, index) => (
        <li key={index}>{key}</li>
      ))}
    </ul>
  )
}
