import { useState } from 'react'

export function useCounter (initialValue) {
  const [counter, setCounter] = useState(initialValue)
  const incrementar = (incremento = 1) => setCounter(counter + incremento)
  const reset = () => setCounter(initialValue)
  const restar = (decremento = 1) => setCounter(counter - decremento)
  return [
    counter,
    incrementar,
    reset,
    restar
  ]
}
