import { CustomButton } from './components/CustomButton'
import { useCounter } from './hooks/useCounter'

function CounterApp () {
  const [counter, incrementar, reset, restar] = useCounter(4)
  const incremento = 4
  return (
    <>
      <h1 className='mb-5 text-5xl text-center'>Counter</h1>
      <strong className='block m-3 text-3xl text-center'>Incrento en {incremento}: {counter}</strong>
      <div className='flex justify-center gap-2'>
        <CustomButton onCustomClick={() => incrementar(incremento)}>Incrementar</CustomButton>
        <CustomButton onCustomClick={reset}>Reiniciar</CustomButton>
        <CustomButton onCustomClick={restar}>Restar</CustomButton>
      </div>
    </>
  )
}

export default CounterApp
